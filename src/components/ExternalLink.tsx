import React, { HTMLProps, ReactNode } from 'react';

interface ExternalLinkProps extends HTMLProps<HTMLAnchorElement> {
  children: ReactNode;
  href: string;
  target?: string;
}

const ExternalLink = ({
  children,
  href,
  target = '_blank',
  ...rest
}: ExternalLinkProps) => (
  <a href={href} rel="noopener noreferrer" target={target} {...rest}>
    {children || href}
  </a>
);

export default ExternalLink;
