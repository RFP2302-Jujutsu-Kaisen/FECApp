import React from 'react';
import ThumbnailList from './ThumbnailList';
import MainImage from './MainImage';

export default function ExpandedView({
  style, imageIndex, toggleHandler, setImageIndex, toggleView,
}) {
  return (
    <div>
      <h3>ExpandedView</h3>
      <ThumbnailList
        style={style}
        imageIndex={imageIndex}
        setImageIndex={setImageIndex}
        toggleView={toggleView}
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
