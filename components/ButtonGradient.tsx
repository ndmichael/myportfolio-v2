import Link from "next/link";
import { cn } from "@/lib/utils";

interface PrimaryButtonProps {
  href?: string;
  children: React.ReactNode;
  fullWidth?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
}

export function PrimaryButton({
  href,
  children,
  fullWidth,
  onClick,
  type = "button",
}: PrimaryButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 px-8 py-3 text-base font-semibold rounded-xl",
    "bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 text-white",
    "hover:opacity-90 transition-transform duration-300 active:scale-95",
    fullWidth && "w-full" // 
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
