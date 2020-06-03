import { Cloudinary } from 'cloudinary-core';

const cl = new Cloudinary({ cloud_name: 'decorativeprogressive' });

export const getCloudinaryUrl = (publicId: string): string => cl.url(publicId);
