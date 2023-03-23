import React from 'react';
import StyleThumbnail from './StyleThumbnail';

export default function StyleSelector({ styles, setStyles }) {
  const setSelected = (index) => {
    setStyles([styles[0], index]);
  };

  return (
    <div>
      <h3>StyleSelector</h3>
      <ul>
        {styles[0].map((style, index) => (
          <StyleThumbnail
            key={style.style_id}
            style={style}
            selected={index === styles[1]}
            setSelected={setSelected}
            index={index}
          />
        ))}
      </ul>
    </div>
  );
}
