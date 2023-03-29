import React, { useState } from 'react';
import styled from 'styled-components';

const AnswerContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  font-family: system-ui;
`;

const AnswerText = styled.div`
  font-weight: normal;
  font-size: 14px;
  color: #232323;
  max-width: 65%;
  word-wrap: break-word;
  margin-top: 8px;
`;

const AnswerDetails = styled.div`
  display: flex;
  flex-wrap: nowrap;
  font-size: 11px;
  color: gray;
  align-items: center;
  margin-top: 8px;
`;

const BoldSpan = styled.span`
  font-weight: bold;
`;

const UnderlineSpan = styled.span`
  text-decoration: underline;
`;

const HelpfulnessButton = styled.button`
  background: transparent;
  border: none;
  color: gray;
  font-size: 11px;
  cursor: pointer;

  &:hover {
    color: #404040;
  }
`;

const ReportButton = styled.button`
  background: transparent;
  border: none;
  color: gray;
  font-size: 11px;
  cursor: pointer;

  &:hover {
    color: #404040;
  }
`;

export default function AnswerEntry({ answer }) {
  const [helpfulnessCount, setHelpfulnessCount] = useState(answer.helpfulness);
  const [isReported, setIsReported] = useState(false);
  const [isHelpfulClicked, setIsHelpfulClicked] = useState(false);

  const incrementAnswerHelpfulness = () => {
    if (!isHelpfulClicked) {
      setHelpfulnessCount(helpfulnessCount + 1);
      setIsHelpfulClicked(true);
    }
  };

  const reportAnswer = () => {
    setIsReported(true);
  };

  return (
    <AnswerContainer>
      <AnswerText>
        <BoldSpan>{'A:    '}</BoldSpan>
        {answer.body}
      </AnswerText>
      <AnswerDetails>
        <span>
          {'by '}
          <BoldSpan>{answer.answerer_name}</BoldSpan>
          ,
          {' '}
          {
          new Date(answer.date).toDateString()
          }
          {'   |   '}
          Helpful?
          {' '}
          <HelpfulnessButton type="button" onClick={incrementAnswerHelpfulness}>
            <UnderlineSpan>Yes</UnderlineSpan>
            {' '}
            (
            {helpfulnessCount}
            )
          </HelpfulnessButton>
        </span>
        {' | '}
        {isReported ? (
          <span>Reported</span>
        ) : (
          <ReportButton type="button" onClick={reportAnswer}>
            <UnderlineSpan>Report</UnderlineSpan>
          </ReportButton>
        )}
      </AnswerDetails>
    </AnswerContainer>
  );
}
