
import React,{Component} from 'react';
import Card from './Blog-card';
import img1 from './images/blog1.jpeg'
import img2 from './images/blog2.jpeg'
import img3 from './images/blog3.jpeg'
import img4 from './images/blog4.jpeg'
import img5 from './images/blog5.jpeg'
class Blog extends Component{
    
    render(){
        return(
            <>
            <div className="container-fluid px-0" data-aos="slide-right" style={{backgroundColor:"#55efc4", width:"100%",height:"4px"}}></div>
            <div className="container-fluid d-flex justify-content-center">
                <div className="row blog-div">
                    <div className="col-md-4 mt-5">
                        <Card imgsrc={img1} title="Adventure"/>
                    </div>
                    <div className="col-md-4 mt-5">
                        <Card imgsrc={img2} title="Jddes"/>
                    </div>
                    <div className="col-md-4 mt-5">
                        <Card imgsrc={img3} title="Culture"/>
                    </div>
                    <div className="col-md-4 mt-5 mb-5">
                        <Card imgsrc={img4} title="Tech"/>
                    </div>
                    <div className="col-md-4 mt-5">
                        <Card imgsrc={img5} title="Support"/>
                    </div>
                   
                    
                </div>
            </div>
        </>
        );
    }
}
export default Blog;