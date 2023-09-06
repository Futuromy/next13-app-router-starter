import { type FunctionComponent } from "react";
import BlogPostCard from "src/components/themes/basic/Cards/BlogPostCard";
import { Button } from "src/components/ui/button";
import { Separator } from "src/components/ui/separator";
import { getEntries } from "src/lib/contentful/queries";

const IndexPage: FunctionComponent = async () => {
  const blogPosts = await getEntries("blogPost");

  return (
    <>
      {/* <h1 className="text-center text-[160px] font-bold">THE BLOG</h1> */}
      {/* <Separator className="my-6" /> */}

      <div className="flex h-full flex-col gap-4">
        <h2>Recent Blog Posts</h2>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-5">
          <div className="col-span-1 h-full lg:col-span-2">
            <BlogPostCard
              blogPost={blogPosts.items[0]!}
              orientation="vertical"
              imageWidth="full"
              imageHeight="xl"
            />
          </div>
          <div className="col-span-1 flex flex-col gap-4 lg:col-span-3">
            <BlogPostCard
              imageHeight="lg"
              blogPost={blogPosts.items[1]!}
              imageContentRatio="1/2"
            />
            <BlogPostCard
              imageHeight="lg"
              blogPost={blogPosts.items[2]!}
              imageContentRatio="1/2"
            />
          </div>
        </div>
        <BlogPostCard
          imageContentRatio="1/2"
          imageHeight="xl"
          blogPost={blogPosts.items[3]!}
        />
      </div>
      <Separator className="my-6" />
      <div className="flex h-full flex-col gap-4">
        <h2>All Blog Posts</h2>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
          {blogPosts.items.map((blogPost, index) => {
            return (
              <BlogPostCard
                key={index}
                blogPost={blogPost}
                imageHeight="lg"
                orientation="vertical"
                imageWidth="full"
              />
            );
          })}
        </div>
      </div>
      <Separator className="my-6" />
      <div className="relative flex flex-row items-center justify-between gap-4">
        <Button variant="outline">Previous</Button>
        <Button variant="outline">Next</Button>
        <div className="absolute inset-0 flex flex-row items-center justify-center gap-4">
          <span className="text-foreground">1</span>
          <span className="text-foreground">2</span>
          <span className="text-foreground">3</span>
        </div>
      </div>
    </>
  );
};
export default IndexPage;
