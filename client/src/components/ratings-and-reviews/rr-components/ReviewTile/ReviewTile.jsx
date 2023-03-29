import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const ReviewTile = function ({ reviewData }) {
  const [rating] = useState(reviewData.rating);
  return (
      <li>
        <div>
          {[...Array(5)].map((star, i) => {
            const ratingValue = i + 1;
            return (
              <FaStar
                key={i}
                className="star"
                fontSize="1.12rem"
                color={ratingValue <= rating ? "#F7DC6F" : "#ECF0F1"}
              />
            )
          })}
        </div>
        <div>
          <h4>{reviewData.summary}</h4>
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
