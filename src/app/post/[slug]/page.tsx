import { type NextPage } from "next";
import Image from "next/image";
import Balancer from "react-wrap-balancer";
import MarkdownPreviewer from "src/components/common/MarkdownRenderer";
import { getBlogPostBySlug } from "src/lib/contentful/queries";

const SinglePostPage: NextPage<{ params: { slug: string } }> = async (
  props
) => {
  const { params } = props;
  const { slug } = params;

  const blogPosts = await getBlogPostBySlug(slug);
  const blogPost = blogPosts.items[0];

  if (!blogPost) {
    return null;
  }

  const imageUrl = `https:${blogPost.fields.image.fields.file.url}`;

  return (
    <>
      <div className="flex flex-col gap-6">
        <div className="flex justify-center">
          <Image
            src={imageUrl}
            alt={blogPost.fields.title}
            width={500}
            height={500}
            className="mx-auto h-fit max-h-[500px] w-3/4 rounded-md border-[1px] border-border object-cover object-center"
          />
        </div>
        <h1 className="text-5xl font-bold">
          <Balancer>{blogPost.fields.title}</Balancer>
        </h1>
        <MarkdownPreviewer content={blogPost.fields.body} />
      </div>
    </>
  );
};
export default SinglePostPage;
