import React from 'react';

const AddReviewForm = function () {

  return (
    <div>
      <h2>--Add Review Form--</h2>
      <div>Write Your Review</div>
      <div>About the [Product Name Here]</div>
      <form>
        <p>--1.2.6.1 Overall Rating--</p>
        <label htmlFor="overall rating">
          <span>&#9734;&#9734;&#9734;&#9734;&#9734;</span>
          <span>[1 star - "Poor", 5 stars = "Great"]</span>
        </label>
        <p>--1.2.6.2 Do you reccomend this product?--</p>
        <h5>Do you recommend this product?</h5>
        <label htmlFor="recommendYes">Yes</label>
        <input type="radio" id="recommendYes" name="recommendYes" value="Yes" />
        <label htmlFor="recommendNo">No</label>
        <input type="radio" id="recommendNo" name="recommendNo" value="No" />
        <p>--1.2.6.3 Characteristics **good candidate for subcomponent--</p>
        <h5>Size</h5>
        <input type="radio" id="A-size-too-small" name="Size" value="1" />
        <label htmlFor="A-size-too-small">A size too small</label>
        <input type="radio" id="½-a-size-too-small" name="Size" value="2" />
        <label htmlFor="½-a-size-too-small">½ a size too small</label>
        <input type="radio" id="Perfect" name="Size" value="3" />
        <label htmlFor="Perfect">Perfect</label>
        <input type="radio" id="½-a-size-too-big" name="Size" value="4" />
        <label htmlFor="½-a-size-too-big">½ a size too big</label>
        <input type="radio" id="A-size-too-wide" name="Size" value="5" />
        <label htmlFor="A-size-too-wide">A size too wide</label>
{/*need to map these components from data returned in API, These are for layout visualiztion*/}
        <h5>Width</h5>
        <input type="radio" id="Too-narrow" name="Width" value="1" />
        <label htmlFor="Too-narrow">Too narrow</label>
        <input type="radio" id="Slightly-narrow" name="Width" value="2" />
        <label htmlFor="Slightly-narrow">Slightly narrow</label>
        <input type="radio" id="Perfect" name="Width" value="3" />
        <label htmlFor="Perfect">Perfect</label>
        <input type="radio" id="Slightly-wide" name="Width" value="4" />
        <label htmlFor="Slightly-wide">Slightly wide</label>
        <input type="radio" id="Too wide" name="Width" value="5" />
        <label htmlFor="Too wide">Too wide</label>

        <p>--1.2.6.4 Review Summary--</p>
        <label htmlFor="Review-summary">Review Summary</label>
        <textarea id="Review-summary" name="Review-summary" maxLength="60" placeholder="Example: Best purchase ever!"></textarea>
        <p>--1.2.6.5 Review Body--</p>
        <label htmlFor="Review-body">Review Body</label>
        <textarea id="Review-body" name="Review-body" maxLength="1000" placeholder="Why did you like the product or not?"></textarea>
        <p>[ Minimum required characters left: [##] | Minimum Reached ]</p>
        <p>--1.2.6.6 Upload your photos--</p>
        <label htmlFor="upload-your-photos"></label>
        <input type="button" value="Add A Photo" name="upload-your-photos" id="upload-your-photos"></input>
        <p>--1.2.6.7 What is your nickname--</p>
        <label htmlFor="nickname"></label>
        <input type="text" id="nickname" name="nickname" maxLength="60" placeholder="Example: jackson11!"></input>
        <span>For privacy reasons, do no use your full name or email address</span>
        <p>--1.2.6.8 Your email--</p>
        <label htmlFor="email"></label>
        <input type="email" id="email" name="email" maxLength="60" placeholder="Example: jackson11@email.com"></input>
        <span>For authentication reasons, you will not be emailed</span>
        <p>--1.2.6.9 Submit review (button)--</p>
        <label htmlFor="Submit-review"></label>
        <input type="button" id="Submit-review" name="Submit-review" value="Submit Review"></input>

      </form>
    </div>
  );
};

export default AddReviewForm;
