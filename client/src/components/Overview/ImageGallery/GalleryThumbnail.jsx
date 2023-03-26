import React from 'react';

export default function GalleryThumbnail({
  photo, imageIndex, setImageIndex, selected,
}) {
  const imgClickHandler = (event) => {
    if (!selected) {
      console.log('current index is', imageIndex);
      setImageIndex(imageIndex);
    }
    event.target.blur(); // stop focusing on input/image
    event.preventDefault();
  };

  // console.log('photo is ', photo, 'imageIndex', imageIndex, selected);

  // add check mark if selected
  if (selected) {
    return (
      <li>
        <span>Highlighted</span>
        <input
          type="image"
          src={photo.thumbnail_url}
          alt={imageIndex.toString()}
          height="80"
          width="80"
          onClick={imgClickHandler}
          onKeyDown={imgClickHandler}
        />
      </li>
    );
  }

  return (
    <li>
      <input
        type="image"
        src={photo.thumbnail_url}
        alt={imageIndex.toString()}
        height="80"
        width="80"
        onClick={imgClickHandler}
        onKeyDown={imgClickHandler}
      />
    </li>
  );
}
