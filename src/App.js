import React, { useState } from 'react';
import './App.css';

import Video from './Video';
import Images from './Images';

function App() {
  const [component, setComponent] = useState('');
  const [clicked, setClicked] = useState(false);
  
  return (
    <div className="App">
      <h1>React Application </h1>
      <h2>Pratik Kale-2018BTECS00083 </h2>

      <button onClick={() => { setComponent('video');setClicked(true)}} > Display Video</button>
      <button onClick={() => { setComponent('images'); setClicked(true) }} >Display Images</button>
      
      <br/><br/>

      
      {clicked && component === 'images' && <Images />}
      {clicked && component === 'video' && <Video />}

    </div>
  );
}

export default App;
