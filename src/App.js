import { useState } from 'react';
import './App.css';
import { Body } from './components/Body/Body';
import { Footer } from './components/Footer/Footer';
import {Header} from './components/Header/Header'



function App() {
  const [dark, setDark] = useState(false)
  return (
    <div className= {`App ${dark ? 'dark' : ''}`}>
      <Header dark = {dark} setDark = {setDark} />
      <Body />
      <Footer dark={dark}/>
    </div>
  );
}

export default App;
