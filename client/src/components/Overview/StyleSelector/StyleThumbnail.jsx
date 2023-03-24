import React from 'react';

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
      <li>
        <span>checked</span>
        <input
          type="image"
          src={style.photos[0].thumbnail_url}
          alt={style.style_id}
          height="80"
          width="80"
          onClick={imgClickHandler}
          onKeyDown={imgClickHandler}
        />
        <span>{style.style_id}</span>
      </li>
    );
  }

  return (
    <li>
      <input
        type="image"
        src={style.photos[0].thumbnail_url}
        alt={style.style_id}
        height="80"
        width="80"
        onClick={imgClickHandler}
        onKeyDown={imgClickHandler}
      />
      <span>{style.style_id}</span>
    </li>
  );
}
