import React from 'react';
import './Text.css';

export default function Text({ text, setText, handleClick }) {
  return (
    <div className="text">
      <label>
        Motto
        <input
          value={text}
          style={{ marginLeft: 10, width: 200 }}
          onChange={(e) => setText(e.target.value)}
        />
      </label>
      <button type="button" onClick={handleClick}>
        Submit
      </button>
    </div>
  );
}
