import React from 'react';
import styled from 'styled-components';

// css
const StyleWrapper = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 100%;
  max-width: 100%;
  height: 80px;
  width: 80px;
  position: relative;
`;

const ImgWrapper = styled.input`
  display: flex;
  width: 80px;
  height: 80px;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  border: 1px solid black;
  box-shadow: 0 0 3px black;
`;

const CheckMark = styled.span`
  display: flex;
  color: crimson;
  background-color: ghostwhite;
  height: 20px;
  width: 20px;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  position: absolute;
  border-radius: 50%;
  border: 1px solid black;
  top: 0px;
  right: 0px;
  z-index: 3;
`;

// const MainImgWrapper = styled.input`
//   display: flex;
//   max-width: 100%;
//   max-height: 100%;
//   object-fit: scale-down;
//   object-position: 30% 30%;
//   align-items: center;
// `;

export default function StyleThumbnail({
  style, selected, setSelected, index,
}) {
  const imgClickHandler = (event) => {
    if (!selected) {
      setSelected(index);
    }
    event.target.blur(); // stop focusing on input/image
    event.preventDefault();
  };

  // add check mark if selected
  if (selected) {
    return (
      <StyleWrapper>
        <CheckMark>&#10004;</CheckMark>
        <ImgWrapper
          type="image"
          src={style.photos[0].thumbnail_url}
          alt={style.style_id}
          onClick={imgClickHandler}
          onKeyDown={imgClickHandler}
        />
      </StyleWrapper>
    );
  }

  return (
    <StyleWrapper>
      <ImgWrapper
        type="image"
        src={style.photos[0].thumbnail_url}
        alt={style.style_id}
        onClick={imgClickHandler}
        onKeyDown={imgClickHandler}
      />
    </StyleWrapper>
  );
}
