import React from 'react';
import { useHistory } from 'react-router-dom';
import {
    List, ListItem, Box,
} from '@modulz/radix';

import ContentWrapper from '../../../shared/components/ContentWrapper';
import ProductForm from '../../../shared/components/ProductForm';
import LinkTo from '../../../shared/components/LinkTo';

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
            <Box>
                <h1>Add product</h1>
                <List>
                    <LinkTo to="/admin">
                        <ListItem>
                            ADMIN MAIN
                        </ListItem>
                    </LinkTo>
                </List>
            </Box>
            <ProductForm onSave={onSubmit} />
        </ContentWrapper>
    );
};

export default AddProduct;
