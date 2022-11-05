export default function PostsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <title>Posts | Next 13 - TailwindCSS Starter Template</title>
      {children}
    </>
  );
}
