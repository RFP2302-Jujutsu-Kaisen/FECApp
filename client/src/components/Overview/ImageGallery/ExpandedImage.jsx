import React from 'react';
import styled from 'styled-components';

// css
// const InputWrapper = styled.input`
//   border-bottom: ${({ selected }) => (selected && 'solid medium black')};
//   box-shadow: ${({ selected }) => (selected && '0 0 10px black')};
//   max-width: 80px;
//   height: auto;
//   border: 10px solid rgba(255,255,255,.5);
//   border-radius: 1000px;
// `;

const ExpDivWrapper = styled.div`
  display:flex;
  border: 10px solid blue;
  flex-grow: 1;
  justify-content: center;
  position: relative;

`;

const ImgWrapper = styled.input`
  display: flex;

  max-height: 800px;
  max-width: 1200px;
  object-fit: scale-down;
  object-position: 30% 30%;

`;

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
    <ExpDivWrapper data-testid="expImgInnerId">
      {imageIndex > 0 ? <button data-testid="expLeftId" type="button" onClick={setPrev}>Left</button> : null}
      <ImgWrapper
        data-testid="expToggleZoomId"
        type="image"
        src={style.photos[imageIndex].url}
        alt={imageIndex.toString()}
        onClick={toggleZoomHandler}
      />
      {imageIndex < numPhotos ? <button data-testid="expRightId" type="button" onClick={setNext}>Right</button> : null}
      <button data-testid="expToggleId" type="button" onClick={toggleHandler}>toggleMain</button>
    </ExpDivWrapper>
  );
}
