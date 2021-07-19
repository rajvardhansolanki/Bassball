import React, { useEffect } from 'react';
import thirsvideo from './video/thirsvideo.mp4';
import AOS from 'aos';
import "../node_modules/aos/dist/aos.css";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import address from './images/address.svg';
import a1 from './images/a1.gif';
import g1 from './images/g1.gif'
import web from './images/web.gif';
import a from './images/a.jpg';
import b from './images/b.jpg';
import c from './images/c.jpg';

const Home = () => {

    const [focus, setFocus] = React.useState(false);

    useEffect(() => {
        AOS.init({ duration: 1700 })
    }, []);
    return (
        <>

            <div className="container-fluid px-0" data-aos="slide-right" style={{backgroundColor:"#55efc4", width:"100%",height:"4px"}}></div>
            {/* First Section Start  */}
             
            <section className="sec">
                <div className="container-fluid px-0" id="secone">
                    <div className="row">
                        <div className="col-md-12 d-flex justify-content-center align-items-center" id="vdo">
                            {/* <div className="coloroverlay "></div> */}
                            <h1 className="heding" data-aos="zoom-in" style={{ color: 'white', opacity: '70%' }}>Well Come To Company</h1>
                        </div>
                    </div>

                    <video autoPlay loop muted style={{ width: "100%", height: "100vh", objectFit: "cover" }}>
                        <source src={thirsvideo} type="video/mp4" />
                    </video>

                </div>
            </section>

            {/* First Section End  */}

            {/* Second Section Start  */}

            <section id="header" >
                <div className="container-fluid d-flex justify-content-md-around pt-5 pb-5 p-3">
                    <div className="row pt-2">
                        <div className="col-12 mx-auto">
                            <div className="row d-flex align-items-center justify-content-center">
                                <div className="col-md-6 pt-5 pt-lg-0 order-lg-1 order-2">
                                    <h3 data-aos="slide-right">Today is the day you turn your ideas into reality.</h3>
                                    <h5 data-aos="slide-right">That day is coming. When you step into a brave new world full of opportunities and possibilities,!</h5>
                                    <p data-aos="slide-right">975+ Projects, 484+ Clients, 170+ Expert-Level Talents,60 High-Rated Credible Reviews. Trusted Partner Since 2014.Monthly Billing.</p>

                                    <div className="mt-3 d-flex mb-3 justify-content-center" >
                                        <button className="btn text-white" style={{ border: "1px solid #1bbc9b", backgroundColor: "#1bbc9b" }} type="button" onClick="sec3">Get started</button>
                                    </div>
                                </div>

                                <div className="col-md-6  order-1 order-lg-2">
                                    <img src={g1} className="img-fluid animated" data-aos="zoom-in" alt="home" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Second Section End  */}

            {/* Slider */}
            <div className="container-fluid px-0 pb-5">
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>

                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={a} class="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={b} class="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={c} class="d-block w-100" alt="..." />
                        </div>
                    </div>

                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>

                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>

                </div>
            </div>

            {/* Slider */}

            {/* counterup start */}

            <section className="mt-3 p-lg-4 pt-5 pb-2" id="counters">
                <div className="container-fluid">
                    <div className="row text-center pb-3">
                        <h1 style={{opacity:"80%"}}>Your Satisfaction is Our Achivements</h1>
                    </div>
                    <div className="row text-center pb-3">
                        <div className="col-md-3 pb-3">
                            <h1 data-aos="zoom-in">
                                <CountUp start={focus ? 0 : null} end={200} duration={8} redraw={true}>
                                    {({ countUpRef }) => (
                                        <VisibilitySensor onChange={(isVisible) => {
                                            if (isVisible) { setFocus(true); }
                                        }}>
                                            <span ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp>+
                        </h1>
                            <h5>Project Delivered Successfully</h5>
                        </div>
                        <div className="col-md-3 pb-3">
                            <h1 data-aos="zoom-in">
                                <CountUp start={focus ? 0 : null} end={60} duration={8} redraw={true}>
                                    {({ countUpRef }) => (
                                        <VisibilitySensor onChange={(isVisible) => {
                                            if (isVisible) { setFocus(true); }
                                        }}>
                                            <span ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp>+
                        </h1>
                            <h5>Industries Servered</h5>
                        </div>
                        <div className="col-md-3 pb-3">
                            <h1 data-aos="zoom-in">
                                <CountUp start={focus ? 0 : null} end={150} duration={8} redraw={true}>
                                    {({ countUpRef }) => (
                                        <VisibilitySensor onChange={(isVisible) => {
                                            if (isVisible) { setFocus(true); }
                                        }}>
                                            <span ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp>+
                        </h1>
                            <h5>Clients Connected</h5>
                        </div>
                        <div className="col-md-3 pb-3">
                            <h1 data-aos="zoom-in">
                                <CountUp start={focus ? 0 : null} end={20} duration={8} redraw={true}>
                                    {({ countUpRef }) => (
                                        <VisibilitySensor onChange={(isVisible) => {
                                            if (isVisible) { setFocus(true); }
                                        }}>
                                            <span ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp>+
                        </h1>
                            <h5>Countries connected Worldwide</h5>
                        </div>
                    </div>
                </div>
            </section>

            {/* counterup end */}

            {/* Third Section Start  */}

            <section className="sec2 mt-5" id="sec3">
                <div className="container-fluid p-5 text-white" id="serv">
                    <div className="row pb-4">
                        <div className="col-md-12 text-center"><h4>Serving the clients across multiple domains</h4></div>
                    </div>

                    <div className="row">
                        <div className="col-md-12 text-sm-center"><p style={{ fontSize: "13px" }}>Company helps startups to craft ultimate products that are ready to go directly for VC funding. Once the investment is done, we assist startups to onboard a team and grow faster. BankOpen and Your Story are some of the companies for whom we have built products.</p></div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <div className="row p-2" id="p1">
                                <div className="col-md-4 p-4 d-flex flex-column" data-aos="zoom-in">

                                    <div className="sumary-img"><img src={address} width={'50px'} alt="/" /></div>
                                    <div className="summary-text"><p><a className="text-decoration-none text-white" href="/">E-Commerce</a></p></div>
                                    <div className="summary-text"><p>30+ e-commerce solutions, 12 fintech top-funded products.</p></div>
                                </div>

                                <div className="col-md-4 p-4 d-flex flex-column" data-aos="zoom-in">

                                    <div className="sumary-img"><img src={address} width={'50px'} alt="/" /></div>
                                    <div className="summary-text"><p><a className="text-decoration-none text-white" href="/">E-Commerce</a></p></div>
                                    <div className="summary-text"><p>30+ e-commerce solutions, 12 fintech top-funded products.</p></div>
                                </div>

                                <div className="col-md-4 p-4 d-flex flex-column" data-aos="zoom-in">

                                    <div className="sumary-img"><img src={address} width={'50px'} alt="/" /></div>
                                    <div className="summary-text"><p><a className="text-decoration-none text-white" href="/">E-Commerce</a></p></div>
                                    <div className="summary-text"><p>30+ e-commerce solutions, 12 fintech top-funded products.</p></div>
                                </div>

                                <div className="col-md-4 p-4 d-flex flex-column" data-aos="zoom-in">

                                    <div className="sumary-img"><img src={address} width={'50px'} alt="/" /></div>
                                    <div className="summary-text"><p><a className="text-decoration-none text-white" href="/">E-Commerce</a></p></div>
                                    <div className="summary-text"><p>30+ e-commerce solutions, 12 fintech top-funded products.</p></div>
                                </div>

                                <div className="col-md-4 p-4 d-flex flex-column" data-aos="zoom-in">

                                    <div className="sumary-img"><img src={address} width={'50px'} alt="/" /></div>
                                    <div className="summary-text"><p><a className="text-decoration-none text-white" href="/">E-Commerce</a></p></div>
                                    <div className="summary-text"><p>30+ e-commerce solutions, 12 fintech top-funded products.</p></div>
                                </div>

                                <div className="col-md-4 p-4 d-flex flex-column" data-aos="zoom-in">

                                    <div className="sumary-img"><img src={address} width={'50px'} alt="/" /></div>
                                    <div className="summary-text"><p><a className="text-decoration-none text-white" href="/">E-Commerce</a></p></div>
                                    <div className="summary-text"><p>30+ e-commerce solutions, 12 fintech top-funded products.</p></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Third Section End  */}

            {/* Section four start */}

            <section>
                <div className="container-fluid pb-5 pt-5 p-3 ">
                    <div className="row ">
                        <div className="col-md-6"><img src={a1} data-aos="zoom-in" id="secfourimg" alt="/" /></div>
                        <div className="col-md-6 d-flex justify-content-center align-items-center text-center" style={{ backgroundColor: "#f4f7fd" }}><h1 className="sec4h1" data-aos="slide-right">Comapny Name </h1></div>
                    </div>
                </div>
            </section>

            {/* Section four end */}

            {/* Section seven start */}

            <section className="mainsecseven">
                <div className="container-fluid">
                    <div className="row p-3">
                        <div className="row">
                            <div className="col-md-12 text-center p-5 pb-5"><h3 className="secsevenhediing" data-aos="zoom-in">Product Journeys That Are Close to Our Heart</h3></div>
                        </div>
                        <div className="col-md-4 p-5" id="secsevenhover" data-aos="zoom-in">
                            <div className="row"><div className="col-md-12"><h3 data-aos="zoom-in">Product</h3></div></div>
                            <div className="row"><div className="col-md-12"></div><p data-aos="zoom-in">We want nothing more than to see our clients succeed online, and we’ve got the talent and expertise to make it happen. We are here to work with you to capture your vision and share it with the world.</p></div>
                        </div>

                        <div className="col-md-4 p-5" id="secsevenhover" data-aos="zoom-in">
                            <div className="row"><div className="col-md-12"><h3 data-aos="zoom-in">Product</h3></div></div>
                            <div className="row"><div className="col-md-12"></div><p data-aos="zoom-in">We want nothing more than to see our clients succeed online, and we’ve got the talent and expertise to make it happen. We are here to work with you to capture your vision and share it with the world.</p></div>
                        </div>

                        <div className="col-md-4 p-5" id="secsevenhover" data-aos="zoom-in">
                            <div className="row"><div className="col-md-12"><h3 data-aos="zoom-in">Product</h3></div></div>
                            <div className="row"><div className="col-md-12"></div><p data-aos="zoom-in">We want nothing more than to see our clients succeed online, and we’ve got the talent and expertise to make it happen. We are here to work with you to capture your vision and share it with the world.</p></div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Section seven end */}

            {/* Section ait start */}

            <section className="mainsecait p-lg-5">
                <div className="container-fluid text-white text-center">
                    <div className="row p-3">
                        <div className="col-md-12">
                            <h2>Explore the Excellence</h2>
                            <p>Our business domain knowledge, proven methodologies, and technology expertise of skilled software professionals yield high quality solutions that add value to businesses. From startups to enterprises.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section ait end */}

            {/* Section nine start */}

            <section className="secnine pt-5 pb-5">
                <div className="container-fluid  pt-3 pb-2">
                    <div className="row p-3">
                        <div className="col-md-6 order-1">
                            <h3 className="sec-nineh3" data-aos="slide-right">Top Mobile App & Web</h3>
                            <h3 className="sec-nineh3" data-aos="slide-right">Development Company in India</h3>
                            <p className="sec-ninep" data-aos="fade">Comapny utilizes its qualities in innovative ideas, developing, portable just as client assistance to make new income-producing open doors for its clients and simultaneously decreasing the overheads while empowering them to rapidly send and better oversee and direct perfect outcomes their organizations.

                            We are a software development company that gives perfect edge designing services, helping Fortune 500 enterprises, and solving customers' unbeatable complex issues that consistently arise during their agile development project. Since 2014 we have been a visionary and a trustable software partner globally.

                                We embrace change and are constantly evolving. We push and elevate each other with the shared goal of doing awesome work.</p>
                        </div>
                        <div className="col-md-6 order-0"><img src={web} id="sec-nineimg" alt="/" /></div>
                    </div>
                </div>
            </section>
            

            {/* Section nine end */}





        </>
    );
};
export default Home;