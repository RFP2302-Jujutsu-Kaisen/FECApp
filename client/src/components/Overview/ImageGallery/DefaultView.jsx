import React from 'react';
import ThumbnailList from './ThumbnailList';
import MainImage from './MainImage';

export default function DefaultView({
  style, imageIndex, toggleHandler, setImageIndex, toggleView,
}) {
  return (
    <div>
      <h3>DefaultView</h3>
      <ThumbnailList
        style={style}
        imageIndex={imageIndex}
        setImageIndex={setImageIndex}
      />
      <MainImage
        style={style}
        imageIndex={imageIndex}
        setImageIndex={setImageIndex}
        toggleHandler={toggleHandler}
      />
    </div>

  );
}
