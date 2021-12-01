import React from 'react';

export default function Character({ head, torso, feet }) {
  return (
    <div
      className="character"
      style={{ display: 'flex', flexDirection: 'column', gap: 10 }}
    >
      <div
        className="head"
        style={{
          backgroundImage: `url(./${head}-head.png)`,
          backgroundSize: 'cover',
          height: 180,
          width: 320,
          backgroundRepeat: 'no-repeat',
        }}
      ></div>
      <div
        className="torso"
        style={{
          backgroundImage: `url(./${torso}-torso.png)`,
          backgroundSize: 'cover',
          height: 280,
          width: 320,
          backgroundRepeat: 'no-repeat',
        }}
      ></div>
      <div
        className="feet"
        style={{
          backgroundImage: `url(./${feet}-feet.png)`,
          backgroundSize: 'cover',
          height: 240,
          width: 320,
          backgroundRepeat: 'no-repeat',
        }}
      ></div>
    </div>
  );
}
