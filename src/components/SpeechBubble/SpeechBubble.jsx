import React from 'react'

export default function SpeechBubble({ mottos }) {
  return (
    <div className="speechbubble">
      {mottos.map((motto) => (
        <h3
          key={motto + Math.random() * 10}
          style={{
            backgroundImage: 'url(./speechbubble.png)',
            backgroundRepeat: 'no-repeat',
            width: 200,
            height: 125,
            color: 'black',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            overflowWrap: 'anywhere',
            paddingLeft: 80,
            paddingRight: 70,
          }}
        >
          {motto}
        </h3>
      ))}
    </div>
  )
}
