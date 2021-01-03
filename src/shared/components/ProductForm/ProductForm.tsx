import React from 'react';
import styled from 'styled-components';
import {
    Button,
    Flex as FlexUnstyled,
    Text,
    Input,
    Textarea,
} from '@modulz/radix';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import type { ItemInterface } from '../../../Interfaces/ProductItemInterface';

const Flex = styled(FlexUnstyled)`
    flex-direction: column;
`;

interface AddProductInterface {
    onSave: (product: Partial<ItemInterface>) => void;
    formTitle?: string;
    item?: ItemInterface;
}

const schema = yup.object().shape({
    title: yup.string().required(),
    description: yup.string().required(),
    price: yup.number().positive().integer().required(),
});

const ProductForm: React.FC<AddProductInterface> = ({ onSave, formTitle = 'ADD NEW PRODUCT', item }) => {
    const {
        register,
        handleSubmit,
        errors,
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = handleSubmit(onSave);

    return (
        <Flex>
            <h1>{formTitle}</h1>
            <form onSubmit={onSubmit}>
                <label htmlFor="title">
                    <Text size={4}>Title</Text>
                    <Input
                        size={1}
                        id="title"
                        name="title"
                        ref={register}
                        defaultValue={item?.title}
                        placeholder="product title"
                    />
                    <p>{errors.title?.message}</p>
                </label>
                <label htmlFor="description">
                    <Text size={4}>Description</Text>
                    <Textarea
                        placeholder="product description"
                        id="description"
                        name="description"
                        ref={register}
                        size={1}
                        defaultValue={item?.description}
                    />
                    <p>{errors.description?.message}</p>
                </label>
                <label htmlFor="price">
                    <Text size={4}>Price</Text>
                    <Input
                        size={1}
                        id="price"
                        name="price"
                        ref={register}
                        defaultValue={item?.price}
                        placeholder="product price"
                    />
                    <p>{errors.price?.message}</p>
                </label>
                <Button size={1} variant="blue">SUBMIT</Button>
            </form>
        </Flex>
    );
};

export default ProductForm;
