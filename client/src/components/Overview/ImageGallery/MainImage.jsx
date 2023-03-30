import React from 'react';
import styled from 'styled-components';

// css
const MainDivWrapper = styled.div`
  display:flex;
  border: 10px solid blue;
  justify-content: space-between;
  height: 100%;
`;

const MainImgWrapper = styled.input`
  display: flex;
  max-width: 100%;
  max-height: 100%;
  height: auto;
  object-fit: scale-down;
  object-position: 30% 30%;

`;

const ScrollButton = styled.button`
  visibility: ${({ visibility }) => (visibility)};
`;

export default function MainImage({
  style, imageIndex, setImageIndex, toggleHandler,
}) {
  // general handlers
  const changeView = (event) => {
    toggleHandler();
    event.target.blur(); // stop focusing on input/image
    event.preventDefault();
  };

  if (Object.keys(style).length > 0) {
    const numPhotos = style.photos.length - 1;
    // handlers for buttons
    const setPrev = () => { if (imageIndex > 0) { setImageIndex(imageIndex - 1); } };
    const setNext = () => { if (imageIndex < numPhotos) { setImageIndex(imageIndex + 1); } };

    // onClick={changeView}
    return (
      <MainDivWrapper data-testid="mainImageId">
        <ScrollButton type="button" onClick={setPrev} visibility={imageIndex > 0 ? 'visible' : 'hidden'}>&lt;</ScrollButton>
        <div>
          <MainImgWrapper
            data-testid="imgToggleId"
            type="image"
            src={style.photos[imageIndex].url}
            alt={imageIndex.toString()}
            onClick={changeView}
          />
          <button type="button" onClick={toggleHandler}>toggleExp</button>
        </div>
        <ScrollButton type="button" onClick={setNext} visibility={imageIndex < numPhotos ? 'visible' : 'hidden'}>&gt;</ScrollButton>
      </MainDivWrapper>
    );
  }

  return (
    <div>
      <h3>MainImage</h3>
    </div>
  );
}
