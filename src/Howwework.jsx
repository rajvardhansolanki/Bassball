import React, {useEffect}  from 'react';
import AOS from 'aos';
import Mobileapp from './images/Mobileapp.gif';
import Webdevelopment from './images/Webdevelopment.gif';
import Uiux from './images/Uiux.gif';
import Qulity from './images/Qulity.gif';
import Staffing from './images/Staffing.gif';
import Iotsolo from './images/Iotsolo.gif';
import Work from './images/Work.gif';



const Howwework = () => {
    useEffect(() => {
        AOS.init({duration:1700})
    }, []);
    return(
        <>
        <div className="container-fluid px-0" data-aos="slide-right" style={{backgroundColor:"#55efc4", width:"100%",height:"4px"}}></div>
        {/* section image start */}

         <section>
             <div className="container-fluid ">
                 <div className="row justify-content-center align-items-center">
                     <img src={Work} data-aos="slide-down" className="px-0" alt="/" style={{width:"50%"}}/>
                 </div>
             </div>
         </section>
        
        {/* section image start */}
  
        {/* Section first start */}

         <section>
             <div className="container-fluid">
                 
                 <div className="row d-flex justify-content-center align-items-center p-2">
                     <h3 data-aos="fade" style={{fontWeight:'bold',opacity:'100%'}}>How We Work</h3>
                     <h5 data-aos="fade" style={{opacity:'70%'}}>innovation,ideas and creativity</h5>
                     <hr style={{height:'2px'}} data-aos="slide-right"/>
                 </div>

                 <div className="row p-3">
                     <div className="col-md-6 order-lg-1 order-2">
                         <h2 className=" pb-3" data-aos="zoom-in" style={{fontWeight:'bold',opacity:'100%'}}>Mobile App development</h2>
                         <p data-aos="zoom-in">Expand your digital footprint across mobile and web 
                                With over 15+ years of helping customers accelerate digital transformation across the world, we work with you to understand your digital customer journey. Our Mobile App Developers build innovative custom solutions that match your unique business needs.

                                As one of the leading mobile app development company, we have helped customers across industries & geographies to extend their business to the mobile channel and differentiate their brand with human-centric digital experiences.

                                We offer digital consulting, mobile app development solutions, UI UX design and testing services. Our developers specialize in app development technologies like Android, iOS, React, Flutter, Xamarin, Ionic, Phonegap, Laravel, C#, C++, Visual Studio, Cordova, etc.
                         </p>
                     </div>
                     <div className="col-md-6  order-lg-2  order-1">
                         <img src={Mobileapp} width="100%" height="100%" data-aos="fade" alt="/"/>
                     </div>
                 </div>

             </div>
         </section>
         <hr/>

        {/* Section first end */}

        {/* Secoction second start */}

        <section>
            <div className="container-fluid">
                <div className="row p-3">
                        <div className="col-md-6 order-lg-2 order-2">
                            <h2 className=" pb-3" data-aos="zoom-in" style={{fontWeight:'bold',opacity:'100%'}}>Web development</h2>
                            <p data-aos="zoom-in">Web development is the building and maintenance of websites; it’s the work that happens behind the scenes to make a website look great, work fast and perform well with a seamless user experience.

                                Web developers, or ‘devs’, do this by using a variety of coding languages. The languages they use depends on the types of tasks they are preforming and the platforms on which they are working.

                                Web development skills are in high demand worldwide and well paid too – making development a great career option. It is one of the easiest accessible higher paid fields as you do not need a traditional university degree to become qualified.

                                The field of web development is generally broken down into front-end (the user-facing side) and back-end (the server side). Let’s delve into the details.
                            </p>
                        </div>
                        <div className="col-md-6  order-lg-1  order-1 d-flex justify-content-center">
                            <img src={Webdevelopment} width="80%" height="80%" data-aos="fade" alt="/"/>
                        </div>
                    </div>

             </div>
            
        </section>
        <hr/>

        {/* Section second end */}

        {/* Secoction third start */}

        <section>
            <div className="container-fluid">
                <div className="row p-3">
                        <div className="col-md-6 order-lg-1 order-2">
                            <h2 className=" pb-3" data-aos="zoom-in" style={{fontWeight:'bold',opacity:'100%'}}>UI & UX development</h2>
                            <p data-aos="zoom-in"> UI, UX, and front-end expert observes user behavior to improve the visible design of an application. They have a keen understanding of modern tech stacks and are proficient in crafting aesthetically beautiful interfaces.

                                Their primary goals are to raise user satisfaction, decrease user churn, and ensure user-based company goals are reached. Such goals might include increasing newsletter sign-ups, improving sales conversions, or identifying and removing pain points within an app.

                                While some choose to focus on a single area of expertise (either UI, UX, or front-end development), this role encompasses all of those areas; making for a rare designer-developer hybrid. For you to find the right candidate, it’s important to understand how these three areas of expertise overlap and connect.
                            </p>
                        </div>
                        <div className="col-md-6  order-lg-2  order-1 d-flex justify-content-center">
                            <img src={Uiux} width="80%" height="80%" data-aos="fade" alt="/"/>
                        </div>
                    </div>

             </div>
            
        </section>
        <hr/>

        {/* Section third end */}

        {/* Secoction four start */}

        <section>
            <div className="container-fluid">
                <div className="row p-3">
                        <div className="col-md-6 order-lg-2 order-2">
                            <h2 className=" pb-3" data-aos="zoom-in" style={{fontWeight:'bold',opacity:'100%'}}>Qulity analysis</h2>
                            <p data-aos="zoom-in">Good website design is backed by strategy. Even the most attractive, user-friendly website isn’t successful when it isn’t achieving what your company needs. So ask yourself: Do new visitors get a clear sense of who you are and what you offer when they arrive at your site? Does your design direct visitors to do what you want them to do? Is there clear strategy informing your design? If not, your design is not as good as it could be. To evaluate the effectiveness of strategy in your website design.
                            Usability is all about the practical considerations of what goes into good website design, such as speed, user-friendliness, security, technical details like sitemaps, etc. A lot of these details aren’t visually apparent; you don’t see a website’s security when you type in its URL. 
                            </p>
                        </div>
                        <div className="col-md-6  order-lg-1  order-1 d-flex justify-content-center align-items-center">
                            <img src={Qulity} width="100%" height="85%" data-aos="fade" alt="/"/>
                        </div>
                    </div>

             </div>
            
        </section>
        <hr/>

        {/* Section four end */}

        {/* Secoction five start */}

        <section>
            <div className="container-fluid">
                <div className="row p-3">
                        <div className="col-md-6 order-lg-1 order-2">
                            <h2 className=" pb-3" data-aos="zoom-in" style={{fontWeight:'bold',opacity:'100%'}}>Staffing</h2>
                            <p data-aos="zoom-in">From a management point of view, staffing is perhaps one of the most important functions since it touches not only filling vacant positions but filling vacant positions with the right personnel in the right job, at right time.

                              Hence, everything will occur in the right manner. When looking at any organisation dynamics all resources such as financial, equipment, systems, etc, could only be utilised efficiently by the right human element allocated to it or in other words by having the correct staffing process in place.
                              What does it mean to have a correct staffing process in place? It simply means that every person should get the right position in the organisation according to their ability, talent, aptitude, and specializations so that it will help the organization to achieve the pre-set goals in the proper way by the 100% efficient use of manpower.
                            </p>
                        </div>
                        <div className="col-md-6  order-lg-2  order-1 d-flex justify-content-center align-items-center">
                            <img src={Staffing} width="100%" height="85%" data-aos="fade" alt="/" className="rounded"/>
                        </div>
                    </div>

             </div>
            
        </section>
        <hr/>
        {/* Section five end */}

        {/* Secoction five start */}

        <section>
            <div className="container-fluid">
                <div className="row p-3">
                        <div className="col-md-6 order-lg-2 order-2">
                            <h2 className=" pb-3" data-aos="zoom-in" style={{fontWeight:'bold',opacity:'100%'}}>Iot solutions</h2>
                            <p data-aos="zoom-in">The Internet of Things is an emerging topic of technical, social, and economic significance. Consumer products, durable goods, cars and trucks, industrial and utility components, sensors, and other everyday objects are being combined with Internet connectivity and powerful data analytic capabilities that promise to transform the way we work, live, and play. Projections for the impact of IoT on the Internet and economy are impressive, with some anticipating as many as 100 billion connected IoT devices and a global economic impact of more than $11 trillion by 2025.

                                 At the same time, however, the Internet of Things raises significant challenges that could stand in the way of realizing its potential benefits. Attention-grabbing headlines about the hacking of Internet-connected devices, surveillance concerns, and privacy fears already have captured public attention. Technical challenges remain and new policy, legal and development challenges are emerging.
                            </p>
                        </div>
                        <div className="col-md-6  order-lg-1  order-1 d-flex justify-content-center align-items-center">
                            <img src={Iotsolo} width="100%" height="85%" data-aos="fade" alt="/" className="rounded"/>
                        </div>
                    </div>

             </div>
            
        </section>
        <hr/>
        {/* Section five end */}



        </>
    );
};
export default Howwework;