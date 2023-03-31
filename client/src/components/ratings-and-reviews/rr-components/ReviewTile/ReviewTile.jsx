import React, { useState } from 'react';
import { FaStar, FaCheck } from 'react-icons/fa';
import { TopBarReviewTile, BottomBarReviewTile, HelpfulReport, BoldSpan, ReviewSummaryStyle, ReviewText, UserInfo, Response } from './ReviewTileStyles';

const ReviewTile = function ({ reviewData }) {
  const [rating] = useState(reviewData.rating);
  const reviewer = reviewData.reviewer_name || 'anonymous';
  const reviewDate = new Date(reviewData.date).toDateString().split(' ').slice(1).join(' ');
  const doesRecommend = reviewData.recommend;
  const sellerResponse = reviewData.response;
  return (
    <li>
      <TopBarReviewTile>
        <div>
          {[...Array(5)].map((star, i) => {
            const ratingValue = i + 1;
            return (
              <FaStar
                key={i}
                className="star"
                fontSize="1.12rem"
                color={ratingValue <= rating ? '#F7DC6F' : '#ECF0F1'}
              />
            );
          })}
        </div>
        <UserInfo>
          <BoldSpan>
            {reviewer}
          </BoldSpan>
          {', '}
          {reviewDate}
        </UserInfo>
      </TopBarReviewTile>
      <ReviewSummaryStyle>
        {reviewData.summary}
      </ReviewSummaryStyle>
      <ReviewText>
        {reviewData.body}
      </ReviewText>
      {doesRecommend
        ? <ReviewText>
            <FaCheck />{' I recommend this product'}
          </ReviewText>
        : null}
      {sellerResponse
        ? <Response>
            <ReviewSummaryStyle>Response:</ReviewSummaryStyle>
            <ReviewText>
              {sellerResponse}
            </ReviewText>
        </Response>
        : null}
      <HelpfulReport>Helpful? Yes ({reviewData.helpfulness}) | Report</HelpfulReport>
      <BottomBarReviewTile />
    </li>
  );
};

export default ReviewTile;
