import { createSelector } from 'reselect';

export const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
    [selectShop], shop => shop.collections
);


export const selectCollectionsForPreview = createSelector( 
    [selectShopCollections], 
    collections => 
    collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectCollection = collectionId => createSelector( 
    [selectShopCollections], 
    collections => collections ? collections[collectionId] : null
);

export const selectIsCollectionFetching = createSelector ( 
    [selectShop],
    shop => shop.isFetching
);

export const selectIsCollectionsLoaded = createSelector ( 
    [selectShop],
    shop => !!shop.collections
);