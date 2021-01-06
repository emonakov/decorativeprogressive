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
export const openUploadWidget = async (options, callback) => {
    const scOptions = Util.withSnakeCaseKeys({
        ...options,
        async uploadSignature (fn: (signature: string) => void, params: Object) {
            const signature = await axios.post('/api/signUpload', params);
            fn(signature.data);
        },
    });
    // @ts-ignore
    window.cloudinary.openUploadWidget(scOptions, callback);
};

// @ts-ignore
export async function fetchPhotos(imageTag, setter) {
    const options = {
        cloudName: process.env.REACT_APP_CLOUDINARY_NAME,
        format: 'json',
        type: 'list',
        version: Math.ceil(new Date().getTime() / 1000),
    };

    const urlPath = url(imageTag.toString(), options);

    fetch(urlPath)
        .then((res) => res.text())
        // @ts-ignore
        .then((text) => (text ? setter(JSON.parse(text).resources.map((image) => image.public_id)) : []))
        .catch((err) => console.log(err));
}
