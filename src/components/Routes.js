import Home from './Home';
import Products from './Products'
import Faqs from './Faqs';
import AboutUs from './AboutUs';
import Navbar from './Navbar';
import ContactUs from './ContactUs';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';

const RouterFunction = () => {
    return (
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/products" element={<Products/>} />
            <Route path="/about-us" element={<AboutUs/>} />
            <Route path='/contactUs' element={<ContactUs/>}/>
            <Route path="/faqs" element={<Faqs/>} />
          </Routes>
        </Router>
      );
    }
 
export default RouterFunction;