import React from 'react';
import { useHistory } from 'react-router-dom';

import ContentWrapper from '../../../shared/components/ContentWrapper';
import ProductForm from '../../../shared/components/ProductForm';

import { createProduct } from '../../../services/products';
import type { ItemInterface } from '../../../Interfaces/ProductItemInterface';

const AddProduct: React.FC = () => {
    const history = useHistory();

    const onSubmit = async (form: Partial<ItemInterface>) => {
        const productId = await createProduct(form);
        history.push(`/admin/products/${productId}`);
    };

    return (
        <ContentWrapper>
            <ProductForm onSave={onSubmit} />
        </ContentWrapper>
    );
};

export default AddProduct;
