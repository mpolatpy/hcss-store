import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import './sign-in.styles.scss';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email:'',
            password:'',
        }
    }

    handleChange = (e) => {
        const {value, name} = e.target;

        this.setState({ [name]: value });
    }

    handleSubmit = async event => {
        event.preventDefault();
        console.log('Sign in button clicked')
        const { email, password } = this.state;

        try{
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });
        }catch(error){
            console.log(error);
        }
    }



    render(){
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password.</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name="email"
                        type="email"
                        handleChange = {this.handleChange}
                        value={this.state.email}
                        label='email'
                        required
                    />
                    <FormInput 
                        name="password"
                        type="password"
                        handleChange={this.handleChange}
                        value={this.state.password}
                        label='password'
                    />
                    <div className='buttons'>
                        <CustomButton type="submit">SignIn</CustomButton>
                        <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>
                            Sign in with Google
                        </CustomButton>
                    </div>    
                </form>
            </div>   
        );
    }

}

export default SignIn;