import axios from 'axios';

// const path = require('path');

const server = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/';
const styleEndPoint = '/styles';

const config = {
  headers: {
    Authorization: process.env.AUTH_SECRET,
  },
};

const Parse = {

  getProd: (prodId, setProd) => {
    const endpointUrl = new URL(prodId, server);
    axios.get(endpointUrl.toString(), config)
      .then((prod) => {
        // console.log('Success getting prod', prod.data);
        setProd(prod.data);
      })
      .catch((err) => {
        console.log('Error getting prod:', prodId, err);
        setProd({});
      });
  },
  getStyles: (prodId, setStyles) => {
    const endpoint = new URL(prodId + styleEndPoint, server);
    axios.get(endpoint.toString(), config)
      .then((styles) => {
        // console.log('Styles set', styles.data);
        setStyles([styles.data.results, 0]);
      })
      .catch((err) => {
        console.log('Error getting styles:', prodId, err);
        setStyles([[], 0]);
      });
  },
};

export default Parse;
