import { type Post } from "src/app/posts/page";
import React from "react";

interface Props {
  postId: number;
}

async function getPostById(id: number) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return (await res.json()) as Post;
}

const SinglePost = async ({ postId }: Props) => {
  const post = await getPostById(postId);

  return (
    <>
      <title>{`Post ${post.id}`}</title>
      <div>
        <h1 className="text-xl font-bold ">{post.title}</h1>
        <p>{post.body}</p>
      </div>
    </>
  );
};
export default SinglePost;
