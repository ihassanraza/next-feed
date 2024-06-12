import { v2 as cloudinary } from 'cloudinary';

if (!process.env.CLOUDINARY_CLOUD_NAME) {
    throw new Error('Missing cloudinary cloud name');
}

if (!process.env.CLOUDINARY_API_KEY) {
    throw new Error('Missing cloudinary api key');
}

if (!process.env.CLOUDINARY_API_SECRET) {
    throw new Error('Missing cloudinary api secret');
}

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

export default async function uploadImage(image) {
    const encoding = 'base64';
    const mime = image.type;
    const imageData = await image.arrayBuffer();
    const base64Data = Buffer.from(imageData).toString(encoding);
    const fileUri = 'data:' + mime + ';' + encoding + ',' + base64Data;
    const uploadResult = await cloudinary.uploader.upload(fileUri, {
        folder: "next-feed"
    });

    return uploadResult.secure_url;
}