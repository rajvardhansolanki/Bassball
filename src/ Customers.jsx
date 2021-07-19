import React, { useEffect,useState } from 'react';
import AOS from 'aos';
import customerstis from './images/customerstis.jpg';






const Customers = () => {

    const [User, setUser] = useState([]);

    const getUsers = async () => {
        const response = await fetch('https://api.github.com/users');
        setUser(await response.json());

    };

    useEffect(() => {
        getUsers();
    }, []);


    useEffect(() => {
        AOS.init({ duration: 1900 })
    }, []);
    return (
        <>
             <div className="container-fluid px-0" data-aos="slide-right" style={{backgroundColor:"#55efc4", width:"100%",height:"4px"}}></div>
            {/* section first start */}

            <div className="container-fluid">
                <div className="row p-3 pt-5">
                    <div className="col-md-6 order-lg-1 order-2 pt-4">
                        <h2 className="text-capitalize" data-aos="zoom-in" style={{ fontWeight: 'bold', opacity: '60%' }}>customers & customer satisfaction</h2>
                        <p data-aos="zoom-in">CUSTOMERS WHO TRUSTED US.</p>
                        <h2 data-aos="zoom-in" className="seconeh2 text-capitalize" >We help startups and Enterprises to hire Remote Engineers, Designers, Marketers, Managers, CTOs.</h2>
                        <p data-aos="zoom-in">You share your requirement, we can get your team ready in 7-10 days. 70+ Companies are working with us since last 4 years, and 400% Jump in business after Covid. You can trust us.</p>
                    </div>

                    <div className="col-md-6  order-lg-2  order-1">
                        <img src={customerstis} width="100%" height="100%" data-aos="fade" alt="/" />
                    </div>
                </div>

            </div>


            {/* section first end */}

            {/* section two start */}

            <section className="client">
                <div className="container-fluid">
                    <div className="row p-5 text-center mb-5" id="Card">
                        <div className="col-md-12 text-uppercase">
                            <h2 data-aos="slide-right">Our Happy Customers</h2>
                        </div>
                    </div>
                    <div className="row gy-5 mb-5">
                        
                        {
                User.map((Raj) => {



                    return (
                        <>
                        <div className="col-md-3" data-aos="zoom-in">
                            <div className="card" style={{ cursor: 'pointer' }}>
                                <img className="card-img-top" src={Raj.avatar_url} alt="Card cap" />
                                <div className="card-body">
                                    <h5 className="card-title">{Raj.login}</h5>
                                    <p className="card-text">{Raj.following_url}</p>
                                    <button type="button" className="btn btn-primary">VISIT</button>
                                </div>
                            </div>
                            </div>
                        </>
                    );
                })
            }
                        </div>

                    
                </div>
            </section>

            {/* section two end */}

            {/* section three start */}

            <section id="sec3">
                <div className="container-fluid">
                    <div className="row text-center text-white p-5">
                        <div className="col-md-12">
                            <h1 data-aos="zoom-in">A Future-proof, intuitive design, with better engineering</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 d-flex justify-content-center pb-5">
                            <button type="button" className="btn btn-lg btn-outline-light" data-aos="zoom-in"> Talk To Expert</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* section three end */}

            {/* section four start */}
             
             <div className="container-fluid">
                 <div className="row">
                     
                 </div>
             </div>

            {/* section four start */}


        </>
    );
};
export default Customers;