import React from 'react';
import { useToasts } from 'react-toast-notifications';

import AdminMenu from '../../../shared/components/AdminMenu';
import ContentWrapper from '../../../shared/components/ContentWrapper';
import ProductForm from '../../../shared/components/ProductForm';

import { useGetProduct, saveProduct } from '../../../services/products';
import { useContextState } from '../../../shared/components/StateProvider';

import type { ItemInterface } from '../../../Interfaces/ProductItemInterface';

interface ProductProps {
    match: { params: { id: string } };
}

const Product: React.FC<ProductProps> = ({ match }) => {
    const { addToast } = useToasts();
    const [, dispatch] = useContextState();
    const { loading, item } = useGetProduct(match.params.id);

    const onSubmit = async (form: Partial<ItemInterface>) => {
        try {
            const product = await saveProduct(match.params.id, form);
            dispatch({ type: 'update', payload: { item: product } });
            addToast('Product saved', { appearance: 'success' });
        } catch (err) {
            addToast(err.message, { appearance: 'error' });
        }
    };

    return (!loading && item && (
        <ContentWrapper>
            <AdminMenu pageTitle="Edit product" />
            <ProductForm
                formTitle={item.title}
                item={item}
                onSave={onSubmit}
            />
        </ContentWrapper>
    )) || null;
};

export default Product;
