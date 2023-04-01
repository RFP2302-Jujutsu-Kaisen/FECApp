import styled from 'styled-components';

const RatingsAndReviewsContainer = styled.div`
  display: block;
  font-family: system-ui;
  color: gray;
`;

const RRFlex = styled.div`
  display: flex;
  margin-top: none;
  padding-top: 20px;
  width: 100%;
`;

const RRBoxLeft = styled.div`
  width: 40%;
  float: left;
  margin-right: 1rem;
`;

const RRBoxRight = styled.div`
  width: 60%;
  float: right;
  margin-left: 1rem;
`;

const Model = styled.div`
    z-index: auto;
    display: ${({ show }) => (show ? 'block' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width:100vw;
    background: rgba(0,0,0,0.5);
`;

export {
  RatingsAndReviewsContainer,
  RRFlex,
  Model,
  RRBoxLeft,
  RRBoxRight,
};
