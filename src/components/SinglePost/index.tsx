import { type Post } from "src/app/posts/page";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "src/components/ui/card";

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
      <Card>
        <CardHeader>
          <CardTitle>{post.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="max-w-4xl">{post.body}</p>
        </CardContent>
      </Card>
    </>
  );
};
export default SinglePost;
