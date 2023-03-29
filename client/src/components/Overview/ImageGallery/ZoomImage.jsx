import React, { useState } from 'react';

export default function ZoomImage({
  style, imageIndex, toggleZoomHandler,
}) {
  // state
  const [mousePos, setMousePos] = useState({
    left: 0,
    top: 0,
  });

  // handlers
  const zoomHandler = (event) => {
    setMousePos({ left: event.pageX, top: event.pageY });
    console.log(JSON.stringify(mousePos));
  };

  if (Object.keys(style).length > 0) {
    return (
      <div>
        <h3>ZoomImage</h3>
        <input
          data-testid="zoomImgId"
          className="zoom-img"
          type="image"
          height="320"
          width="320"
          src={style.photos[imageIndex].url}
          alt={imageIndex.toString()}
          onClick={toggleZoomHandler}
          onMouseMove={zoomHandler}
        />
      </div>
    );
  }

  return (
    <div>
      <h3>ZoomImage</h3>
      <button type="button" onClick={setToggleZoom}>Zoom</button>
    </div>
  );
}
