import React, { useState } from 'react';
import ThumbnailList from './ThumbnailList';
import ZoomImage from './ZoomImage';
import ExpandedImage from './ExpandedImage';

export default function ExpandedView({
  style, imageIndex, toggleHandler, setImageIndex, toggleView,
}) {
  const [toggleZoom, setToggleZoom] = useState(false);

  // handler
  const toggleZoomHandler = () => {
    setToggleZoom(!toggleZoom);
  };

  if (toggleZoom) {
    return (
      <div>
        <h3>ExpandedView</h3>
        <ThumbnailList
          style={style}
          imageIndex={imageIndex}
          setImageIndex={setImageIndex}
          toggleView={toggleView}
        />
        <ZoomImage
          style={style}
          imageIndex={imageIndex}
          toggleZoomHandler={toggleZoomHandler}
        />
      </div>
    );
  }

  return (
    <div>
      <h3>ExpandedView</h3>
      <ThumbnailList
        style={style}
        imageIndex={imageIndex}
        setImageIndex={setImageIndex}
        toggleView={toggleView}
      />
      <ExpandedImage
        style={style}
        imageIndex={imageIndex}
        setImageIndex={setImageIndex}
        toggleHandler={toggleHandler}
        toggleZoomHandler={toggleZoomHandler}
      />
    </div>
  );
}
