import React, { useState } from 'react';
import DefaultView from './DefaultView';
import ExpandedView from './ExpandedView';

export default function ImageGallery({ style }) {
  // states
  const [toggleView, setToggleView] = useState(true);
  const [imageIndex, setImageIndex] = useState(0);

  // handlers
  // change default or expanded view
  const toggleHandler = (event) => {
    setToggleView(!toggleView);
  };

  // const imageSwitchHandler = (event) => {
  //   setImageIndex(event.target.value);
  //   event.preventDefault();
  // };

  // default or expanded view
  if (toggleView) {
    return (
      <div>
        <h3>ImageGallery</h3>
        <DefaultView
          style={style}
          imageIndex={imageIndex}
          toggleHandler={toggleHandler}
          setImageIndex={setImageIndex}
          toggleView={toggleView}
        />
      </div>
    );
  }

  return (
    <div>
      <h3>ImageGallery</h3>
      <ExpandedView
        style={style}
        imageIndex={imageIndex}
        toggleHandler={toggleHandler}
        setImageIndex={setImageIndex}
        toggleView={toggleView}
      />
    </div>
  );
}
