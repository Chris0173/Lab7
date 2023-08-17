import { useState, useEffect, useReducer } from 'react';

const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return { ...state, bitcoinPrice: action.payload, loading: false };
    case 'FETCH_FAILURE':
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

const useBitcoinRates = () => {
  const [currency, setCurrency] = useState(currencies[0]);
  const [state, dispatch] = useReducer(reducer, {
    bitcoinPrice: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchBitcoinPrice = async () => {
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`
        );
        const data = await response.json();
        dispatch({ type: 'FETCH_SUCCESS', payload: data.bitcoin[currency] });
      } catch (error) {
        dispatch({ type: 'FETCH_FAILURE', payload: error });
      }
    };

    fetchBitcoinPrice();

    return () => {

    };
  }, [currency]);

  return { ...state, setCurrency };
};

export default useBitcoinRates;
