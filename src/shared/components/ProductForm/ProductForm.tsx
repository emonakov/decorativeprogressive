import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
    Button,
    Flex as FlexUnstyled,
    Text,
    Input,
    // Textarea,
} from '@modulz/radix';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';

import type { ItemInterface } from '~interfaces/ProductItemInterface';

import { fetchPhotos, openUploadWidget } from '../../../services/cloudinary';

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
        setValue,
        errors,
    } = useForm({
        resolver: yupResolver(schema),
    });

    const [images, setImages] = useState<Array<any>>([]);

    useEffect(() => {
        register({ name: 'description' });
    }, [register]);

    const onSubmit = handleSubmit(onSave);

    const onEditorChange = (value: any) => {
        setValue('description', value);
    };

    const beginUpload = (tag: any) => {
        const uploadOptions = {
            cloudName: process.env.REACT_APP_CLOUDINARY_NAME,
            tags: [tag],
            apiKey: process.env.REACT_APP_CLOUDINARY_API_KEY,
            sources: ['local', 'url'],
            uploadPreset: 'ml_default',
        };

        openUploadWidget(uploadOptions, (error: any, photos: any) => {
            if (!error) {
                if (photos.event === 'success') {
                    setImages([...images, photos.info.public_id]);
                }
            }
        });
    };

    useEffect(() => {
        fetchPhotos('image', setImages);
    }, []);

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
                    <SunEditor
                        placeholder="product description"
                        name="description"
                        setOptions={{
                            height: 200,
                        }}
                        setContents={item?.description}
                        setDefaultStyle="font-family: Pavanam;"
                        enableToolbar
                        onChange={onEditorChange}
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
                <Button
                    size={1}
                    variant="green"
                    onClick={() => beginUpload('image')}
                    pr="10px"
                    type="button"
                >
                    Upload Images
                </Button>
                <Button size={1} variant="blue">SUBMIT</Button>
            </form>
        </Flex>
    );
};

export default ProductForm;
