import firebase from 'firebase/app';
import 'firebase/firestore';

import { ItemInterface } from '../Interfaces/ProductItemInterface';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
};

firebase.initializeApp(config);

export const db = firebase.firestore();

export const getProducts = async (): Promise<ItemInterface[]> => {
    const products: Array<any> = [];
    const productsRef = db.collection('products');
    const snapshot = await productsRef.get();
    snapshot.forEach((doc) => {
        products.push({ id: doc.id, ...doc.data() });
    });

    return products;
};

export const getProduct = async (productId: string): Promise<ItemInterface> => {
    const productRef = db.collection('products').doc(productId);
    const product = (await productRef.get()).data() as ItemInterface;

    return product;
};
