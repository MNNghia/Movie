import './App.scss'
import 'swiper/swiper.min.css'
import './assets/boxicons-2.0.7/css/boxicons.min.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Header from './components/header';
import Footer from './components/footer';

import Router from './config/Router';

function App() {
  return (
    <BrowserRouter>
    <>
    
        <Header/>
        <Router/>
        <Footer/>
    </>
    </BrowserRouter>
  );
}

export default App;
