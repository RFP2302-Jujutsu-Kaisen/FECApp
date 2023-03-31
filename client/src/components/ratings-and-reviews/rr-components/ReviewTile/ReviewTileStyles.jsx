import styled from 'styled-components';

const TopBarReviewTile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 25px;
`;

const BottomBarReviewTile = styled.div`
  font-size: 11px;
  border-bottom: solid;
  border-color: lightgray;
  margin-top: 5px;
`;

const HelpfulReport = styled.div`
  font-size: 11px;
  text-align: center;
`;

const UserInfo = styled.div`
  font-size: 11px;
`;

const BoldSpan = styled.span`
  font-weight: bold;
`;

const ReviewSummaryStyle = styled.div`
  font-weight: bold;
  margin-top: 10px;
`;

const ReviewText = styled.div`
font-weight: normal;
font-size: 14px;
max-width: 75%;
word-wrap: break-word;
margin-top: 8px;
margin-bottom: 20px;
`;

const Response = styled(ReviewText)`
  background-color: #D8D8D8;
  padding-left: 8px;
  padding-top: 4px;
  padding-bottom: 4px;
  max-width: 95%;
  border-radius: 5px;
`;


export { TopBarReviewTile, BottomBarReviewTile, HelpfulReport, BoldSpan, ReviewSummaryStyle, ReviewText, UserInfo, Response };
