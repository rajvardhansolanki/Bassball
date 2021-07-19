import React,{useEffect} from 'react';
import AOS from 'aos';
import Webdevelopment from './images/Webdevelopment.gif';
const Aboutus =()=>{
    useEffect(() => {
        AOS.init({duration:1700})
    }, []);
    return(<>
       <div className="container-fluid px-0" data-aos="slide-right" style={{backgroundColor:"#55efc4", width:"100%",height:"4px"}}></div>
       <div className="container-fluid">
       <div className="container-fluid">
                <div className="row pt-5" data-aos="slide-right" style={{ borderBottom: "2px solid #1bbc9b" }}>
                    <h2 data-aos="fade-in">About us</h2>
                </div>
            </div>
           <div className="row">
            <div className="col-md-6 mt-5 mb-2 p-5">
                <h1 className="fs" data-aos="fade">Company is the Leading Software Technology</h1> 
                <h1 className="fs" data-aos="fade">"Power of Code always output Unique"</h1>
            </div>
            <div className="col-md-6 mt-5 mb-3 p-5 d-flex justify-content-center align-items-center">
                <img data-aos="fade" className="logo-about" src={Webdevelopment}alt="/" id="Company-logo"/>
            </div>
               
           </div>
           
        </div>
    
           <div className="container-fluid">
           <div className="row">
               <div className="col-md-12 gr mb-5 rounded p-5">
                <p data-aos="fade"># Providing creative services through digital design is our sole purpose here at Company. We thrive to push our creative boundaries to help your business come out on top in the digital world.</p>
                <p data-aos="fade"># We want nothing more than to see our clients succeed online, and we’ve got the talent and expertise to make it happen. We are here to work with you to capture your vision and share it with the world. </p>
                <p data-aos="fade"># Our business domain knowledge, proven methodologies, and technology expertise of skilled software professionals yield high quality solutions that add value to businesses. From startups to enterprises, We cater to them all for their diverse technology requirements. </p>
                <p data-aos="fade"># We provide our resources on a monthly and hourly basis to other teams to enhance their business, as we believe in growing up together. </p>
                <p data-aos="fade"># We strive to exceed your expectations by breaking barriers and changing the game. If you need help with hiring and payroll contact us. We’re available to help you navigate even the most difficult human resources issues.</p>            
               </div>
               
           </div>
           </div>
       </>
    )
}
export default Aboutus;