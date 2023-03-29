import React, { useState, useEffect } from 'react';
import DefaultView from './DefaultView';
import ExpandedView from './ExpandedView';

import styled from 'styled-components';

// css
const ImgGalWrapper = styled.div`
  flex-grow: 2;
  border: 10px solid red;
`;

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
      <ImgGalWrapper data-testid="imgGalleryId">
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
    <ImgGalWrapper data-testid="expandedId">
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
