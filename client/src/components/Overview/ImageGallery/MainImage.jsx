import React from 'react';
import styled from 'styled-components';
import { FaAngleRight, FaAngleLeft, FaExpand } from 'react-icons/fa';

// css

// const ExpDivWrapper = styled.div`
//   border: 10px solid blue;
//   flex-grow: 1;
//   justify-content: center;
//   position: absolute;
//   left: 0%;
//   height: 100%;

// `;

// const ExpImgRelWrapper = styled.div`
//   position: relative;
//   border: 10px solid gray;
//   min-width: 100%;
//   min-height: 100%;
//   height: 800px;
// `;

// const RelWrapper = styled.div`
//   display:flex;
//   border: 10px solid blue;
//   justify-content: space-between;
//   height: 100%;
//   width: 100%;
//   align-items: center;
//   position: relative;
// `;

const MainDivWrapper = styled.div`
display: flex;
justify-content: space-between;
position: absolute;
width: 100%;
height: 100%;
`;

// const MainDivWrapper = styled.div`
//   display:flex;
//   border: 10px solid blue;
//   justify-content: space-between;
//   height: 100%;
//   align-items: center;
// `;
// cursor: ${(props) => (props.toggleView ? 'url(./src/components/right-arrow.png), auto' : 'url(./src/components/right-arrow.png), auto')};

const MainImgWrapper = styled.input`
  display: flex;
  max-width: 100%;
  max-height: 100%;
  object-fit: scale-down;
  object-position: 30% 30%;
  align-items: center;

  &:hover {
    cursor: ${(props) => (props.toggleView ? 'zoom-in' : 'crosshair')};
  }

`;

const ParentImgWrapper = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-flow: column;==
  left: 0%;
  position: relative;
`;

const ToggleExp = styled.button`
  background-color: transparent;
  display: flex;
  color: black;
  cursor: pointer;
  border: none;
  height: 50px;
  width: 50px;
  position: absolute;
  top: 5%;
  right: 5%;
  align-items: center;
  justify-content: center;
  font-size: 3em;
  font-weight: 100;
  color: #101010;

  &:hover {
    color: #D3D3D3;
  }
`;

const ScrollButton = styled.button`
  visibility: ${({ visibility }) => (visibility)};
  background-color: transparent;
  display: flex;
  cursor: pointer;
  border: none;
  height: 100%;
  width: 70px;
  top: 15px;
  right: 15px;
  align-items: center;
  justify-content: center;
  font-size: 6.0em;
  font-weight: 100;
  color: gray;

  &:hover {
    color: #333333;
  }

`;

const ImgWrapper = styled.img`
  object-fit: scale-down;
  height: 90%;
  object-position: 50% 50%;
`;

const ArrowWrapper = styled.img`
  height: 200px;
  width: 30px;
  object-position: center;
  opacity: 0.3;

  &:hover {
    opacity: 0.7;
  }
`;

export default function MainImage({
  style, imageIndex, setImageIndex, toggleHandler, buttonToggleHandler, toggleView,
}) {
  // general handlers
  const changeView = (event) => {
    toggleHandler();
    event.target.blur(); // stop focusing on input/image
    event.preventDefault();
  };

  if (Object.keys(style).length > 0) {
    const numPhotos = style.photos.length - 1;
    // handlers for buttons
    const setPrev = () => { if (imageIndex > 0) { setImageIndex(imageIndex - 1); } };
    const setNext = () => { if (imageIndex < numPhotos) { setImageIndex(imageIndex + 1); } };

    // onClick={changeView}
    return (
      <MainDivWrapper data-testid="mainImageId">
        <ScrollButton type="button" onClick={setPrev} visibility={imageIndex > 0 ? 'visible' : 'hidden'}>
          <FaAngleLeft />
        </ScrollButton>
        <ParentImgWrapper>
          <MainImgWrapper
            toggleView={toggleView}
            data-testid="imgToggleId"
            type="image"
            src={style.photos[imageIndex].url}
            alt={imageIndex.toString()}
            onClick={changeView}
          />
        </ParentImgWrapper>
        <ToggleExp type="button" onClick={buttonToggleHandler}>
          <FaExpand />
        </ToggleExp>
        <ScrollButton type="button" onClick={setNext} visibility={imageIndex < numPhotos ? 'visible' : 'hidden'}>
          <FaAngleRight />
        </ScrollButton>
      </MainDivWrapper>
    );
  }

  return (
    <div>
      <h3>MainImage</h3>
    </div>
  );
}

{/* <ArrowWrapper src={rightImg} alt="Right" /> */}
{/* <ArrowWrapper src={leftImg} alt="Left" /> */}

