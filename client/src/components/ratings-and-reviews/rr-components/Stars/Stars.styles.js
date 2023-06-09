import styled from 'styled-components';

export const QuarterStarStyle = styled.span`
  font-size: 1.12rem;
  width: ${(props) => props.inputWidth};
  display: ${(props) => props.inputDisplay};
  position: ${(props) => props.inputPosition};
  cursor: pointer;
  textAlign: left;
  overflow: ${(props) => props.inputOverflow};
`;

export default QuarterStarStyle;
