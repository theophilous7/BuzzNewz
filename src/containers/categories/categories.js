import React, { useState } from 'react'
import "./categories.css"
import { MdKeyboardDoubleArrowDown, MdKeyboardDoubleArrowUp } from "react-icons/md";
//import Tooltip from 'react-bootstrap/Tooltip';
import axios from 'axios';

const Categories = () => {
    const [result, setResult] = useState([]);
    console.log(result);
     const [toggle, setToggle] = useState(false);
    const displayMore = ()=>{
        if(!toggle){
            setToggle(true)
        }else{
            setToggle(false)
        }
    }
    let more = (
       <>
      <div className='category travels'> </div>
      <div className='category health'></div>
      <div className='category weather'></div>
       </>
    );
    const sportsHandler = ()=>{
            axios.get( `https://newsapi.org/v2/top-headlines?category=sport&apiKey=56330a5a4d0e4fdc9ec890e8d9f6dcde`)
            .then((response)=>{
                setResult(response.data.articles);
                console.log(response);
               // setSearchState(false);
            })
            .catch((err)=>{
                console.log(err)
            })
        
    }
  return (
    <section className="section">
    <div className='categories-holder'>
    <div className='category sports' onClick={sportsHandler}></div>
      <div className='category politics'></div>
      <div className='category business'></div>
      <div className='category technology'></div>
      <div className='category music'></div>
      <div className='category religion'></div>
         {toggle ? more: null}  
     
    </div>
    <button onClick={displayMore} className='more'>{toggle ? "Less": "More"}{toggle ? <MdKeyboardDoubleArrowUp />:  <MdKeyboardDoubleArrowDown  /> } </button>
    </section>
  )
}

export default Categories
