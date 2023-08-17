import React from 'react';
import useBitcoinRates from './useBitcoinRates'; // Import the custom hook as default

const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];

function BitcoinRates() {
  const {
    currency,
    setCurrency,
    bitcoinPrice,
    loading,
    error,
  } = useBitcoinRates();

  const options = currencies.map(curr => (
    <option value={curr} key={curr}>
      {curr}
    </option>
  ));

  return (
    <div className="BitcoinRates componentBox">
      <h3>Bitcoin Exchange Rate</h3>
      <label>
        Choose currency:
        <select value={currency} onChange={e => setCurrency(e.target.value)}>
          {options}
        </select>
      </label>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <p>Current Bitcoin Price in {currency}: {bitcoinPrice}</p>
      )}
    </div>
  );
}

export default BitcoinRates;

