import { Cloudinary } from 'cloudinary-core';

const cl = new Cloudinary({ cloud_name: process.env.REACT_APP_CLOUDINARY_NAME });

export const getCloudinaryUrl = (
    publicId: string,
    params: {height?: string; width?: string; crop?: string} = {},
): string => cl.url(publicId, params);
