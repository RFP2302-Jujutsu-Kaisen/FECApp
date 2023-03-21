import React from 'react';

const ReviewTile = function () {

  return (
    <div>
      <li>
        <div>
          <span>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
          <span>&#10003; User1234, January 1, 2020</span>
        </div>
        <div>
          <h4>Review Title with word-break truncation to prevent wrapping onto the next...</h4>
          <p>...line, if necessary.</p>
        </div>
        <div>
          <p>Donut gummi bears gingerbread gummies chocolate. Ice cream apple pie tiramisu fruitcake chupa chups icing apple pie. Lemon drops cake pudding pudding.</p>
        </div>
        <div>
          <span>Helpful? Yes(10) | Report</span>
        </div>
      </li>
      <li>
      <div>
          <span>&#9733;&#9733;&#9733;&#9734;&#9734;</span>
          <span>User4567, December 31, 2022</span>
        </div>
        <div>
          <h4>Review Title with word-break truncation to prevent wrapping onto the next...</h4>
          <p>...line, if necessary.</p>
        </div>
        <div>
          <p>Wedding cake donuts candied pecans gummies chocolate. Ice cream apple pie tiramisu fruitcake chupa chups icing apple pie. Lemon drops cake pudding pudding.</p>
        </div>
        <div>
          <span>&#x2713; I recommend this product</span>
        </div>
        <div>
          <h5>Respons:</h5>
          <p>Marzipan danish jelly beans gummi bears apple pie cheesecake topping bisuit sesame snaps.</p>
        </div>
        <div>
          <span>Helpful? Yes(6) | Report</span>
        </div>
      </li>

    </div>
  );
};

export default ReviewTile;