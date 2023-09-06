"use client";
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { CheckIcon } from "lucide-react";
import { type ReactNode, useState } from "react";
import Children from "react-children-utilities";

interface CopyCodeButtonPropsType {
  children: ReactNode;
}

const CopyCodeButton = ({ children }: CopyCodeButtonPropsType) => {
  const code = Children.onlyText(children);
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    if (code) {
      await navigator.clipboard.writeText(code);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    }
  };

  return (
    <button
      className="absolute right-0 top-0 z-10 rounded-bl-md bg-primary px-4 py-1 text-foreground opacity-90 transition-all duration-200 hover:bg-primary/70"
      onClick={handleCopy}
    >
      {isCopied ? (
        <span className="flex flex-row items-center justify-start gap-2">
          <CheckIcon className="h-4 w-4" />
          Copied
        </span>
      ) : (
        "Copy"
      )}
    </button>
  );
};

export default CopyCodeButton;
