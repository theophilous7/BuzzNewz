import { Fragment} from "react";
import  './displayCard.css'
import Card from "./Card/card";



const DisplayCard = (props)=>{

    let all = props.searchResult.map((each)=>{
       
        return(
           <Card each={each}
            key={each.url}/>  
        );
    })

    return(

       <Fragment>
          {all}
    
       </Fragment>
    );
}

export default DisplayCard;