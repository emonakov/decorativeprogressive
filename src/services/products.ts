import axios from 'redaxios';

import { StateInterface } from '../shared/components/StateProvider';
import { ItemInterface } from '../Interfaces/ProductItemInterface';
import { db } from '../firebase/firebase.utils';
import { useService } from '../shared/hooks/useService';

const getProducts = async (): Promise<ItemInterface[]> => {
    const products: Array<any> = [];
    const productsRef = db.collection('products');
    const snapshot = await productsRef.orderBy('createdAt', 'desc').get();
    snapshot.forEach((doc) => {
        products.push({ id: doc.id, ...doc.data() });
    });

    return products;
};

const getProduct = async (productId: string): Promise<ItemInterface> => {
    const productRef = db.collection('products').doc(productId);
    const product = (await productRef.get()).data() as ItemInterface;

    return product;
};

export const useGetProducts = (): StateInterface => useService(getProducts, 'items');
export const useGetProduct = (productId: string): StateInterface => useService(getProduct, 'item', productId);

export const saveProduct = async (productId: string, params: Partial<ItemInterface>): Promise<ItemInterface> => {
    const productRef = db.collection('products').doc(productId);
    await productRef.set({
        ...params,
        updatedAt: new Date(),
    }, { merge: true });

    return getProduct(productId);
};

export const generateProductId = (): string => db.collection('products').doc().id;

export const createProduct = async (params: Partial<ItemInterface>, productId: string): Promise<void> => {
    const productRef = db.collection('products').doc(productId);

    await productRef.set({
        ...params,
        createdAt: new Date(),
    });
};

export const deleteProductImage = async (publicId: string): Promise<any> => {
    const result = await axios.post('/api/destroy', { publicId });

    return result;
};

export const deleteProduct = async (publicId: string): Promise<void> => {
    await db.collection('products').doc(publicId).delete();
};
