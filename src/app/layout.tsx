import Header from "src/components/themes/basic/Header";
import { Separator } from "src/components/ui/separator";
import "src/styles/globals.css";
import { ThemeProvider } from "src/theme/ThemeProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Blog Site Template</title>
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Header />
          <div className="container my-6">
            <Separator />
          </div>
          <main className="container">{children}</main>
          <footer className="container my-6">
            <Separator />
            <div className="flex flex-row items-center justify-between py-6">
              <div className="flex flex-row gap-2">
                <span className="text-3xl font-medium">Logo</span>
              </div>
              <div className="flex flex-row items-center justify-start gap-2">
                <span className="text-foreground">© 2023</span>
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
