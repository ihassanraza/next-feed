import { getPosts } from "@/lib/posts";
import Posts from "@/components/posts/posts";

export default async function LatestPosts() {
    const posts = await getPosts(3);

    return (
        <section id="latest-posts">
            <Posts posts={posts} />
        </section>  
    );
}