import react from 'react'
import Navbar from './components/Navbar'
import {BrowserRouter as Router} from 'react-router-dom'
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import Footer from './components/footer';
import Sidebar from './components/Sidebar.js';
import Products from './components/products';
import {productData, productDataTwo} from './components/products/data'
import Feature from './components/Feature';
function App() {
  return (
<Router>
  <GlobalStyle/>
<Hero/>
<Products heading="Take your Pick" data={productData}/>
<Feature/>
<Products heading="Something for your Sweet Tooth" data={productDataTwo}/>

<Footer/>
</Router>  
  
  );
}

export default App;
