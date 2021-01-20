import { createSelector } from 'reselect';

export const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
    [selectShop], shop => shop.collections
);


export const selectCollectionsForPreview = createSelector( 
    [selectShopCollections], 
    collections => Object.keys(collections).map(key => collections[key])
);

export const selectCollection = collectionId => createSelector( 
    [selectShopCollections], collections => collections[collectionId]
);