// TODO: Reducer for Product ID Changes
export default function appReducer(state, action) {
  // Use a switch statement to handle different action types
  switch (action.type) {
    // When action type is 'SET_PRODUCT_ID'
    case 'SET_PRODUCT_ID':
      // Return a new state object with the updated productId
      return { ...state, productId: action.payload };

    // When action type is 'SET_PRODUCT_AVG_RATING'
    case 'SET_PRODUCT_AVG_RATING':
      // Return a new state object with the updated productAvgRating
      return { ...state, productAvgRating: action.payload };

    // For any other action type, return the current state
    default:
      return state;
  }
}
