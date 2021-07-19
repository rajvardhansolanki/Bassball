import React from 'react';
import Reviews from './images/Reviews.gif'
import img from './images/client.jpeg'
import Reviewcard from './Review-card';
const Review =()=>{
return(
    
    <>
    <div className="container-fluid px-0" data-aos="slide-right" style={{backgroundColor:"#55efc4", width:"100%",height:"4px"}}></div>
    <div className="container-fluid">
                <div className="row pt-5" data-aos="slide-right" style={{ borderBottom: "2px solid #1bbc9b" }}>
                    <h2 data-aos="fade-in">Review</h2>
                </div>
            </div>
   


    <div className="container-fluid text-center d-flex justify-content-center">      
        <div className="row">
        <div> <img src={Reviews} alt="/" style={{width:"30%"}}/>
      <h1>Our Clients Testimonial and their Feedbacks- CUBEXO</h1>
      </div> 
           <Reviewcard imgsrcr={img} projectname="Manon"/>
           <Reviewcard imgsrcr={img} projectname="Swim instructor"/>
        </div>
    </div>
    </>
)

}
export default Review;