import React from 'react';
import {
    List, ListItem, Box,
} from '@modulz/radix';

import LinkTo from '../../../shared/components/LinkTo';
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
            <Box>
                <h1>Edit product</h1>
                <List>
                    <LinkTo to="/admin">
                        <ListItem>
                            ADMIN MAIN
                        </ListItem>
                    </LinkTo>
                </List>
            </Box>
            <ProductForm
                formTitle={item.title}
                item={item}
                onSave={onSubmit}
            />
        </ContentWrapper>
    )) || null;
};

export default Product;
