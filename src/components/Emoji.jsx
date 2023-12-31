import React from 'react';
import { useEmojiContext } from './EmojiContext'; 

const Emoji = () => {
  const { isHappy, toggleMood } = useEmojiContext(); 

  return (
    <div>
      <span role="img" aria-label={isHappy ? 'happy emoji' : 'laughing emoji'}>
        {isHappy ? '\u{1F604}' : '\u{1F606}'}
      </span>
      <button onClick={toggleMood}>Change Mood</button>
    </div>
  );
};

export default Emoji;
