import { useEffect, useState } from 'react';
import './App.css';
import { Body } from './components/Body/Body';
import { Footer } from './components/Footer/Footer';
import {Header} from './components/Header/Header'
import { Routes, Route } from "react-router-dom";
import { Movepage } from './components/Body/movepage/Movepage';
import { collection, getDocs } from "firebase/firestore";
import { firestore } from './firebaseConfig';




function App() {
  const [dark, setDark] = useState(false)
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getDocs(collection(firestore, "movies")).then((data) => {
      setMovies(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  }, []);
  return (
    <div className={`App ${dark ? "dark" : ""}`}>
      <Header dark={dark} setDark={setDark} />
      <Routes>
        <Route path='/' element= {<Body movies={movies} dark={dark} />}/>
        <Route path='/:name' element= {<Movepage />}/>
      </Routes>
      <Footer dark={dark} />
    </div>
  );
}

export default App;
