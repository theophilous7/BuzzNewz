import React, { useState } from 'react'
import "./categories.css"
import { MdKeyboardDoubleArrowDown, MdKeyboardDoubleArrowUp } from "react-icons/md";
//import Tooltip from 'react-bootstrap/Tooltip';
import { Link } from 'react-router-dom';

const Categories = () => {
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
       <Link to="/travels">
         <div className='category-holder'>
          <div className='category travels'></div>
          <h4>Travels</h4>
         </div>
       </Link>
       <Link to="/health&fitness">
        <div className='category-holder'>
          <div className='category health'></div>
          <h4>Health&Fitness</h4>
        </div>
       </Link>
       <Link to="/weather">
         <div className='category-holder'>
          <div className='category weather'></div>
           <h4>Weather</h4>
        </div>
       </Link>
        
       </>
    );
    
  return (
    <section className="section">
    <div className='categories-holder'>
      <Link to="/sports">
        <div className='category-holder'>
          <div className='category sports'></div>
          <h4>Sports</h4>
        </div>
      </Link>
      <Link to="/politics">
        <div className='category-holder'>
          <div className='category politics'></div>
          <h4>Politics</h4>
      </div>
      </Link>
      <Link to="business">
       <div className='category-holder'>
        <div className='category business'></div>
        <h4>Business</h4>
      </div>
      </Link>
      <Link to="technology">
        <div className='category-holder'>
          <div className='category technology'></div>
          <h4>Technology</h4>
        </div>
      </Link>
      <Link to="music&Entertainment">
         <div className='category-holder'>
            <div className='category music'></div>
            <h4>Music & Entertainment</h4>
         </div>
      </Link>
      <Link to="religion" className='Link'>
          <div className='category-holder'>
           <div className='category religion'></div>
            <h4>Religion</h4>
          </div>
      </Link>
   
      
     
     
      
         {toggle ? more: null}  
     
    </div>
    <button onClick={displayMore} className='more'>{toggle ? "Less": "More"}{toggle ? <MdKeyboardDoubleArrowUp />:  <MdKeyboardDoubleArrowDown  /> } </button>
    </section>
  )
}

export default Categories
