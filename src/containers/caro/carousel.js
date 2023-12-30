import { Carousel, CarouselItem } from "react-bootstrap";
import "./carousel.css"
import axios from "axios";

import React, { useEffect, useState } from 'react'

const MyCarousel = () => {
    const[headlines, setHeadlines] = useState([]);
    console.log(headlines)

    useEffect(()=>{
        
        const fetchData = async () => {
            try {
              const response = await axios.get(
                `https://newsapi.org/v2/top-headlines?country=us&apiKey=56330a5a4d0e4fdc9ec890e8d9f6dcde`
              );
              setHeadlines(response.data.articles);
            } catch (error) {
              console.error("Error fetching data:", error);
            }
          };
      
          fetchData(); // Call the function immediately
      
          // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []); // Empty dependency array to run the effect only once when the component mounts
        

       
  return (
    <>
     <Carousel className="carousel">
     <h4 className="breaking">TOP HEADLINES</h4>
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
            <CarouselItem key={index} className="carousel-item">
            <h3 className="title">{headline.title}</h3>
          <img src={headline.urlToImage} alt="" className="img" />
          <h4 className="desc">  <button className="read-more">Read More</button><span className="author">Author:</span > {headline.author}</h4>
          </CarouselItem>
          );
        
        })}
      </Carousel>
    </>
  )
}

export default MyCarousel
