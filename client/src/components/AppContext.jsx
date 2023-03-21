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
export function AppContextProvider({ children }) {
  // Using a reducer to manage state and dispatch
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Fetch product data when the component mounts
  useEffect(() => {
    axios
      .get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/40344')
      .then((res) => {
        const { productId } = res.data;
        dispatch({ type: 'SET_PRODUCT_ID', payload: productId });
      })
      .catch((err) => {
        console.error('Error fetching product data: ', err);
      });
  }, []);

  // Memoized function to set product ID
  const setProductId = useCallback(
    (productId) => dispatch({ type: 'SET_PRODUCT_ID', payload: productId }),
    [dispatch],
  );

  // Memoized value object to prevent unnecessary re-renders
  const value = useMemo(
    () => ({
      state, // Current state object
      setProductId, // Memoized function to set product ID
    }),
    [state, setProductId], // Update value only when state or setProductId changes
  );

  // Return the provider with the memoized value object
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
