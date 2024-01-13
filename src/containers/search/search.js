import "./search.css"
import {  useState } from "react";
import { FaSearch } from "react-icons/fa"
import axios from "axios";
import {  } from "react-router-dom";

function Search ({pullData})  {
               const [data, setData] = useState("");
               const[result, setResult] = useState([]);
              pullData(result);
              
        const searchHandler = ()=>{
            data === "" ? alert("Please type something to search!"):
            axios.get(`https://newsapi.org/v2/everything?q=${data}&apiKey=56330a5a4d0e4fdc9ec890e8d9f6dcde`)
            .then((response)=>{
                setResult(response.data.articles);
                console.log(response);
               // setSearchState(false);
            })
            .catch((err)=>{
                console.log(err)
            })
                           

        }

        return(
                
         <div className="search-holder">

            <FaSearch className="search-icon" />
            <input placeholder="type to search..." value={data}
                onChange={event=>setData(event.target.value)}
                />
           <button className="search-button" onClick={searchHandler}>Search</button>
          
         </div>
          
                
                
         
               
        );
        }
export default Search;