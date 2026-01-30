import './App.css';
import { useRef, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';




function App() {

    return(
     <>
     
     <div class="app-wrap">
     <Header/>

     <main class = "main-content">

     <Home/>
     
    
     <About/>

     <Footer/>

    

     </main>
     



     </div>

     </>
    )   
      }
     

export default App;
