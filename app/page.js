import { Suspense } from "react";
import LatestPosts from "@/components/posts/latest-posts";

export default async function HomePage() {
  return (
    <>
      <h1>Welcome back!</h1>
      <p>Here's what you might've missed.</p>
      <Suspense fallback={<p>Loading recent posts...</p>}>
        <LatestPosts />
      </Suspense>
    </>
  );
}
