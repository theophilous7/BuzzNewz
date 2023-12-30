import Navbar from "./components/navbar/navbar"
import "./App.css"
import DisplayCard from "./components/navbar/displayCard/displayCard"

import Search from "./containers/search/search"
import { useState } from "react";

import MyCarousel from "./containers/caro/carousel";
import Categories from "./containers/categories/categories";


const App = ()=>{
  const [searchResult, setSearchResult] = useState([]);

  function pullData (result){
    setSearchResult(result) 
    console.log(result)
  }
 
  return(
   <div className="app">
      <Navbar />
      <Search pullData={pullData} />
      <DisplayCard searchResult={searchResult}/>
     <MyCarousel />
     <Categories />
      
   </div>);
      
    }


export default App;