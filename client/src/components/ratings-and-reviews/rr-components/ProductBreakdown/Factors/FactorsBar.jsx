import styled from 'styled-components';

const Container = styled.div`
  height: 0.75rem;
  width: 100%;
  position: relative;
`;

const BaseBox = styled.div`
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 3px;
`;

const Background = styled(BaseBox)`
  background: #ECF0F1;
  width: 100%;
`;

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
  `;

const Description = styled(FlexWrapper)`
  justify-content: space-between;
  `;

const Caret = styled.div`
  position: absolute;
  left: ${(props) => props.percent}%;
`;

export {
  Container,
  Background,
  FlexWrapper,
  Description,
  Caret,
};
