import Link from 'next/link';
import 'styles/globals.css';

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
          <div className="container flex flex-col gap-10 mx-auto">
            <header className="flex flex-row gap-2 py-6 text-xl font-bold">
              <Link href="/">Home</Link>
              <Link href="/posts">Posts</Link>
            </header>
            <main>{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
