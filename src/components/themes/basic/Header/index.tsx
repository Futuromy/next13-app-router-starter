import dynamic from "next/dynamic";
import Link from "next/link";
import { Button } from "src/components/ui/button";
import { Skeleton } from "src/components/ui/skeleton";

const ThemeToggle = dynamic(() => import("src/components/common/ThemeToggle"), {
  ssr: false,
  loading: () => <Skeleton className="h-10 w-10 rounded-full bg-background" />,
});

const Header = () => {
  return (
    <div className="sticky top-0 z-10 h-20 w-full bg-secondary">
      <header className="container flex flex-row items-center justify-between py-6">
        <div className="flex flex-row gap-2">
          <Link href="/" className="text-3xl font-medium">
            Logo
          </Link>
        </div>
        <div className="flex flex-row items-center justify-start gap-2">
          <Button asChild variant="link" className="text-foreground">
            <Link href="/">Home</Link>
          </Button>
          <Button asChild variant="link" className="text-foreground">
            <Link href="/projects">Projects</Link>
          </Button>
          <Button asChild variant="link" className="text-foreground">
            <Link href="/">About</Link>
          </Button>
          <Button asChild variant="link" className="text-foreground">
            <Link href="/">Newsletters</Link>
          </Button>
          <ThemeToggle />
        </div>
      </header>
    </div>
  );
};

export default Header;
