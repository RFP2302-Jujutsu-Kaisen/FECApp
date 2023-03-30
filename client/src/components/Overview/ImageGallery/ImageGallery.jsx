import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import DefaultView from './DefaultView';
import ExpandedView from './ExpandedView';
// css
// const ImgGalWrapper = styled.div`
//   display: flex;
//   border: 10px solid red;
//   width: ${({ toggleView }) => (toggleView ? 'auto' : '100%')};
//   position: ${({ toggleView }) => (toggleView ? 'static' : 'fixed')};
//   top: ${({ toggleView }) => (toggleView ? 'auto' : '0%')};
//   align-items: center;
//   justify-content: center;
// `;

const ModalBodyStyle = createGlobalStyle`
  body {
    display: flex;
    overflow-y: ${({ toggleView }) => (toggleView ? 'visible' : 'hidden')};
    justify-content: center;
    align-items: center;
  }
`;

const ImgGalWrapper = styled.div`
  display: flex;
  border: 10px solid red;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 60%;
`;
// const DefaultWrapper = styled.div`
//   display: flex;
//   border: 10px solid red;
//   width: ${({ toggleView }) => (toggleView ? 'auto' : '100%')};
//   position: ${({ toggleView }) => (toggleView ? 'static' : 'fixed')};
//   top: ${({ toggleView }) => (toggleView ? 'auto' : '0%')};
//   align-items: center;
//   justify-content: center;
// `;

export default function ImageGallery({ style }) {
  // states
  const [toggleView, setToggleView] = useState(true);
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    setToggleView(true);
  }, [style]);

  // handlers
  // change default or expanded view
  const toggleHandler = () => {
    setToggleView(!toggleView);
  };

  // const imageSwitchHandler = (event) => {
  //   setImageIndex(event.target.value);
  //   event.preventDefault();
  // };

  // default or expanded view
  if (toggleView) {
    return (
      <ImgGalWrapper data-testid="imgGalleryId" toggleView={toggleView}>
        <DefaultView
          style={style}
          imageIndex={imageIndex}
          toggleHandler={toggleHandler}
          setImageIndex={setImageIndex}
          toggleView={toggleView}
        />
      </ImgGalWrapper>
    );
  }

  return (
    <ImgGalWrapper data-testid="expandedId" toggleView={toggleView}>
      {/* <ModalBodyStyle toggleView={toggleView} /> */}
      <ExpandedView
        style={style}
        imageIndex={imageIndex}
        toggleHandler={toggleHandler}
        setImageIndex={setImageIndex}
        toggleView={toggleView}
      />
    </ImgGalWrapper>
  );
}
