import dynamic from "next/dynamic";
import Link from "next/link";
import { Button } from "src/components/ui/button";
import "src/styles/globals.css";
import { ThemeProvider } from "src/theme/ThemeProvider";

const ThemeToggle = dynamic(() => import("src/components/ThemeToggle"), {
  ssr: false,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Next 13 - TailwindCSS Starter Template</title>
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <div className="container mx-auto flex flex-col gap-4">
            <header className="flex flex-row items-center justify-between">
              <div className="flex flex-row gap-2 py-6 text-xl font-bold">
                <Button asChild>
                  <Link href="/">Home</Link>
                </Button>
                <Button asChild>
                  <Link href="/posts">Posts</Link>
                </Button>
              </div>
              <ThemeToggle />
            </header>
            <main>{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
