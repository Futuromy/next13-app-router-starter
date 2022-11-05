import { Post } from '../page';

async function GetPostById(id: number) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();
  return post as Post;
}

const SinglePost = async ({ params }: any) => {
  const post = await GetPostById(params.id);

  return (
    <>
      <title>Post {post.id}</title>
      <div>
        <h1 className="text-xl font-bold ">{post.title}</h1>
        <p>{post.body}</p>
      </div>
    </>
  );
};
export default SinglePost;
