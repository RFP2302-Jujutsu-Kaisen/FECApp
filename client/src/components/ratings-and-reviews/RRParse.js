import axios from 'axios';

const server = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/';
const metaEndPoint = 'meta';
const query = '?product_id=';
const sort = '&sort=relevant';
const count = '&count=50';

const config = {
  headers: {
    Authorization: process.env.AUTH_SECRET,
  },
};

const RRParse = {

  getReviews: (prodId, setReviews) => {
    const endpointUrl = new URL(query + prodId + sort + count, server);
    axios.get(endpointUrl.toString(), config)
      .then((reviews) => {
        setReviews(reviews.data.results);
      })
      .catch((err) => {
        console.log('Error getting prod:', prodId, err);
        setReviews([]);
      });
  },
  getMeta: (prodId, setRatings, setCharacteristics, setRecommended) => {
    const endpointUrl = new URL(query + prodId, server + metaEndPoint);
    axios.get(endpointUrl.toString(), config)
      .then((data) => {
        setRatings([
          Number.parseInt(data.data.ratings['1']),
          Number.parseInt(data.data.ratings['2']),
          Number.parseInt(data.data.ratings['3']),
          Number.parseInt(data.data.ratings['4']),
          Number.parseInt(data.data.ratings['5'])
        ]);
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
