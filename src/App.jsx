import React from 'react';
import Emoji from './components/Emoji';
import BitcoinRates from './components/BitcoinRates';
import { EmojiProvider } from './components/EmojiContext'; // Import the context provider

function App() {
  return (
    <div className="App">
      {/* Other components */}
      <EmojiProvider>
        <Emoji />
        <BitcoinRates />
      </EmojiProvider>
    </div>
  );
}

export default App;
