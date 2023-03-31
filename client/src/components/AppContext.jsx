/* eslint-disable no-console */
// TODO: store Product ID Context
// TODO: store Product Average Rating
import React, {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useMemo,
  useCallback,
} from 'react';
import axios from 'axios';
import appReducer from './AppReducer';

// Create the AppContext
const AppContext = createContext();

// Custom hook to use the context
export function useAppContext() {
  return useContext(AppContext);
}

// Initial state of the context
const initialState = {
  productId: null,
  productAvgRating: -1,
};

// Context provider component
export function AppContextProvider({ children, testValue }) {
  // Using a reducer to manage state and dispatch
  const [state, dispatch] = useReducer(appReducer, initialState);

  const headers = {
    Authorization: process.env.AUTH_SECRET,
  };

  // Leverage concurrent axios get requests with Promise.all
  const getProdAndRate = () => {
    const endpoints = [
      'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/40344',
      'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/meta?product_id=40344',
    ];
    Promise.all(endpoints.map((endpoint) => axios
      .get(endpoint, { headers })))
      .then(([{ data: product }, { data: reviewMeta }]) => {
        const prodid = product.id;
        const productName = product.name;
        const rating = [
          Number.parseInt(reviewMeta.ratings['1'], 10),
          Number.parseInt(reviewMeta.ratings['2'], 10),
          Number.parseInt(reviewMeta.ratings['3'], 10),
          Number.parseInt(reviewMeta.ratings['4'], 10),
          Number.parseInt(reviewMeta.ratings['5'], 10),
        ];
        const oneStars = rating[0];
        const twoStars = rating[1] * 2;
        const threeStars = rating[2] * 3;
        const fourStars = rating[3] * 4;
        const fiveStars = rating[4] * 5;
        const countOneStars = rating[0];
        const countTwoStars = rating[1];
        const countThreeStars = rating[2];
        const countFourStars = rating[3];
        const countFiveStars = rating[4];
        const avgRate = (oneStars + twoStars + threeStars + fourStars + fiveStars)
        / (countOneStars + countTwoStars + countThreeStars + countFourStars + countFiveStars);
        const averageRating = avgRate.toFixed(1);
        dispatch({ type: 'SET_PRODUCT_ID', payload: prodid });
        dispatch({ type: 'SET_PRODUCT_NAME', payload: productName });
        dispatch({ type: 'SET_PRODUCT_AVG_RATING', payload: [averageRating, rating] });
      })
      .catch((err) => {
        console.error('Error fetching context data: ', err);
      });
  };

  useEffect(() => {
    getProdAndRate();
  }, []);

  // Memoized function to set product ID
  const setProductId = useCallback(
    (productId) => dispatch({ type: 'SET_PRODUCT_ID', payload: productId }),
    [dispatch],
  );

  const setProductName = useCallback(
    (productName) => dispatch({ type: 'SET_PRODUCT_NAME', payload: productName }),
    [dispatch],
  );

  // Memoized value object to prevent unnecessary re-renders
  const value = useMemo(
    () => ({
      state, // Current state object
      setProductId, // Memoized function to set product ID
      setProductName,
    }),
    [state, setProductId, setProductName], // Update value only when state or setProductId changes
  );

  if (testValue) {
    return <AppContext.Provider value={testValue}>{children}</AppContext.Provider>;
  }

  // Return the provider with the memoized value object
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
