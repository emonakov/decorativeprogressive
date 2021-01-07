import React, { useEffect, useState } from 'react';
import { v1 as uuid } from 'uuid';
import styled from 'styled-components';
import {
    Button,
    Flex as FlexUnstyled,
    Text,
    Input,
} from '@modulz/radix';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import SunEditor from 'suneditor-react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import 'suneditor/dist/css/suneditor.min.css';

import type { ItemInterface } from '~interfaces/ProductItemInterface';

import Img from '../CloudinaryImage';
import { openUploadWidget } from '../../../services/cloudinary';
import { getCloudinaryUrl } from '../../utils/cloudinary';

const FlexRow = styled(FlexUnstyled)`
    margin: ${({ theme }) => theme.paddingMd} 0;
`;

const Flex = styled(FlexUnstyled)`
    flex-direction: column;
`;

const Thumb = styled(Img)`
    opacity: 0.9;
    width: ${({ theme }) => theme.galleryThumbWidth};
    padding: 0;
    box-sizing: border-box;
    border: none;
    cursor: pointer;
    margin-right: ${({ theme }) => theme.paddingMd};
`;

interface AddProductInterface {
    onSave: (product: Partial<ItemInterface>) => void;
    isEdit?: boolean;
    productId: string;
    formTitle?: string;
    item?: ItemInterface;
}

const schema = yup.object().shape({
    title: yup.string().required(),
    description: yup.string().required(),
    price: yup.number().positive().integer().required(),
    images: yup.array().min(1).of(yup.string()).required(),
});

const ProductForm: React.FC<AddProductInterface> = ({
    onSave,
    productId,
    formTitle = 'ADD NEW PRODUCT',
    item,
    isEdit = false,
}) => {
    const [photoIndex, setPhotoIndex] = useState<number>(0);
    const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);
    const [images, setImages] = useState<string[]>();
    const {
        register,
        handleSubmit,
        setValue,
        getValues,
        errors,
        watch,
    } = useForm({
        resolver: yupResolver(schema),
    });

    const watchImages = watch('images');

    useEffect(() => {
        register({ name: 'description' });
        register({ name: 'images' });
    }, [register]);

    useEffect(() => {
        if (isEdit) {
            setValue('images', item?.images);
        }
    }, [isEdit, item]);

    useEffect(() => {
        setImages(getValues('images'));
    }, [watchImages]);

    const onSubmit = handleSubmit(onSave);

    const onEditorChange = (value: any) => {
        setValue('description', value);
    };

    const beginUpload = () => {
        openUploadWidget((error: any, photos: any) => {
            if (!error) {
                if (photos.event === 'success') {
                    const formImages = getValues('images') ?? [];
                    setValue('images', [...formImages, photos.info.public_id]);
                }
            }
        }, productId);
    };

    const getLightboxUrl = (url: string) => getCloudinaryUrl(url, { height: '864', crop: 'scale' });

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
                <label htmlFor="images">
                    <FlexRow>
                        {images && images.map((image: string) => (
                            <React.Fragment key={uuid()}>
                                <Thumb
                                    publicId={image}
                                    width="140"
                                    crop="scale"
                                    onClick={() => setIsLightboxOpen(true)}
                                />
                                {isLightboxOpen && (
                                    <Lightbox
                                        mainSrc={getLightboxUrl(images[photoIndex])}
                                        nextSrc={getLightboxUrl(images[(photoIndex + 1) % images.length])}
                                        prevSrc={
                                            getLightboxUrl(images[(photoIndex + images.length - 1) % images.length])
                                        }
                                        onCloseRequest={() => setIsLightboxOpen(false)}
                                        onMovePrevRequest={
                                            () => setPhotoIndex((photoIndex + images.length - 1) % images.length)
                                        }
                                        onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
                                    />
                                )}
                            </React.Fragment>
                        ))}
                    </FlexRow>
                </label>
                <Button
                    size={1}
                    variant="green"
                    onClick={() => beginUpload()}
                    pr="10px"
                    type="button"
                >
                    Upload Images
                </Button>
                <Button size={1} variant="blue">SUBMIT</Button>
                <p>{errors.images?.message}</p>
            </form>
        </Flex>
    );
};

export default ProductForm;
