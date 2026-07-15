import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  variant?: "primary" | "ghost" | "outline";
};

export function Button({
  className = "",
  variant = "primary",
  ...props
}: ButtonProps) {
  const styles = {
    primary:
      "bg-[#f7f1e8] text-[#070a12] shadow-[0_0_38px_rgba(221,230,242,0.16)] hover:bg-[#fff8ec] hover:shadow-[0_0_34px_rgba(200,182,138,0.32),0_0_80px_rgba(221,230,242,0.18)]",
    ghost: "text-[#f7f1e8] hover:bg-white/8",
    outline:
      "border border-[#dde6f2]/24 text-[#f7f1e8] hover:border-[#c8b68a]/60 hover:bg-white/6 hover:shadow-[inset_0_0_24px_rgba(221,230,242,0.08),0_0_28px_rgba(175,199,232,0.12)]",
  };

  return (
    <button
      className={`inline-flex h-12 items-center justify-center gap-2 rounded-md px-5 text-sm font-medium transition ${styles[variant]} ${className}`}
      {...props}
    />
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost" | "outline";
  className?: string;
}) {
  const styles = {
    primary:
      "bg-[#f7f1e8] text-[#070a12] shadow-[0_0_38px_rgba(221,230,242,0.16)] hover:bg-[#fff8ec] hover:shadow-[0_0_34px_rgba(200,182,138,0.32),0_0_80px_rgba(221,230,242,0.18)]",
    ghost: "text-[#f7f1e8] hover:bg-white/8",
    outline:
      "border border-[#dde6f2]/24 text-[#f7f1e8] hover:border-[#c8b68a]/60 hover:bg-white/6 hover:shadow-[inset_0_0_24px_rgba(221,230,242,0.08),0_0_28px_rgba(175,199,232,0.12)]",
  };

  return (
    <Link
      href={href}
      className={`inline-flex h-12 items-center justify-center gap-2 rounded-md px-5 text-sm font-medium transition ${styles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
