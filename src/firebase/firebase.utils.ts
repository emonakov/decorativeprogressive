import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
    apiKey: 'AIzaSyB3soEhhNdMoTzC5-QS7LwovpVZBhuoYbc',
    authDomain: 'design-db-c6fff.firebaseapp.com',
    projectId: 'design-db-c6fff',
    storageBucket: 'design-db-c6fff.appspot.com',
    messagingSenderId: '1023451974990',
    appId: '1:1023451974990:web:211aacd6f78c2f03dde21f',
};

firebase.initializeApp(config);

export const db = firebase.firestore();

// get full collection
export const getProducts = async (): Promise<void> => {
    console.log('askdaksjdklajsdklasjdkljasd');
    try {
        const productsRef = db.collection('products');
        console.log(productsRef);
        const snapshot = await productsRef.get();
        console.log(snapshot);
        snapshot.forEach((doc) => {
            console.log(doc.id, '=>', doc.data());
        });
    } catch (err) { console.log(err); }
};
