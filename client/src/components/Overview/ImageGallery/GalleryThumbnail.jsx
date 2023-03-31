import React from 'react';
import styled from 'styled-components';

// css
const InputWrapper = styled.input`
  border-bottom: ${({ selected }) => (selected && 'solid medium black')};
  box-shadow: ${({ selected }) => (selected && '0 0 12px black')};
  width: 80px;
  height: 80px;
  border: 5px solid rgba(248,248,255);
  object-fit: cover;
`;

// color: ${({ selected }) => (selected ? 'red' : 'black')}

export default function GalleryThumbnail({
  photo, imageIndex, setImageIndex, selected,
}) {
  const imgClickHandler = (event) => {
    if (!selected) {
      setImageIndex(imageIndex);
    }
    event.target.blur(); // stop focusing on input/image
  };

  // console.log('photo is ', photo, 'imageIndex', imageIndex, selected);

  // add highlight if selected
  return (
    <li>
      <InputWrapper
        selected={selected}
        type="image"
        src={photo.thumbnail_url}
        alt={imageIndex.toString()}
        onClick={imgClickHandler}
        onKeyDown={imgClickHandler}
      />
    </li>
  );
}
