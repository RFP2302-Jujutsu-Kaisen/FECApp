import React from 'react';
import styled from 'styled-components';
import StyleThumbnail from './StyleThumbnail';

const StyleList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 22%);
  column-gap: 1px;
  row-gap: 10px;
  min-width: 335px;
  list-style-type: none;
  margin-right: 10%;
  margin-left: -5%;
`;

const StyleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyleLabel = styled.span`
  font: 600 1.5em "system-ui";
  margin-right: 15px;
`;

const StyleSpan = styled.span`
  font: 350 1.5em "system-ui";
`;

export default function StyleSelector({ styles, setStyles }) {
  const setSelected = (index) => {
    setStyles([styles[0], index]);
  };

  // console.log('Styles name', styles, styles[0][styles[1]]);

  return (
    <StyleContainer data-testid="styleSelId">
      <div>
        <StyleLabel>Style &gt;</StyleLabel>
        <StyleSpan>{styles[0].length > 0 ? styles[0][styles[1]].name : ''}</StyleSpan>
      </div>
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
    </StyleContainer>
  );
}
