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

const ImgWrapper = styled.input`
  display: flex;
  max-height: 800px;
  max-width: 1200px;
  object-fit: scale-down;
  object-position: 30% 30%;

`;

const ExpDivWrapper = styled.div`
  border: 10px solid blue;
  flex-grow: 1;
  justify-content: center;
  position: absolute;
  left: 0%;
  height: 100%;

`;

const ExpImgRelWrapper = styled.div`
  position: relative;
  border: 10px solid gray;
  min-width: 100%;
  min-height: 100%;
  height: 800px;
`;

const ScrollButton = styled.button`
  visibility: ${({ visibility }) => (visibility)};
`;

const ButtonImgDivWrapper = styled.div`
  display:flex;
  border: 10px solid orange;
  justify-content: space-between;
  height: 100%;
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
    <ExpImgRelWrapper>
      <ExpDivWrapper data-testid="expImgInnerId">
        <ButtonImgDivWrapper>
          <ScrollButton type="button" onClick={setPrev} visibility={imageIndex > 0 ? 'visible' : 'hidden'}>&lt;</ScrollButton>
          <ImgWrapper
            data-testid="expToggleZoomId"
            type="image"
            src={style.photos[imageIndex].url}
            alt={imageIndex.toString()}
            onClick={toggleZoomHandler}
          />
          <ScrollButton type="button" onClick={setNext} visibility={imageIndex < numPhotos ? 'visible' : 'hidden'}>&gt;</ScrollButton>
        </ButtonImgDivWrapper>
        <button data-testid="expToggleId" type="button" onClick={toggleHandler}>toggleMain</button>
      </ExpDivWrapper>
    </ExpImgRelWrapper>
  );
}
