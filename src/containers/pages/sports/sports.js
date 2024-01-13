import axios from 'axios'
import React, {useState, useEffect } from 'react'
import './sport.css'


const SportPage = () => {
  const[headlines, setHeadlines] = useState([]);
  console.log(headlines)
  useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us&category=sport&apiKey=56330a5a4d0e4fdc9ec890e8d9f6dcde`
        );
        setHeadlines(response.data.articles);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData(); // Call the function immediately
       // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]) // Empty dependency array to run the effect only once when the component mounts
  




  return (
    <>
   {headlines.filter((headline, index)=>{
    return (
      headline.title !== "" && 
      headline.urlToImage !== null &&
      headline.author !== ""
     );
    
})
.map((headline, index) => {
  console.log("headlines after filter", headlines)
  if (headlines.length === 0) {
    return (<p>Loading...</p>)
  }
  
  return(
    <div key={index} className="div-item">
    <h3 className="title">{headline.title}</h3>
  <img src={headline.urlToImage} alt="" className="img" />
  <h4 className="desc">  <button className="read-more">Read More</button><span className="author">Author:</span > {headline.author}</h4>
  </div>
  );

})}
</>
  )
}

export default SportPage
