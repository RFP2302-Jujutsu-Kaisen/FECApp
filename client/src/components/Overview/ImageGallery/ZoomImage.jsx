import React, { useState } from 'react';
import styled from 'styled-components';

const ZoomDivWrapper = styled.div`
  display:flex;
  justify-content: center;
  width: 100%;
  max-width: 100%;
  max-height: 100%;
  position: relative;
`;

// const ZoomFuncWrapper = styled.div`
//   display: flex;
//   overflow: hidden;
//   max-height: 100%;
//   max-width: 100%;
//   border: 10px solid yellow;
//   justify-content: center;
//   align-items: center;
// `;

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
  &:hover {
    cursor: vertical-text;
  }
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
  // const [zoomRect, setZoomRect] = useState([[], false]);

  // const ref = useRef();

  // handlers
  // const getZoomRect = (event) => {
  //   const rect = event.target.getBoundingClientRect();
  //   if (!zoomRect[1]) {
  //     setZoomRect([[rect.left, rect.width, rect.top, rect.height], true]);
  //   }
  // };

  const zoomHandler = (event) => {
    let offsetY = 0;
    let offsetX = 0;
    if (window !== undefined) {
      offsetY = window.scrollY;
      offsetX = window.scrollX;
    }
    const rect = event.target.getBoundingClientRect();
    const left = ((event.pageX - (rect.left + offsetX)) / rect.width) * 100;
    const top = ((event.pageY - (rect.top + offsetY)) / rect.height) * 100;
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
