import Link from "next/link";
import { Button } from "src/components/ui/button";
import "src/styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>Next 13 - TailwindCSS Starter Template</title>
      </head>
      <body>
        <div>
          <div className="container mx-auto flex flex-col gap-10">
            <header className="flex flex-row gap-2 py-6 text-xl font-bold">
              <Button asChild>
                <Link href="/">Home</Link>
              </Button>
              <Button asChild>
                <Link href="/posts">Posts</Link>
              </Button>
            </header>
            <main>{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
