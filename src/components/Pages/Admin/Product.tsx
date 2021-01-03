import React from 'react';
import { useForm } from 'react-hook-form';

import ContentWrapper from '../../../shared/components/ContentWrapper';

import { useGetProduct } from '../../../services/products';

interface ProductProps {
    match: { params: { id: string } };
}

interface FormData {
    title: string;
    description: string;
    price: number,
    productAssets: string;
}

const Product: React.FC<ProductProps> = ({ match }) => {
    const { loading, item } = useGetProduct(match.params.id);
    const {
        register,
        handleSubmit,
    } = useForm<FormData>();

    const onSubmit = handleSubmit((form) => {
        console.log(form);
    });

    return (!loading && item && (
        <ContentWrapper>
            <h1>{item.title}</h1>
            <form onSubmit={onSubmit}>
                <label htmlFor="title">
                    Title
                    <input id="title" name="title" ref={register} defaultValue={item.title} />
                </label>
                <label htmlFor="description">
                    Description
                    <input name="description" ref={register} defaultValue={item.description} />
                </label>
                <button type="submit">submit</button>
            </form>
        </ContentWrapper>
    )) || null;
};

export default Product;
