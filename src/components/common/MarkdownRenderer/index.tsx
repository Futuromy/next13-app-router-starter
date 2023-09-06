"use client";

import "github-markdown-css/github-markdown.css";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";
import CopyCodeButton from "src/components/common/CopyCodeButton";

interface MarkdownPreviewerPropsType {
  content: string;
}
const MarkdownPreviewer = ({ content }: MarkdownPreviewerPropsType) => {
  return (
    <div className="markdown-body h-full w-full">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={{
          pre({ children }) {
            return (
              <div className="group relative">
                <pre>
                  <CopyCodeButton>{children}</CopyCodeButton>
                  {children}
                </pre>
              </div>
            );
          },
          img({ src, alt }) {
            if (src) {
              return (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={src}
                  alt={alt ?? "Image"}
                  width={400}
                  height={400}
                  className="mx-auto h-fit w-3/4 rounded-md border-[1px] border-border object-cover object-center"
                />
              );
            }
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownPreviewer;
