import React from 'react';
import Emoji from './components/Emoji';
import BitcoinRates from './components/BitcoinRates';
import { EmojiProvider } from './components/EmojiContext'; 

function App() {
  return (
    <div className="App">
      <EmojiProvider>
        <Emoji />
        <BitcoinRates />
      </EmojiProvider>
    </div>
  );
}

export default App;
