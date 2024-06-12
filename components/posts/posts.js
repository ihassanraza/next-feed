'use client';

import { useOptimistic } from 'react';

import PostItem from "./post-item";
import likeTogglePost from '@/actions/like-toggle-post';

export default function Posts({ posts }) {
    const [optimisticPosts, updateOptimisticPosts] = useOptimistic(posts, (prevPosts, postId) => {
        const postIndex = prevPosts.findIndex((post) => post.id === postId);

        if (postIndex === -1) {
            return prevPosts;
        }

        let updatedPost = { ...prevPosts[postIndex] };
        updatedPost.likes = updatedPost.likes + (updatedPost.isLiked ? -1 : 1);
        updatedPost.isLiked = !updatedPost.isLiked;

        const updatedPosts = [...prevPosts];
        updatedPosts[postIndex] = updatedPost;

        return updatedPosts;
    });

    async function updatePost(postID) {
        updateOptimisticPosts(postID);
        await likeTogglePost(postID);
    }

    return (
        <ul className="posts">
            {
                optimisticPosts.map((post) => (
                    <li key={post.id}>
                        <PostItem post={post} action={updatePost} />
                    </li>
                ))
            }
        </ul>
    );
}