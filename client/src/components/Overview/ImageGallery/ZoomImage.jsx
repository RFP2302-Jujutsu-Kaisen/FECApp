import React, { useState } from 'react';
import styled from 'styled-components';

const ZoomDivWrapper = styled.div`
  display:flex;
  border: 10px solid blue;
  flex-grow: 1;
  justify-content: center;
  position: relative;
  width: 600px;

`;

// const ImgWrapper = styled.input`
//   display: flex;

//   max-height: 800px;
//   max-width: 1200px;
//   object-fit: scale-down;
//   object-position: 30% 30%;

// `;

// TODO: FOR ZOOMED IMAGE DOWN HERE
const ImgWrapper = styled.input`
  object-fit: none;
  overflow: hidden;
  ${({ topLeft }) => topLeft}
`;

// objec
// ${({ ref, left, top }) => {
//   return css`
//     object-position: 0% 0%;
//   `;
// }}
// object-fit: scale-down;

export default function ZoomImage({
  style, imageIndex, toggleZoomHandler,
}) {
  // state
  const [containTopLeft, setContainTopLeft] = useState('');

  // handlers
  const zoomHandler = (event) => {
    const rect = event.target.getBoundingClientRect();
    const left = ((event.pageX - rect.left) / rect.width) * 100;
    const top = ((event.pageY - rect.top) / rect.height) * 100;
    setContainTopLeft(`object-position: ${left}% ${top}%;`);
  };

  if (Object.keys(style).length > 0) {
    // calculate zoom coords
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
          topLeft={containTopLeft}
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
