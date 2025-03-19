import React from 'react';

interface SocialLinkProps {
  href: string;
  label: string;
  children: React.ReactNode;
  className?: string;
}

export const SocialLink: React.FC<SocialLinkProps> = ({ href, label, children, className = "" }) => {
  return (
    <a 
      href={href} 
      target="_blank"
      rel="noopener noreferrer"
      className={`text-muted-foreground hover:text-foreground ${className}`} 
      aria-label={label}
    >
      {children}
    </a>
  );
};