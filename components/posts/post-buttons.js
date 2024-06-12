'use client';

import { useFormStatus } from 'react-dom';

export default function PostButtons() {
    const { pending } = useFormStatus();

    return (
        <>
            <button type="reset">Reset</button>
            <button disabled={pending}>{pending ? 'Creating...' : 'Create Post'}</button>
        </>
    );
}