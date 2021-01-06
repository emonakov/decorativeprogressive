import { StateInterface } from '../shared/components/StateProvider';
import { ItemInterface } from '../Interfaces/ProductItemInterface';
import { db } from '../firebase/firebase.utils';
import { useService } from '../shared/hooks/useService';

const getProducts = async (): Promise<ItemInterface[]> => {
    const products: Array<any> = [];
    const productsRef = db.collection('products');
    const snapshot = await productsRef.get();
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

export const createProduct = async (params: Partial<ItemInterface>): Promise<string> => {
    const productRef = db.collection('products').doc();

    await productRef.set({
        ...params,
        createdAt: new Date(),
    });

    return productRef.id;
};
