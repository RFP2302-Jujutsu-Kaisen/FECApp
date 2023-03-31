import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import ThumbnailList from './ThumbnailList';
import MainImage from './MainImage';
import ZoomImage from './ZoomImage';

// css
// const RowWrapper = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   height: 100%;
//   width: 60%;
//   border: 10px solid pink;
// `;

const RowWrapper = styled.div`
  display: grid;
  grid-template-columns: 10% 80%;
  grid-template-rows: 100%;
  height: 100%;
  width: 100%;
  border: 10px solid pink;
  align-items: center;
  grid-column: 1;
  grid-row: 1;
  z-index: 2;
  background-color: white;
`;

// const MainImgWrapper = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   border: 10px solid orange;
//   height: 100%;
// `;

const MainImgWrapper = styled.div`
  display:flex;
  border: 10px solid orange;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  align-items: center;
  position: relative;
`;

const ZoomRowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  border: 10px solid green;
`;

// const ModalBodyStyle = createGlobalStyle`
//   body {
//     display: flex;
//     overflow-y: ${({ toggleView }) => (toggleView ? 'visible' : 'hidden')};
//     justify-content: center;
//     align-items: center;
//   }
// `;

export default function DefaultView({
  style, imageIndex, setImageIndex, toggleView, setToggleView,
}) {
  const [toggleZoom, setToggleZoom] = useState(true);

  const toggleHandler = () => {
    if (toggleView) {
      setToggleView(!toggleView);
    } else {
      setToggleZoom(!toggleZoom);
    }
  };

  const buttonToggleHandler = () => {
    setToggleView(!toggleView);
  };

  // handler
  const toggleZoomHandler = () => {
    setToggleZoom(!toggleZoom);
  };

  return (
    <RowWrapper>
      <ThumbnailList
        style={style}
        imageIndex={imageIndex}
        setImageIndex={setImageIndex}
      />
      <MainImgWrapper>
        <MainImage
          style={style}
          imageIndex={imageIndex}
          setImageIndex={setImageIndex}
          toggleHandler={toggleHandler}
          buttonToggleHandler={buttonToggleHandler}
        />
      </MainImgWrapper>
      {toggleZoom ? null
        : (
          <ZoomRowWrapper>
            <span>
              {toggleZoom.toString()}
              toggleZoom
            </span>
            <ZoomImage
              style={style}
              imageIndex={imageIndex}
              toggleZoomHandler={toggleZoomHandler}
            />
          </ZoomRowWrapper>
        )}
    </RowWrapper>
  );
}
