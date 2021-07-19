import React from 'react';
const Reviewcard= props=>{
    return(
        <div className="container text-center d-flex justify-content-space-around">
     
        <div className="row text-center gr pb-5 ">
       
        <div className="col-md-5 mt-5 mb-5 "><h1>{props.projectname}</h1><div className="text-center d-flex justify-content-center"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio corrupti necessitatibus provident quaerat numquam error rem, reprehenderit itaque magni voluptatibus! Vel, nam perspiciatis obcaecati dolorum voluptates quas laborum at deleniti magnam et quod vero porro soluta quisquam harum. Fuga odio quis neque nostrum delectus tempora iure sequi necessitatibus nam saepe!</p></div></div>
        <div className="col-md-5 mt-5 mb-5 "><img src={props.imgsrcr} alt="ff"/></div>
            </div>
    </div>
    )
}
export default Reviewcard;