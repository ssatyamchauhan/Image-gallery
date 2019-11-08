import React from 'react';


/* 
 * Make this component
 */
export const Gallery = ({ data }) => {
  return (
    <div>
      <pre>{JSON.stringify(data.map((image) => image.url), null, 2)}</pre>
    </div>
  );
}