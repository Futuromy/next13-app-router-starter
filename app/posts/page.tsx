import Link from 'next/link';

export interface Post {
  id: number;
  title: string;
  body: string;
}

async function getPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    cache: 'no-store', // This is the important part to disable caching
  });
  const posts = await res.json();
  return posts as Post[];
}

const IndexPage = async () => {
  const posts = await getPosts();

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id} className="my-5">
          <div className="flex flex-col gap-2 p-4 rounded-lg bg-slate-300">
            <Link
              href="/posts/[id]"
              as={`/posts/${post.id}`}
              className="font-bold text-emerald-700 hover:text-opacity-60"
            >
              {post.title}
            </Link>
            {post.body}
          </div>
        </li>
      ))}
    </ul>
  );
};
export default IndexPage;
