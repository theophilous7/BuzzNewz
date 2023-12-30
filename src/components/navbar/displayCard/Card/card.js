const card = (props)=>{
    return(
        <div className="displayCard" >
        <p className="blue bold">uploaded: {props.each.publishedAt.slice(0, -10)}</p>
        <h2>{props.each.title}</h2>
        <img src={props.each.urlToImage} alt="" className="img" />
        <p>{props.each.description}</p>
        <h3 className="red"><span className="blue">Author:</span > {props.each.author}</h3>
        <button>Read More</button>
      </div>
    );
}

export default card;