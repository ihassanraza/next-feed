import LikeButton from "./like-button";

export default function PostItem({ post, action }) {
    return (
        <article className="post">
            <div className="post-image">
                <img src={post.image} alt={post.title} />
            </div>
            <div className="post-content">
                <header>
                    <div>
                        <h2>{post.title}</h2>
                        <p>
                            Shared by {post.userFirstName} on{' '}
                            <time dateTime={post.createdAt}>
                                {post.createdAt}
                            </time>
                        </p>
                    </div>
                    <div>
                        <form action={action.bind(null, post.id)} className={post.isLiked ? 'liked' : undefined}>
                            <LikeButton />
                        </form>
                    </div>
                </header>
                <p>{post.content}</p>
            </div>
        </article>
    );
}