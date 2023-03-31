import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import ThumbnailList from './ThumbnailList';
import MainImage from './MainImage';
import ZoomImage from './ZoomImage';
import ModalTest from '../../Modals/ModalTest';

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
  grid-template-columns: 10% 90%;
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

// TODO zoom here
const MainImgWrapper = styled.div`
  display:flex;
  border: 10px solid orange;
  justify-content: space-between;
  height: 100%;
  width: ${(props) => (props.toggleView ? '100%' : '171%')};
  align-items: center;
  position: relative;
  transition: 0.4s;
  background-color: white;
  z-index: 3;
`;

// const ModalWrapper = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
// `;

// const ModalBodyStyle = createGlobalStyle`
//   body {
//     display: flex;
//     overflow-y: ${({ toggleView }) => (toggleView ? 'visible' : 'hidden')};
//     justify-content: center;
//     align-items: center;
//   }
// `;

const ZoomContainer = styled.div`
  display: flex;
  width: 171%;
  height: 100%;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const ZoomWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export default function DefaultView({
  style, imageIndex, setImageIndex, toggleView, setToggleView, toggleZoom, setToggleZoom,
}) {
  const toggleHandler = () => {
    if (toggleView) {
      setToggleView(!toggleView);
      setToggleZoom(false);
    } else {
      setToggleZoom(!toggleZoom);
    }
  };

  const buttonToggleHandler = () => {
    setToggleView(!toggleView);
    setToggleZoom(false);
  };

  const toggleZoomHandler = () => setToggleZoom(!toggleZoom);

  const toggleZoomView = () => {
    if (toggleZoom) {
      return (
        <ZoomContainer>
          <ZoomWrapper>
            <ZoomImage
              style={style}
              imageIndex={imageIndex}
              toggleZoomHandler={toggleZoomHandler}
            />
          </ZoomWrapper>
        </ZoomContainer>
      );
    }

    return (
      <MainImgWrapper toggleView={toggleView}>
        <MainImage
          style={style}
          imageIndex={imageIndex}
          setImageIndex={setImageIndex}
          toggleHandler={toggleHandler}
          buttonToggleHandler={buttonToggleHandler}
        />
      </MainImgWrapper>
    );
  };

  return (
    <RowWrapper>
      <ThumbnailList
        style={style}
        imageIndex={imageIndex}
        setImageIndex={setImageIndex}
      />
      {toggleZoomView()}
    </RowWrapper>
  );
}
