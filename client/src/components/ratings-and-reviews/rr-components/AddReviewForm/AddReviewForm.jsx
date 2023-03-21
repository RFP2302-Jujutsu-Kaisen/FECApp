import React from 'react';

const AddReviewForm = function () {

  return (
    <div>
      <form>
        <label htmlFor="overall rating">
          <span>&#9734;&#9734;&#9734;&#9734;&#9734;</span>
        </label>
        <h5>Do you recommend this product?</h5>
        <label htmlFor="recommendYes">Yes</label>
        <input type="radio" id="recommendYes" name="recommendYes" value="Yes" />
        <label htmlFor="recommendNo">No</label>
        <input type="radio" id="recommendNo" name="recommendNo" value="No" />
      </form>
    </div>
  );
};

export default AddReviewForm;
