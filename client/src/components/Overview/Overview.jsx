import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import {
  ImageGallery, ProductInfo, StyleSelector, AddToCart, Description,
} from '.';
import Parse from './Parse';
import ZoomImage from './ImageGallery/ZoomImage';
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
  grid-template-columns: 60% 1fr;
  grid-template-rows: 800px;
  column-gap: 5%;
  transition: 0.32s
`;

const ColWrapper = styled.div`
  display:flex;
  flex-direction: column;
  border: 10px solid purple;
`;

const InnerColWrapper = styled.div`
  display: ${(props) => (props.toggleView ? 'grid' : 'none')};
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: 100%;
  gap: 1%;
  height: 100%;
  width: 100%;
  grid-column: 2;
  grid-row: 1;
  z-index: 1;
`;

// display: ${(props) => (props.toggleView ? 'flex' : 'none')};

// const ModalWrapper = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   align-content: center;
//   border: 10px solid green;
//   height: 100vmax;
//   width: 100vmax;
//   position: fixed;
// `;

// const ModalBodyStyle = createGlobalStyle`
//   body {
//     display: flex;
//     overflow-y: ${({ toggleView }) => (toggleView ? 'visible' : 'hidden')};
//     justify-content: center;
//     align-items: center;
//     background: rgb(0, 0, 0, 0.5);
//   }
// `;

// const ModalBodyStyle = createGlobalStyle`
//   body {
//     overflow-y: ${({ toggleView }) => (toggleView ? 'visible' : 'hidden')};
//     background: rgb(0, 0, 0, 0.5);
//   }
// `;

// const ModalWrapper = styled.div`
//   position: fixed;
//   left: 50%;
//   top: 50%;
//   transform: translate(-50%, -50%);
//   width: 50vw;
//   height: 50vmax;
//   z-index: 3;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   border: 10px solid green;
// `;

// {/* {toggleZoom
//         ? (
//           <ModalWrapper>
//             <ModalBodyStyle toggleView={toggleView} />
//             <ZoomImage
//               style={styles[0][styles[1]] || {}}
//               imageIndex={imageIndex}
//               toggleZoomHandler={toggleZoomHandler}
//             />
//           </ModalWrapper>
//         )
//         : null} */}

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
  const [toggleZoom, setToggleZoom] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  // handlers
  // const toggleZoomHandler = () => setToggleZoom(!toggleZoom);

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
      <div>
        <ColWrapper>
          <h2>Overview</h2>
          <RowWrapper toggleView={toggleView}>
            <ImageGallery
              style={styles[0][styles[1]] || {}}
              imageIndex={imageIndex}
              setImageIndex={setImageIndex}
              toggleView={toggleView}
              setToggleView={setToggleView}
              toggleZoom={toggleZoom}
              setToggleZoom={setToggleZoom}
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
      </div>
    );
  }

  return (
    <div data-testid="emptyOverviewId" />
  );
}
