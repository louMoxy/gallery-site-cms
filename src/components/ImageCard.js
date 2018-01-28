import React from 'react';

export default ({ image, imgSize }) => {
    const className = `imageCard ${imgSize}`;
    return (
      <div className={className}>
        <img src={image} />
      </div>
      );
  }