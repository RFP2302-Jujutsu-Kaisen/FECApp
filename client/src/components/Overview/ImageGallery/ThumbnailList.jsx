import React from 'react';
import GalleryThumbnail from './GalleryThumbnail';

const listAmt = 7; // display up to listAmt thumbnails (7)
const listMin = Math.floor(listAmt / 2);

export default function ThumbnailList({
  style, imageIndex, setImageIndex, toggleView,
}) {
  const setPrev = () => setImageIndex(imageIndex - 1);
  const setNext = () => setImageIndex(imageIndex + 1);

  const thumbnails = [];
  const curMax = imageIndex + listMin;
  const curMin = imageIndex - listMin;
  let minButtonFlag = false;
  let maxButtonFlag = false;

  if (Object.keys(style).length > 0) {
    const numPhotos = style.photos.length;
    let curListMin = 0;
    let curListMax = numPhotos;

    // scrolling thumbnail list functionality
    if (numPhotos > listAmt) {
      // get window
      if (curMin < 0) {
        curListMin = 0;
        curListMax = listAmt - 1;
        maxButtonFlag = true;
      } else if (curMax > numPhotos - 1) {
        curListMax = numPhotos - 1;
        curListMin = curListMax - listAmt + 1;
        minButtonFlag = true;
      } else {
        curListMin = curMin;
        curListMax = curMax;
        minButtonFlag = true;
        maxButtonFlag = true;
      }
    }

    for (let i = curListMin; i < curListMax; i += 1) {
      thumbnails.push(
        <GalleryThumbnail
          photo={style.photos[i]}
          imageIndex={i}
          setImageIndex={setImageIndex}
          selected={i === imageIndex}
          key={i}
        />,
      );
    }
  }

  return (
    <div className={toggleView ? 'thumbnail-list' : 'icon-list'}>
      <h3>ThumbnailList</h3>
      {thumbnails.length > 0 && minButtonFlag
        ? <button type="button" onClick={setPrev}>Up</button> : null}
      <ul>
        {thumbnails}
      </ul>
      {thumbnails.length > 0 && maxButtonFlag
        ? <button type="button" onClick={setNext}>Down</button> : null}
    </div>
  );
}
