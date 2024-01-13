import {React, useState } from 'react'
//import {Route, Routes} from "react-router-dom"
import Search from '../../search/search'
import DisplayCard from '../../../components/navbar/displayCard/displayCard'

const SearchPage = () => {
  //  const [searchResult, setSearchResult] = useState([]);

  const [searchResult, setSearchResult] = useState([]);

  function pullData (result){
    setSearchResult(result) 
    console.log(result)
  }
 
  return (
    <div>
      <Search pullData={pullData}
        />
        <DisplayCard searchResult={searchResult}/>
      
      
    </div>
  )
}

export default SearchPage
