import React from 'react';
import styled from 'styled-components';

import ThumbnailList from './ThumbnailList';
import MainImage from './MainImage';

// css
const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const MainImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 10px solid orange;
  flex-grow: 4;
`;

export default function DefaultView({
  style, imageIndex, toggleHandler, setImageIndex, toggleView,
}) {
  return (
    <RowWrapper>
      <ThumbnailList
        style={style}
        imageIndex={imageIndex}
        setImageIndex={setImageIndex}
        toggleView={toggleView}
      />
      <MainImgWrapper>
        <MainImage
          style={style}
          imageIndex={imageIndex}
          setImageIndex={setImageIndex}
          toggleHandler={toggleHandler}
        />
      </MainImgWrapper>
      <MainImgWrapper />
    </RowWrapper>
  );
}
