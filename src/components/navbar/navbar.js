//import Search from "../../containers/search/search"
import "./navbar.css"

function navbar  (props) {

  
  console.log()
    return(
      <div className="nav">
        <div className="logo">BZ</div>
        <h1>BUZZNEWZ </h1>
       
      <div className="right">
        <select>
           <option>ENGLISH</option>
           <option>FRENCH</option>
           <option>DUTCH</option>
        </select>
        <button>SIGN IN</button>
      </div>
      </div>
       
   ); 
  }
  

export default navbar;