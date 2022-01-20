import React, {useState, useEffect} from 'react';
import './App.css';
import './App';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Products from './Components/Products';
import About from './Components/About';
import Contact from './Components/Contact';
//import {css} from "@emotion/core";
import PropagateLoader from 'react-spinners/PropagateLoader'
import { block } from 'strip-comments';

function App() {

  const [loading, setLoading] = useState(false);
  // const override = css`
  // disply:block;
  // border-color : red;
  // margin-top : 20%;
  // `;

  useEffect(()=>{
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 5000);
  },[])

  return (
    <div className="App">
      {
        loading?<PropagateLoader color={"#3d2514"} loading={loading}  size={40}/>
        :
        <>
        <Navbar/>
        <Header/>
        <Products/>
        <About/>
        <Contact/>
        </>
      }
    
    </div>
  );
}

export default App;
