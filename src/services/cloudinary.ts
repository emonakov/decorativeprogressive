import axios from 'redaxios';

/* eslint-disable */
import { Cloudinary as CoreCloudinary, Util } from 'cloudinary-core';

// @ts-ignore
export const url = (publicId, options) => {
    const scOptions = Util.withSnakeCaseKeys(options);
    // @ts-ignore
    const cl = CoreCloudinary.new();

    return cl.url(publicId, scOptions);
};

// @ts-ignore
export const openUploadWidget = async (callback, productId) => {
    const scOptions = Util.withSnakeCaseKeys({
        cloudName: process.env.REACT_APP_CLOUDINARY_NAME,
        tags: ['image'],
        apiKey: process.env.REACT_APP_CLOUDINARY_API_KEY,
        sources: ['local', 'url'],
        uploadPreset: 'ml_default',
        folder: `assets/${productId}`,
        async uploadSignature (fn: (signature: string) => void, params: Object) {
            const signature = await axios.post('/api/signUpload', params);
            fn(signature.data);
        },
    });
    // @ts-ignore
    window.cloudinary.openUploadWidget(scOptions, callback);
};
