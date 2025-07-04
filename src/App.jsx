import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Home from './pages/Home'
import Header from './pages/Header';
import Footer from './pages/Footer';
import PageNotFound from './pages/PageNotFound';


function App() {

  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
         <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer/>
    </BrowserRouter>

  )
}

export default App
