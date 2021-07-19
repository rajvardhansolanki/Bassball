import React from 'react';
const Card = props =>{
return(
    <div className=" text-center shadow ">
        <div className="img-div">
        <img className="img-top" src={props.imgsrc} alt="img1" />
        </div>
    <div className="blog-body text-dark pb-3 rounded">
    <h3 className="blog-title">{props.title}</h3>
    <p className="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi iure similique quod odit quisquam voluptas error molestiae reprehenderit nisi modi.</p>
    <a href="/" className="btn btn-outline-primary ">Go To Discription</a>
    </div>
    </div>
);
}
export default Card;
