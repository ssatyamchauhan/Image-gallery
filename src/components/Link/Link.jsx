import React from 'react';


/* 
 * Make this component
 */
export const Link = ({ href, children }) => {
  return (
    <a href={href} target="_blank">{children}</a>
  );
}