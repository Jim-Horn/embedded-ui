import React, { HTMLProps } from 'react';

type ExternalLinkProps = HTMLProps<HTMLAnchorElement>;

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
