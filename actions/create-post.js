'use server';

import { redirect } from 'next/navigation';

import uploadImage from '@/lib/cloudinary';
import { storePost } from '@/lib/posts';

export async function createPost(initalState, formData) {
    const title = formData.get('title');
    const image = formData.get('image');
    const content = formData.get('content');

    let errors = [];

    if (!title || title.trim().length == 0) {
        errors.push('Invalid title!');
    }

    if (!image.size > 0) {
        errors.push('Invalid image!');
    }

    if (!content || content.trim().length == 0) {
        errors.push('Invalid content!');
    }

    if (errors.length > 0) {
        return errors;
    }

    let imgURL;
    try {
        imgURL = await uploadImage(image);
    } catch(error) {
        throw new Error(error.message);
    }

    const postData = {
        title: title,
        imageUrl: imgURL,
        content: content,
        userId: 2
    };

    await storePost(postData);
    redirect('/feed');
}