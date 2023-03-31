import React from 'react';
import styled from 'styled-components';

// css

// const ExpDivWrapper = styled.div`
//   border: 10px solid blue;
//   flex-grow: 1;
//   justify-content: center;
//   position: absolute;
//   left: 0%;
//   height: 100%;

// `;

// const ExpImgRelWrapper = styled.div`
//   position: relative;
//   border: 10px solid gray;
//   min-width: 100%;
//   min-height: 100%;
//   height: 800px;
// `;

// const RelWrapper = styled.div`
//   display:flex;
//   border: 10px solid blue;
//   justify-content: space-between;
//   height: 100%;
//   width: 100%;
//   align-items: center;
//   position: relative;
// `;

const MainDivWrapper = styled.div`
display: flex;
border: 10px solid aqua;
justify-content: space-between;
position: absolute;
width: 100%;
height: 100%;
`;

// const MainDivWrapper = styled.div`
//   display:flex;
//   border: 10px solid blue;
//   justify-content: space-between;
//   height: 100%;
//   align-items: center;
// `;

const MainImgWrapper = styled.input`
  display: flex;
  max-width: 100%;
  max-height: 100%;
  object-fit: scale-down;
  object-position: 30% 30%;
  align-items: center;
`;

const ParentImgWrapper = styled.div`
  display: flex;
  height: 100%;
  border: 10px solid red;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  left: 0%;
`;

const ScrollButton = styled.button`
  visibility: ${({ visibility }) => (visibility)};
`;

export default function MainImage({
  style, imageIndex, setImageIndex, toggleHandler, buttonToggleHandler,
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
        <ParentImgWrapper>
          <MainImgWrapper
            data-testid="imgToggleId"
            type="image"
            src={style.photos[imageIndex].url}
            alt={imageIndex.toString()}
            onClick={changeView}
          />
          <button type="button" onClick={buttonToggleHandler}>toggleExp</button>
        </ParentImgWrapper>
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
