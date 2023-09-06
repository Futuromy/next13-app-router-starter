/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { type Entry } from "contentful";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Balancer from "react-wrap-balancer";
import { Badge } from "src/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "src/components/ui/card";
import { cn } from "src/lib/utils";
import { type IBlogPostFields } from "src/types/generated/contentful";

interface BlogPostLargeCardProps {
  variant?: "default" | "primary" | "secondary";
  orientation?: "horizontal" | "vertical";
  size?: "default" | "sm" | "lg";
  imageWidth?: "default" | "sm" | "lg" | "full";
  imageHeight?: "default" | "sm" | "lg" | "xl" | "full";
  imageContentRatio?: "default" | "1/2" | "1/3" | "1/4" | "1/5";
  blogPost: Entry<IBlogPostFields>;
}

const BlogPostCard = (props: BlogPostLargeCardProps) => {
  const {
    variant = "default",
    size = "default",
    imageWidth = "default",
    imageHeight = "default",
    imageContentRatio = "default",
    orientation = "horizontal",
    blogPost,
  } = props;

  if (!blogPost) {
    return null;
  }

  const { image, title, description, publishDate, slug, author, category } =
    blogPost.fields;

  const imageUrl = `https:${image.fields.file.url}`;

  return (
    <Link
      href={`/post/${slug}`}
      className="transition-all hover:cursor-pointer hover:opacity-80"
    >
      <Card
        className={cn("flex h-full w-full items-center justify-start", {
          "flex-row": orientation === "horizontal",
          "flex-col": orientation === "vertical",
          "bg-background": variant === "default",
          "bg-primary": variant === "primary",
          "bg-secondary": variant === "secondary",
        })}
      >
        <CardHeader
          className={cn("flex-shrink-0", {
            "w-full": imageWidth === "full",
            "basis-1/2": imageContentRatio === "1/2",
            "basis-1/2 xl:basis-1/3": imageContentRatio === "1/3",
            "basis-1/4": imageContentRatio === "1/4",
          })}
        >
          {image.fields.file?.url && (
            <Image
              src={imageUrl}
              width={300}
              height={300}
              alt={image.fields.title}
              className={cn("w-full object-cover", {
                "h-48": imageHeight === "default",
                "h-36": imageHeight === "sm",
                "h-60": imageHeight === "lg",
                "h-72": imageHeight === "xl",
                "h-full": imageHeight === "full",
              })}
            />
          )}
        </CardHeader>
        <CardContent
          className={cn(
            "flex w-full flex-col items-start justify-between gap-4",
            {
              "basis-1/2": imageContentRatio === "1/2",
              "basis-1/2 xl:basis-2/3": imageContentRatio === "1/3",
              "basis-3/4": imageContentRatio === "1/4",
            }
          )}
        >
          <div className="flex w-full flex-col gap-2">
            <div className="flex flex-row items-center justify-start gap-2">
              {author && (
                <>
                  <span className="text-sm text-primary">{author}</span>{" "}
                  <span className="h-2 w-2 rounded-full bg-foreground/80" />
                </>
              )}
              {publishDate && (
                <span className="text-sm text-foreground/80">
                  {new Date(publishDate).toLocaleDateString()}
                </span>
              )}
            </div>
            <div className="flex w-full flex-row items-start justify-between gap-2">
              <CardTitle className="w-full">
                <Balancer>{title}</Balancer>
              </CardTitle>
              <Link href={`/post/${slug}`}>
                <ArrowUpRight className="h-6 w-6 text-foreground/80" />
              </Link>
            </div>
          </div>
          <p className="line-clamp-2 lg:line-clamp-3">{description}</p>
          <div className="flex flex-wrap gap-2">
            {/* <Badge>Tag 1</Badge> */}
            {category && <Badge>{category.fields.name}</Badge>}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default BlogPostCard;
