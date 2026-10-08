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
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#d97706] focus:ring-offset-2 focus:ring-offset-white";

  const variantStyles = {
    primary: "bg-[#d97706] hover:bg-[#b45309] text-white shadow-xs hover:shadow-md",
    secondary: "bg-slate-100 hover:bg-slate-200 text-slate-800 border border-gray-200",
    outline: "border border-[#d97706] text-[#d97706] hover:bg-amber-50",
    ghost: "text-slate-600 hover:text-slate-900 hover:bg-slate-100",
  };

  const sizeStyles = {
    sm: "text-xs px-3.5 py-2 gap-1.5 min-h-[38px]",
    md: "text-sm px-5 py-2.5 gap-2 min-h-[44px]",
    lg: "text-base px-6 py-3.5 gap-2.5 min-h-[50px]",
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
