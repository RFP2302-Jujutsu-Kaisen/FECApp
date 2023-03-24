import axios from 'axios';

// const path = require('path');

const server = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/';
const cartServer = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/cart/';
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

  postCart: (prodId, skuId, count, addCartHandler) => {
    const endpointUrl = new URL(cartServer);
    const postPromises = [];
    const data = {
      product_id: prodId,
      sku_id: skuId,
    };

    for (let i = 0; i < count; i += 1) {
      postPromises.push(axios.post(endpointUrl.toString(), data, config));
    }

    Promise.all(postPromises)
      .then((responses) => {
        console.log('Success posting to cart:', responses);
        addCartHandler(null, data);
      })
      .catch((err) => {
        addCartHandler(err, data);
      });
  },

  getCart: (getCartHandler) => {
    const endpointUrl = new URL(cartServer);
    axios.get(endpointUrl.toString(), config)
      .then((cart) => {
        console.log('Success getting cart', cart.data);
        getCartHandler(cart.data);
      })
      .catch((err) => {
        console.log('Error getting cart', err);
        getCartHandler(err, []);
      });
  },
};

export default Parse;
