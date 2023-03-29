import React from 'react';
import styled from 'styled-components';

// css
const MainDivWrapper = styled.div`
  display:flex;
  border: 10px solid blue;
  flex-grow: 1;
  justify-content: center;
  position: relative;

`;

const MainImgWrapper = styled.input`
  display: flex;

  max-height: 800px;
  max-width: 1200px;
  object-fit: scale-down;
  object-position: 30% 30%;

`;

const LeftButton = styled.button`
  visibility: hidden;
`;

// TODO: FOR ZOOMED IMAGE DOWN HERE
// const MainImgWrapper = styled.input`
//   display: flex;

//   max-height: 800px;
//   max-width: 1200px;
//   object-fit: none;
//   object-position: left top;

// `;

// object-fit: scale-down;

export default function MainImage({
  style, imageIndex, setImageIndex, toggleHandler,
}) {
  // handlers
  const setPrev = () => { if (imageIndex > 0) { setImageIndex(imageIndex - 1); } };
  const setNext = (max) => { if (imageIndex < max) { setImageIndex(imageIndex + 1); } };

  const changeView = (event) => {
    toggleHandler();
    event.target.blur(); // stop focusing on input/image
    event.preventDefault();
  };

  if (Object.keys(style).length > 0) {
    const numPhotos = style.photos.length - 1;
    return (
      <MainDivWrapper data-testid="mainImageId">
        {/* {imageIndex > 0 ? <button type="button" onClick={setPrev}>Left</button> : null} */}
        <LeftButton type="button" onClick={setPrev}>Left</LeftButton>
        <MainImgWrapper
          data-testid="imgToggleId"
          type="image"
          src={style.photos[imageIndex].url}
          alt={imageIndex.toString()}
          onClick={changeView}
        />
        {imageIndex < numPhotos ? <button type="button" onClick={setNext.bind(null, numPhotos)}>Right</button> : null}
        <button type="button" onClick={toggleHandler}>toggleExp</button>
      </MainDivWrapper>
    );
  }

  return (
    <div>
      <h3>MainImage</h3>
    </div>
  );
}
