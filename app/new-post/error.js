'use client';

export default function NewPostError({ error }) {
    return (
        <>
            <h2>An error occurred!</h2>
            <p>{error.message}</p>
        </>
    );
}