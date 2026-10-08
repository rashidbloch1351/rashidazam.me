import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  external?: boolean;
  showArrow?: boolean;
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  external,
  showArrow = false,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#d97706] focus:ring-offset-2 focus:ring-offset-[#0f1012]";

  const variantStyles = {
    primary: "bg-[#d97706] hover:bg-[#b45309] text-white shadow-md hover:shadow-lg",
    secondary: "bg-[#17181c] hover:bg-[#202228] text-[#f3f4f6] border border-[#272a30]",
    outline: "border border-[#d97706] text-[#d97706] hover:bg-[#d97706]/10",
    ghost: "text-[#9ca3af] hover:text-[#f3f4f6] hover:bg-[#17181c]",
  };

  const sizeStyles = {
    sm: "text-xs px-3.5 py-2 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-6 py-3.5 gap-2.5",
  };

  const combinedClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          <span>{children}</span>
          {showArrow && <ArrowUpRight className="w-4 h-4" />}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        <span>{children}</span>
        {showArrow && <ArrowUpRight className="w-4 h-4" />}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      <span>{children}</span>
      {showArrow && <ArrowUpRight className="w-4 h-4" />}
    </button>
  );
}
