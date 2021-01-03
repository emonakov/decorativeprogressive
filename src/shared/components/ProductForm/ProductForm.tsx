import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import ContentWrapper from '../ContentWrapper';

import type { ItemInterface } from '../../../Interfaces/ProductItemInterface';

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
        <ContentWrapper>
            <h1>{formTitle}</h1>
            <form onSubmit={onSubmit}>
                <label htmlFor="title">
                    Title
                    <input id="title" name="title" ref={register} defaultValue={item?.title} />
                    <p>{errors.title?.message}</p>
                </label>
                <label htmlFor="description">
                    Description
                    <textarea id="description" name="description" ref={register} defaultValue={item?.description} />
                    <p>{errors.description?.message}</p>
                </label>
                <label htmlFor="price">
                    Price
                    <input id="price" name="price" ref={register} defaultValue={item?.price} />
                    <p>{errors.price?.message}</p>
                </label>
                <button type="submit">submit</button>
            </form>
        </ContentWrapper>
    );
};

export default ProductForm;
