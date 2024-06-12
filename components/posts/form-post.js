'use client';

import { useFormState } from 'react-dom'

import { createPost } from "@/actions/create-post";

import PostButtons from "@/components/posts/post-buttons";

export default function FormPost() {
    const [state, formAction] = useFormState(createPost, []);

    return (
        <form action={formAction}>
            <p className="form-control">
                <label htmlFor="title">Title</label>
                <input type="text" id="title" name="title" />
            </p>
            <p className="form-control">
                <label htmlFor="image">Image URL</label>
                <input
                    type="file"
                    accept="image/png, image/jpeg"
                    id="image"
                    name="image"
                />
            </p>
            <p className="form-control">
                <label htmlFor="content">Content</label>
                <textarea id="content" name="content" rows="5" />
            </p>
            <p className="form-actions">
                <PostButtons />
            </p>
            <ul className="form-errors">
                {
                    state && state.map((error, index) => (
                        <li key={index}>{error}</li>
                    ))
                }
            </ul>
        </form>
    );
}