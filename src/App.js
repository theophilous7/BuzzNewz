import Navbar from "./components/navbar/navbar"
import "./App.css"
//import DisplayCard from "./components/navbar/displayCard/displayCard"

//import Search from "./containers/search/search"
//import { useState } from "react";

import MyCarousel from "./containers/caro/carousel";
import Categories from "./containers/categories/categories";
import {Link} from "react-router-dom";
import Footer from "./components/navbar/footer/footer";
;


const App = ()=>{
  
  return(
   <div className="app">
      <Navbar />
      <Link to="/search" className="search-btn"><div>Click Here to Search</div></Link> 
     <MyCarousel />
     <Categories />
     <Footer />
   </div>);
      
    }


export default App;