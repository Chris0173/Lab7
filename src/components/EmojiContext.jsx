import React, { createContext, useContext, useState } from 'react';

const EmojiContext = createContext();

export const EmojiProvider = ({ children }) => {
  const [isHappy, setIsHappy] = useState(true);

  const toggleMood = () => {
    setIsHappy(prevIsHappy => !prevIsHappy);
  };

  const contextValue = {
    isHappy,
    toggleMood,
  };

  return (
    <EmojiContext.Provider value={contextValue}>
      {children}
    </EmojiContext.Provider>
  );
};

export const useEmojiContext = () => {
  return useContext(EmojiContext);
};
