'use server';

import { revalidatePath } from "next/cache";

import { updatePostLikeStatus } from "@/lib/posts";

export default async function likeTogglePost(postID) {
    await updatePostLikeStatus(postID, 2);
    revalidatePath('/');
}