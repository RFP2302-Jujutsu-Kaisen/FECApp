import styled from "styled-components";

const Container = styled.div`
  height: 7px;
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

const Progress = styled(BaseBox)`
  background: #7FFFD4;
  width: ${({ percent }) => percent}%;
`;
const Recommend = styled.div`
  font-size: 14px;
  word-wrap: break-word;
  margin-top: 20px;
`;
export { Container, Background, Progress, Recommend };
