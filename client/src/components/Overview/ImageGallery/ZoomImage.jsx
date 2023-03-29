import React, { useState } from 'react';
import styled from 'styled-components';

const ZoomDivWrapper = styled.div`
  display:flex;
  border: 10px solid blue;
  flex-grow: 1;
  justify-content: center;
  position: relative;

`;

// const ImgWrapper = styled.input`
//   display: flex;

//   max-height: 800px;
//   max-width: 1200px;

//   object-position: 30% 30%;

// `;

// TODO: FOR ZOOMED IMAGE DOWN HERE
const ImgWrapper = styled.input`
  display: flex;

  max-height: 800px;
  max-width: 1200px;
  object-fit: none;
  object-position: 100% 100%

`;

// object-fit: scale-down;

export default function ZoomImage({
  style, imageIndex, toggleZoomHandler,
}) {
  // state
  const [mousePos, setMousePos] = useState({
    left: 0,
    top: 0,
  });

  // handlers
  const zoomHandler = (event) => {
    setMousePos({ left: event.pageX, top: event.pageY });
    console.log(JSON.stringify(mousePos));
  };

  if (Object.keys(style).length > 0) {
    return (
      <ZoomDivWrapper>
        <ImgWrapper
          data-testid="zoomImgId"
          className="zoom-img"
          type="image"
          src={style.photos[imageIndex].url}
          alt={imageIndex.toString()}
          onClick={toggleZoomHandler}
          onMouseMove={zoomHandler}
          left={mousePos.left}
          top={mousePos.top}
        />
      </ZoomDivWrapper>
    );
  }

  return (
    <div>
      <h3>ZoomImage</h3>
    </div>
  );
}
