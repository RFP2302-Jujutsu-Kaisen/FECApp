import React from 'react';
import styled from 'styled-components';
import GalleryThumbnail from './GalleryThumbnail';

// css
// const ThumbnailListWrapper = styled.ul`
//   display: flex;
//   flex-direction: column;
//   list-style-type: none;
//   align-content: space-between;
//   justify-content: center;
//   height: 100%;
//   z-index: 5;
// `;

const ThumbnailListWrapper = styled.ul`
  display: grid;
  grid-template-columns: 1;
  grid-template-rows: repeat(7, 1fr);
  list-style: none;
  justify-content: center;
  gap: 3px;

`;

export default function ThumbnailList({
  style, imageIndex, setImageIndex,
}) {
  const listAmt = 7; // requires 7
  const listMin = Math.floor(listAmt / 2); // number of thumbnails to show

  const setPrev = () => setImageIndex(imageIndex - 1);
  const setNext = () => setImageIndex(imageIndex + 1);

  const thumbnails = [];
  const curMax = imageIndex + listMin + 1; // off by 1 index (max length)
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
        curListMax = listAmt;
        maxButtonFlag = true;
      } else if (curMax > numPhotos) {
        curListMax = numPhotos;
        curListMin = curListMax - listAmt;
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
    <div
      data-testid="galleryThumbListId"
      className="thumbnail-list"
    >
      {thumbnails.length > 0 && minButtonFlag
        ? <button type="button" onClick={setPrev}>Up</button> : null}
      <ThumbnailListWrapper>
        {thumbnails}
      </ThumbnailListWrapper>
      {thumbnails.length > 0 && maxButtonFlag
        ? <button type="button" onClick={setNext}>Down</button> : null}
    </div>
  );
}
