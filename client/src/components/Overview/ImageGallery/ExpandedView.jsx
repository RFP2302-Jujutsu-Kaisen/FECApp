import React, { useState } from 'react';
import styled from 'styled-components';

import ThumbnailList from './ThumbnailList';
import ZoomImage from './ZoomImage';
import ExpandedImage from './ExpandedImage';

const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
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
      <RowWrapper>
        <ThumbnailList
          style={style}
          imageIndex={imageIndex}
          setImageIndex={setImageIndex}
          toggleView={toggleView}
        />
        <ZoomImage
          style={style}
          imageIndex={imageIndex}
          toggleZoomHandler={toggleZoomHandler}
        />
      </RowWrapper>
    );
  }

  return (
    <RowWrapper>
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
    </RowWrapper>
  );
}
