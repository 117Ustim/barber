 import Home from './Home';
import About from './js/about/About';
import { Routes, Route } from 'react-router-dom';
import Faq from './js/faq/Faq';
import BookNow from './js/book_now/bookNow';


export default function App() {
  return (
    <div className="wrapper">
       <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/about' element={ <About/> } />
       <Route path='/faq' element={ <Faq/> } />
       <Route path='/book_now' element={ <BookNow/> } />
    
       </Routes>
    
    </div>
  );
}


