import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import {
  ImageGallery, ProductInfo, StyleSelector, AddToCart, Description,
} from '.';
import Parse from './Parse';
import { useAppContext } from '../AppContext';

// import eData from './exampleData';
// const prodId = '40344';

// css

// const SpanTest = styled.div`
// grid-column: 2 / 3;
// grid-row: 1;
// height: 100%;
// border: 10px solid lawngreen;
// z-index: 1;
// `;

// const BodyHeightStyle = createGlobalStyle`
//   body {
//     height: 100%;
//   }
// `;

const RowWrapper = styled.div`
  display: grid;
  grid-template-columns: ${(props) => (props.toggleView ? '60% 37%' : '100% 0%')};
  grid-template-rows: 800px;
  column-gap: 3%;
  border: 10px solid black;
  transition: 0.32s
`;

const ColWrapper = styled.div`
  display:flex;
  flex-direction: column;
  border: 10px solid purple;
`;

const InnerColWrapper = styled.div`
  display: ${(props) => (props.toggleView ? 'flex' : 'none')};
  flex-direction: column;
  border: 10px solid teal;
  justify-content: center;
  height: 100%;
  grid-column: 2;
  grid-row: 1;
  z-index: 1;
`;

// const ArticleTest = styled.article`
//   display: grid;
//   grid-template-columns: ${(props) => {
//     const t = props.clickedState ? '34% 33% 33%' : '100% 0% 0%';
//     console.log('Grid is', props.clickedState);
//     return t;
//   }};
//   grid-auto-rows: 50px;
//   grid-gap: 5px;
//   transition: 0.3s;
// `;

// const SecU = styled.section`
//   grid-row: 1;
//   grid-column: 1;
//   background-color: green;
//   z-index: 1;
//   transition: 2s;
// `;
// const SecT = styled.section`
//   grid-row: 1;
//   grid-column: 2;
//   background-color: orange;
//   visibility: ${({ clickedState }) => (clickedState ? 'visible' : 'hidden')}
// `;

// const SecH = styled.section`
//   grid-row: 1;
//   grid-column: 3;
//   background-color: aqua;
//   visibility: ${({ clickedState }) => (clickedState ? 'visible' : 'hidden')}
// `;

// {/* <ArticleTest clickedState={clickedState} onClick={testHandler}>
// <SecU clickedState={clickedState}><span>1</span></SecU>
// <SecT clickedState={clickedState}><span>2</span></SecT>
// <SecH clickedState={clickedState}><span>3</span></SecH>
// </ArticleTest> */}
//  //test
//  const [clickedState, setClick] = useState(true);
//  const testHandler = () => {
//    console.log('Clicked State', clickedState);
//    setClick(!clickedState);
//  };

export default function Overview() {
  // context, states
  const { state } = useAppContext();
  const { productId } = state;
  const [prod, setProd] = useState({});
  const [styles, setStyles] = useState([[], 0]);
  // const [style, setStyle] = useState({});
  const [toggleView, setToggleView] = useState(true);

  useEffect(() => {
    if (productId) {
      Promise.all([Parse.getProd(productId), Parse.getStyles(productId)])
        .then((values) => {
          console.log(values);
          setProd(values[0]);
          setStyles(values[1]);
        })
        .catch((err) => {
          console.log('Error with Parsing', err);
        });
    }
  }, [productId]);

  if (productId !== null) {
    return (
      <ColWrapper>
        <h2>Overview</h2>
        <RowWrapper toggleView={toggleView}>
          <ImageGallery
            style={styles[0][styles[1]] || {}}
            toggleView={toggleView}
            setToggleView={setToggleView}
          />
          <InnerColWrapper toggleView={toggleView}>
            <ProductInfo
              prod={prod}
              style={styles[0][styles[1]] || {}}
            />
            <StyleSelector styles={styles} setStyles={setStyles} />
            <AddToCart
              styleInStockArr={styles[0].length > 0
                ? [styles[0][styles[1]],
                  Object.keys(styles[0][styles[1]].skus)
                    .filter((key) => styles[0][styles[1]].skus[key].quantity > 0),
                ]
                : []}
            />
          </InnerColWrapper>
        </RowWrapper>
        <Description prod={prod} />
      </ColWrapper>
    );
  }

  return (
    <div data-testid="emptyOverviewId" />
  );
}
