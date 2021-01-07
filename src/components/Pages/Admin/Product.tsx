import React from 'react';

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
    const [, dispatch] = useContextState();
    const { loading, item } = useGetProduct(match.params.id);

    const onSubmit = async (form: Partial<ItemInterface>) => {
        const product = await saveProduct(match.params.id, form);
        dispatch({ type: 'update', payload: { item: product } });
    };

    return (!loading && item && (
        <ContentWrapper>
            <AdminMenu pageTitle="Edit product" />
            <ProductForm
                formTitle={item.title}
                item={item}
                onSave={onSubmit}
                productId={String(item.id)}
                isEdit
            />
        </ContentWrapper>
    )) || null;
};

export default Product;
