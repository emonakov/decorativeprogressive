import React from 'react';
import { useHistory } from 'react-router-dom';

import AdminMenu from '../../../shared/components/AdminMenu';
import ContentWrapper from '../../../shared/components/ContentWrapper';
import ProductForm from '../../../shared/components/ProductForm';

import { createProduct, generateProductId } from '../../../services/products';
import type { ItemInterface } from '../../../Interfaces/ProductItemInterface';

const AddProduct: React.FC = () => {
    const history = useHistory();
    const productId = generateProductId();

    const onSubmit = async (form: Partial<ItemInterface>) => {
        await createProduct(form, productId);
        history.push(`/admin/products/${productId}`);
    };

    return (
        <ContentWrapper>
            <AdminMenu pageTitle="Add product" />
            <ProductForm onSave={onSubmit} />
        </ContentWrapper>
    );
};

export default AddProduct;
