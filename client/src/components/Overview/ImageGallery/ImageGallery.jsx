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

// const DefaultWrapper = styled.div`
//   display: flex;
//   border: 10px solid red;
//   width: ${({ toggleView }) => (toggleView ? 'auto' : '100%')};
//   position: ${({ toggleView }) => (toggleView ? 'static' : 'fixed')};
//   top: ${({ toggleView }) => (toggleView ? 'auto' : '0%')};
//   align-items: center;
//   justify-content: center;
// `;

// const ModalBodyStyle = createGlobalStyle`
//   body {
//     display: flex;
//     overflow-y: ${({ toggleView }) => (toggleView ? 'visible' : 'hidden')};
//     justify-content: center;
//     align-items: center;
//   }
// `;

const ImgGalWrapper = styled.div`
  display: flex;
  border: 10px solid red;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

// const SpanTest = styled.div`
// grid-column-start: 1;
// grid-column-end: ${({ toggleView }) => (toggleView ? '2' : '3')};
// grid-row: 1;
// height: 100%;
// width: 100%;
// border: 10px solid fuchsia;
// z-index: 2;
// `;

export default function ImageGallery({ style, toggleView, setToggleView }) {
  // states
  const [imageIndex, setImageIndex] = useState(0);

  // handlers
  // change default or expanded view

  // const imageSwitchHandler = (event) => {
  //   setImageIndex(event.target.value);
  //   event.preventDefault();
  // };

  // default or expanded view
  // if (toggleView) {
  return (
    <DefaultView
      data-testid="imgGalleryId"
      style={style}
      imageIndex={imageIndex}
      setImageIndex={setImageIndex}
      toggleView={toggleView}
      setToggleView={setToggleView}
    />
  );
  // }

  // return (
  //   <ImgGalWrapper data-testid="expandedId" toggleView={toggleView}>
  //     {/* <ModalBodyStyle toggleView={toggleView} /> */}
  //     <ExpandedView
  //       style={style}
  //       imageIndex={imageIndex}
  //       toggleHandler={toggleHandler}
  //       setImageIndex={setImageIndex}
  //       toggleView={toggleView}
  //     />
  //   </ImgGalWrapper>
  // );
}
