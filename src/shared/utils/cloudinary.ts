import { Cloudinary } from 'cloudinary-core';

const cl = new Cloudinary({ cloud_name: 'decorativeprogressive' });

export const getCloudinaryUrl = (
    publicId: string,
    params: {height?: string; width?: string; crop?: string} = {},
): string => cl.url(publicId, params);
