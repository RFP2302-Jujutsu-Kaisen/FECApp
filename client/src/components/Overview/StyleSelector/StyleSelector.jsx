import React from 'react';
import styled from 'styled-components';
import StyleThumbnail from './StyleThumbnail';

const StyleList = styled.ul`
  display: flex;
  flex-flow: row wrap;
  list-style-type: none;
`;

export default function StyleSelector({ styles, setStyles }) {
  const setSelected = (index) => {
    setStyles([styles[0], index]);
  };

  // console.log('Styles name', styles, styles[0][styles[1]]);

  return (
    <div>
      <h3>{styles[0].length > 0 ? styles[0][styles[1]].name : ''}</h3>
      <StyleList>
        {styles[0].map((style, index) => (
          <StyleThumbnail
            key={style.style_id}
            style={style}
            selected={index === styles[1]}
            setSelected={setSelected}
            index={index}
          />
        ))}
      </StyleList>
    </div>
  );
}
