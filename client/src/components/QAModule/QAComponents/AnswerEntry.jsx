/* eslint-disable no-console */
import React, { useState } from 'react';
import axios from 'axios';
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

  const incrementAnswerHelpfulness = async () => {
    if (!isHelpfulClicked) {
      setHelpfulnessCount(helpfulnessCount + 1);
      setIsHelpfulClicked(true);

      try {
        const res = await axios.put(
          `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/answers/${answer.id}/helpful`,
          {},
          {
            headers: {
              Authorization: process.env.AUTH_SECRET,
            },
          },
        );
        console.log(`SUCESS: ${res.status} ${res.data}`);
      } catch (err) {
        console.error('Error updating helpfulness: ', err);
      }
    }
  };

  const reportAnswer = async () => {
    setIsReported(true);

    try {
      const res = await axios.put(
        `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/answers/${answer.id}/report`,
        {},
        {
          headers: {
            Authorization: process.env.AUTH_SECRET,
          },
        },
      );
      console.log(`SUCESS: ${res.status} ${res.data}`);
    } catch (err) {
      console.error('Error updating report: ', err);
    }
  };

  return (
    <AnswerContainer data-testid="answer-entry">
      <AnswerText data-testid="answer-body">
        <BoldSpan>{'A:    '}</BoldSpan>
        {answer.body}
      </AnswerText>
      <AnswerDetails data-testid="answer-details">
        <span>
          {'by '}
          <BoldSpan data-testid="answer-name">{answer.answerer_name}</BoldSpan>
          ,
          {' '}
          {
          new Date(answer.date).toDateString()
          }
          {'   |   '}
          Helpful?
          {' '}
          <HelpfulnessButton type="button" onClick={incrementAnswerHelpfulness} data-testid="helpful-button">
            <UnderlineSpan>Yes</UnderlineSpan>
            {' '}
            (
            {helpfulnessCount}
            )
          </HelpfulnessButton>
        </span>
        {' | '}
        {isReported ? (
          <span data-testid="reported">Reported</span>
        ) : (
          <ReportButton type="button" onClick={reportAnswer} data-testid="report">
            <UnderlineSpan>Report</UnderlineSpan>
          </ReportButton>
        )}
      </AnswerDetails>
    </AnswerContainer>
  );
}
