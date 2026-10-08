import React from 'react';

export function Container({
  children,
  className = '',
  size = 'default',
}: {
  children: React.ReactNode;
  className?: string;
  size?: 'default' | 'small' | 'wide';
}) {
  const sizeClasses = {
    small: 'max-w-4xl',
    default: 'max-w-7xl',
    wide: 'max-w-[90rem]',
  };

  return (
    <div className={`mx-auto px-4 sm:px-6 lg:px-8 ${sizeClasses[size]} ${className}`}>
      {children}
    </div>
  );
}
