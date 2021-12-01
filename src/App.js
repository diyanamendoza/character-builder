/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import './App.css'
import { useState } from 'react'
import Picker from './components/Picker/Picker.jsx'
import Text from './components/Text/Text.jsx'
import Character from './components/Character/Character.jsx'
import SpeechBubble from './components/SpeechBubble/SpeechBubble.jsx'

function App() {
  //container component
  const [head, setHead] = useState('deadpool')
  const [torso, setTorso] = useState('deadpool')
  const [feet, setFeet] = useState('deadpool')
  const [text, setText] = useState('Change me')
  const [mottos, setMottos] = useState([])

  const handleClick = () => {
    setMottos((prevState) => [...prevState, text])
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>CHARACTER BUILDER</h1>
        {/*presentational component*/}
        <Picker
          head={head}
          setHead={setHead}
          torso={torso}
          setTorso={setTorso}
          feet={feet}
          setFeet={setFeet}
        />
        {/*spread version: { ...{ head, setHead }}*/}
        <Text text={text} setText={setText} handleClick={handleClick} />
      </header>
      <main>
        <Character head={head} torso={torso} feet={feet} />
        <SpeechBubble mottos={mottos} />
      </main>
    </div>
  )
}

export default App
