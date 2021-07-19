import React,{useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import AOS from 'aos';
import servicesone from './images/servicesone.gif';
import servicetwo from './images/servicetwo.gif';
import servicethree from './images/servicethree.gif';

const Services = () => {
    useEffect(() => {
        AOS.init({duration:1800})
    }, []);
    return (
        <>
        <div className="container-fluid px-0" data-aos="slide-right" style={{backgroundColor:"#55efc4", width:"100%",height:"4px"}}></div>
        {/* section first start */}

         <section>
             <div className="container-fluid">
                 <div className="row pt-5" style={{ borderBottom: "2px solid #1bbc9b" }}>
                     <div className="col-md-12"><h2 data-aos="slide-right">Services</h2></div>
                 </div>
             </div>
         </section>

        {/* section first start */}

        {/* section second start */}

        <section>
             <div className="container-fluid">
                 <div className="row p-lg-5">
                     <div className="col-md-6 order-lg-1 order-2 ">
                     <h2 data-aos="slide-right">Mobile development</h2>
                     <p data-aos="slide-right"><NavLink className="text-decoration-none" to="#">Android Development</NavLink></p>
                     <p data-aos="slide-right"><NavLink className="text-decoration-none" to="#">Flutter Development</NavLink></p>
                     <p data-aos="slide-right"><NavLink className="text-decoration-none" to="#">iOS Development</NavLink></p>
                     <p data-aos="slide-right"><NavLink className="text-decoration-none" to="#">Mobile App Development</NavLink></p>
                     <p data-aos="slide-right"><NavLink className="text-decoration-none" to="#">React Native Development</NavLink></p>
                     <h3 className="pb-sm-3" data-aos="slide-right">“Your mobile device has quickly become the easiest portal into your digital self.”</h3>
                     </div>
                     <div className="col-md-6 order-lg-2 order-1" data-aos="fade-up"><img src={servicesone} style={{width:'100%',height:'100%'}} alt="/"/></div>
                 </div>
             </div>
         </section>
         <hr/>

         

        {/* section second start */}

         {/* section third start */}

         <section>
             <div className="container-fluid">
                 <div className="row p-lg-5">
                     <div className="col-md-6 order-lg-2 order-2">
                     <h2 data-aos="zoom-in">Web Development</h2>
                     <p data-aos="zoom-in"><NavLink className="text-decoration-none" to="#">ReactJS Development</NavLink></p>
                     <p data-aos="zoom-in"><NavLink className="text-decoration-none" to="#">AngularJS Development</NavLink></p>
                     <p data-aos="zoom-in"><NavLink className="text-decoration-none" to="#">WordPress Development</NavLink></p>
                     <p data-aos="zoom-in"><NavLink className="text-decoration-none" to="#">NodeJS Development</NavLink></p>
                     <p data-aos="zoom-in"><NavLink className="text-decoration-none" to="#">Python Development</NavLink></p>
                     <p data-aos="zoom-in"><NavLink className="text-decoration-none" to="#">Full Stack Development</NavLink></p>
                     <h3 className="pt-lg-5 pb-sm-3" data-aos="zoom-in">“A website without visitors is like a ship lost in the horizon.”</h3>
                     </div>
                     <div className="col-md-6 order-lg-1 order-1" data-aos="fade-up" ><img src={servicetwo} style={{width:'100%',height:'100%'}} alt="/"/></div>
                 </div>
             </div>
         </section>
         <hr/>

        {/* section third start */}

        {/* section four start */}

        <section>
             <div className="container-fluid">
                 <div className="row p-lg-5">
                     <div className="col-md-6 order-lg-1 order-2">
                     <h2 data-aos="slide-right">Other Dedicated Services</h2>
                     <p data-aos="slide-right"><NavLink className="text-decoration-none" to="#">Data Scientists</NavLink></p>
                     <p data-aos="slide-right"><NavLink className="text-decoration-none" to="#">Machine Learning Experts</NavLink></p>
                     <p data-aos="slide-right"><NavLink className="text-decoration-none" to="#">Golang Development</NavLink></p>
                     <p data-aos="slide-right"><NavLink className="text-decoration-none" to="#">DevOps Development</NavLink></p>
                     <p data-aos="slide-right"><NavLink className="text-decoration-none" to="#">Python Development</NavLink></p>
                     <p data-aos="slide-right"><NavLink className="text-decoration-none" to="#">Full Stack Development</NavLink></p>
                     <h3 className="pt-lg-5 pb-sm-3" data-aos="slide-right">“ In order to be irreplaceable, one must always be different”</h3>
                     </div>
                     <div className="col-md-6 order-lg-2 order-1" ><img src={servicethree} style={{width:'100%',height:'100%'}} alt="/"/></div>
                 </div>
             </div>
         </section>
         

        {/* section four start */}

        </>
    )
}

export default Services;
