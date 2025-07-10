import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Home from './pages/Home'
import Header from './pages/Header';
import Footer from './pages/Footer';
import PageNotFound from './pages/PageNotFound';
import About from './pages/About';
import Contact from './pages/Contact';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminLogin from './pages/admin/AdminLogin';
import AdminAddProperty from './pages/admin/AdminAddProperty';


function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
        <Route path="*" element={<PageNotFound />} />

        <Route path='/admin' element={<AdminLogin />} />

        {/* Admin Pages */}
        <Route path='/admin/dashboard' element={<AdminDashboard />} />
        <Route path='/admin/add-property' element={<AdminAddProperty />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  )
}

export default App
