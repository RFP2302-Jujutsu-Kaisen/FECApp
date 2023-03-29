import styled from 'styled-components';

const RatingsAndReviewsContainer = styled.div`
  display: block;
  font-family: system-ui;
`;

const RRFlex = styled.div`
  display: flex;
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

export { RatingsAndReviewsContainer, RRFlex, Model };
