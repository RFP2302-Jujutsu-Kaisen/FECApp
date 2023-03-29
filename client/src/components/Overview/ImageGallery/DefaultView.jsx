import React from 'react';
import styled from 'styled-components';

import ThumbnailList from './ThumbnailList';
import MainImage from './MainImage';

// css
const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
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
      <MainImage
        style={style}
        imageIndex={imageIndex}
        setImageIndex={setImageIndex}
        toggleHandler={toggleHandler}
      />
    </RowWrapper>
  );
}
