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

  if (Object.keys(style).length > 0) {
    const numPhotos = style.photos.length - 1;
    return (
      <div>
        <h3>ExpandedImage</h3>
        {imageIndex > 0 ? <button type="button" onClick={setPrev}>Left</button> : null}
        <input
          type="image"
          height="320"
          width="320"
          src={style.photos[imageIndex].url}
          alt={imageIndex.toString()}
          onClick={toggleZoomHandler}
        />
        {imageIndex < numPhotos ? <button type="button" onClick={setNext}>Right</button> : null}
        <button type="button" onClick={toggleHandler}>toggleView</button>
      </div>
    );
  }

  return (
    <div>
      <h3>MainImage</h3>
    </div>
  );
}
