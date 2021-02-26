import react from 'react'
import Navbar from './components/Navbar'
import {BrowserRouter as Router} from 'react-router-dom'
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import Footer from './components/footer';
import Sidebar from './components/Sidebar.js';
function App() {
  return (
<Router>
  <GlobalStyle/>
<Hero/>
<Sidebar/>
<Footer/>
</Router>  
  
  );
}

export default App;
