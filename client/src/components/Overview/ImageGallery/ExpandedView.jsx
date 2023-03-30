import React, { useState } from 'react';
import styled from 'styled-components';

import ThumbnailList from './ThumbnailList';
import ZoomImage from './ZoomImage';
import ExpandedImage from './ExpandedImage';

const ZoomRowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  border: 10px solid green;
`;

const ExpRowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 10px solid black;
  height: 100%;
  width: 60%;
  align-items: center;
`;

export default function ExpandedView({
  style, imageIndex, toggleHandler, setImageIndex, toggleView,
}) {
  const [toggleZoom, setToggleZoom] = useState(false);

  // handler
  const toggleZoomHandler = () => {
    setToggleZoom(!toggleZoom);
  };

  if (toggleZoom) {
    return (
      <ZoomRowWrapper>
        <ZoomImage
          style={style}
          imageIndex={imageIndex}
          toggleZoomHandler={toggleZoomHandler}
        />
      </ZoomRowWrapper>
    );
  }

  return (
    <div>
      <ExpRowWrapper>
        <ThumbnailList
          style={style}
          imageIndex={imageIndex}
          setImageIndex={setImageIndex}
          toggleView={toggleView}
        />
        <ExpandedImage
          style={style}
          imageIndex={imageIndex}
          setImageIndex={setImageIndex}
          toggleHandler={toggleHandler}
          toggleZoomHandler={toggleZoomHandler}
        />
      </ExpRowWrapper>
    </div>
  );
}
