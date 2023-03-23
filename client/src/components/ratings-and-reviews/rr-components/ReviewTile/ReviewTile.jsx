import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const ReviewTile = function ({ reviewData }) {
  const [rating] = useState(reviewData.rating);
  return (
      <li>
        <div>
          <h3>*Dev Review Id: {reviewData.review_id}</h3>
        </div>
        <div>
          {[...Array(5)].map((star, i) => {
            const ratingValue = i + 1;
            return (
              <FaStar
                key={i}
                className="star"
                color={ratingValue <= rating ? "#F7DC6F" : "#ECF0F1"}
              />
            )
          })}
        </div>
        <div>
          <h4>{reviewData.summary}</h4>
          <p>...line, if necessary.</p>
        </div>
        <div>
          <p>{reviewData.body}</p>
        </div>
        <div>
          <span>Helpful? Yes ({reviewData.helpfulness}) | Report</span>
        </div>
      </li>
  );
};

export default ReviewTile;