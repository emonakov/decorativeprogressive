import React, { useEffect, useState } from 'react';
import { v1 as uuid } from 'uuid';
import styled from 'styled-components';
import {
    Button,
    Flex as FlexUnstyled,
    Text,
    Input,
    Box as BoxUnstyled,
} from '@modulz/radix';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
import { deleteProduct } from '../../../services/products';

const Popover = PopoverPrimitive.Root;
const PopoverTrigger = styled(PopoverPrimitive.Trigger)`
    background: none;
    outline: none;
    border: none;
    height: 15px;
    cursor: pointer;
`;
const PopoverContent = styled(PopoverPrimitive.Content)`
    background-color: white;
    overflow: hidden;

    &:focus {
        outline: none;
    }
`;

const PopoverBox = styled(BoxUnstyled)`
    display: flex;
    flex-direction: column;
    min-width: 150px;
    min-height: 70px;
    padding: 15px;
    justify-content: space-between;
    align-items: center;
`;

const IconDelete = styled(FontAwesomeIcon)`
    width: ${({ theme }) => theme.paddingMd};
    height: ${({ theme }) => theme.paddingMd};
`;

const FlexRow = styled(FlexUnstyled)`
    margin: ${({ theme }) => theme.paddingMd} 0;
`;

const Flex = styled(FlexUnstyled)`
    flex-direction: column;
`;

const Box = styled(BoxUnstyled)`
    position: relative;
    margin-right: ${({ theme }) => theme.paddingMd};
`;

const Thumb = styled(Img)`
    opacity: 0.9;
    width: ${({ theme }) => theme.galleryThumbWidth};
    padding: 0;
    box-sizing: border-box;
    border: none;
    cursor: pointer;
`;

const DeleteContainer = styled.div`
    position: absolute;
    right: -15px;
    height: 15px;
    cursor: pointer;
    display: inline-block;
`;

interface AddProductInterface {
    onSave: (product: Partial<ItemInterface>) => void;
    isEdit?: boolean;
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
        });
    };

    const onDeleteImage = async (image: string) => {
        const savedImages = getValues('images');
        if (isEdit && savedImages.length <= 1) {
            return;
        }
        const result = await deleteProduct(image);
        if (result !== 'not ok') {
            const formImages = savedImages.filter((formImage: string) => image !== formImage);
            setValue('images', formImages);
            setImages(formImages);
        }
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
                            <Box key={uuid()}>
                                <Thumb
                                    publicId={image}
                                    width="140"
                                    crop="scale"
                                    onClick={() => setIsLightboxOpen(true)}
                                />
                                <DeleteContainer>
                                    <Popover>
                                        <PopoverTrigger>
                                            <IconDelete icon={['fas', 'trash']} size="2x" />
                                        </PopoverTrigger>
                                        <PopoverContent>
                                            <PopoverBox>
                                                <div>DELETE THIS IMAGE?</div>
                                                <Button variant="red" onClick={() => onDeleteImage(image)}>YES</Button>
                                            </PopoverBox>
                                        </PopoverContent>
                                    </Popover>
                                </DeleteContainer>
                            </Box>
                        ))}
                        {images && isLightboxOpen && (
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
