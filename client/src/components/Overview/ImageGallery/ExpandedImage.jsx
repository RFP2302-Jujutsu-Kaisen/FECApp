import React from 'react';

export default function ExpandedImage({
  style, imageIndex, setImageIndex, toggleHandler, toggleZoomHandler,
}) {
  // handlers
  const setPrev = () => setImageIndex(imageIndex - 1);
  const setNext = () => setImageIndex(imageIndex + 1);

  // const changeView = (event) => {
  //   toggleHandler();
  //   event.target.blur(); // stop focusing on input/image
  //   event.preventDefault();
  // };

  const numPhotos = style.photos.length - 1;
  return (
    <div data-testid="expImgInnerId">
      <h3>ExpandedImage</h3>
      {imageIndex > 0 ? <button data-testid="expLeftId" type="button" onClick={setPrev}>Left</button> : null}
      <input
        data-testid="expToggleZoomId"
        type="image"
        height="320"
        width="320"
        src={style.photos[imageIndex].url}
        alt={imageIndex.toString()}
        onClick={toggleZoomHandler}
      />
      {imageIndex < numPhotos ? <button data-testid="expRightId" type="button" onClick={setNext}>Right</button> : null}
      <button data-testid="expToggleId" type="button" onClick={toggleHandler}>toggleView</button>
    </div>
  );
}
