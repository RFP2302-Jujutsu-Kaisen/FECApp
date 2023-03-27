import axios from 'axios';

// const path = require('path');

const server = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/';
const metaEndPoint = 'meta';
const query = '?product_id=';

const config = {
  headers: {
    Authorization: process.env.AUTH_SECRET,
  },
};
console.log(config);

const RRParse = {

  getReviews: (prodId, setReviews) => {
    const endpointUrl = new URL(query + prodId, server);
    axios.get(endpointUrl.toString(), config)
      .then((reviews) => {
        console.log('Success getting reviews', reviews.data);
        setReviews(reviews.data.results);
      })
      .catch((err) => {
        console.log('Error getting prod:', prodId, err);
        setReviews({});
      });
  },
  getMeta: (prodId, setRatings, setCharacteristics, setRecommended) => {
    const endpointUrl = new URL(query + prodId, server + metaEndPoint);
    axios.get(endpointUrl.toString(), config)
      .then((data) => {
        console.log('Success getting data', data.data);
        setRatings(data.data.ratings);
        setCharacteristics(data.data.characteristics);
        setRecommended(data.data.recommended);
      })
      .catch((err) => {
        console.log('Error getting prod:', prodId, err);
        setRatings({});
        setCharacteristics({});
        setRecommended({});
      });
  }
};

export default RRParse;