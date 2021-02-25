import react from 'react'
import Navbar from './components/Navbar'
import {BrowserRouter as Router} from 'react-router-dom'
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import Footer from './components/footer';
function App() {
  return (
<Router>
  <GlobalStyle/>
<Hero/>
<Footer/>
</Router>  
  
  );
}

export default App;
