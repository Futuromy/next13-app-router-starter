import Link from "next/link";
import Balancer from "react-wrap-balancer";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "src/components/ui/card";

export interface Post {
  id: number;
  title: string;
  body: string;
}

async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store", // This is the important part to disable caching
  });
  return (await res.json()) as Post[];
}

const IndexPage = async () => {
  const posts = await getPosts();

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <div key={post.id} className="cols-span-1">
          <Link
            href="/posts/[id]"
            as={`/posts/${post.id}`}
            className="hover:opacity-60"
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle>
                  <Balancer>{post.title}</Balancer>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-medium">{post.body}</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      ))}
    </div>
  );
};
export default IndexPage;
