import React, { useEffect } from 'react';
import AOS from 'aos';
import RoomIcon from '@material-ui/icons/Room';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import FacebookIcon from '@material-ui/icons/Facebook';
const Contactus = () => {
    useEffect(() => {
        AOS.init({ duration: 1700 })
    }, []);

    return (
        <>
            <div className="container-fluid px-0" data-aos="slide-right" style={{backgroundColor:"#55efc4", width:"100%",height:"4px"}}></div>
            <div className="container-fluid">
                <div className="row pt-5" data-aos="slide-right" style={{ borderBottom: "2px solid #1bbc9b" }}>
                    <h2 data-aos="fade-in">Contact us</h2>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row pt-3 pb-4">
                    <div className="col-lg-6 col-md-12 order-lg-2 order-1">
                        <div className="row d-flex justify-content-center align-items-center p-4">
                            <div className="col-md-12 pb-4" data-aos="fade-in">
                                <RoomIcon style={{ fontSize: "30px" }} />
                                <span style={{ marginLeft: "10px" }}>3262  Stratford Court,Fremont,North Carolina</span>
                            </div>

                            <div className="col-md-12 pb-4" data-aos="fade-in">
                                <MailOutlineIcon style={{ fontSize: "30px" }} />
                                <span style={{ marginLeft: "10px" }}>E-mail: demo@gmail.com</span>
                            </div>

                            <div className="col-md-12 pb-4" data-aos="fade-in">
                                <MailOutlineIcon style={{ fontSize: "30px" }} />
                                <span style={{ marginLeft: "10px" }}> E-mail: hr@demo.io</span>
                            </div>

                            <div className="col-md-12 pb-4" data-aos="fade-in">
                                <WhatsAppIcon style={{ fontSize: "30px" }} />
                                <span style={{ marginLeft: "10px" }}> +91-9797979797</span>
                            </div>

                            <div className="col-md-12 pb-4" data-aos="fade-in">
                                <FacebookIcon style={{ fontSize: "30px" }} />
                                <span style={{ marginLeft: "10px" }}> +91-9797979797</span>
                            </div>

                       </div>
                    </div>
                    <div className="col-lg-6 col-md-12 p-4 order-lg-1 order-0">
                        <form data-aos="fade-in">
                            <div className="row gy-4">

                                <div className="col-md-6">
                                    <input type="text" name="name" className="form-control" placeholder="Your Name" required />
                                </div>

                                <div className="col-md-6 ">
                                    <input type="email" className="form-control" name="email" placeholder="Your Email" required />
                                </div>

                                <div className="col-md-12">
                                    <input type="text" className="form-control" name="subject" placeholder="Subject" required />
                                </div>

                                <div className="col-md-12">
                                    <textarea className="form-control" name="message" rows="6" placeholder="Message" required></textarea>
                                </div>

                                <div className="col-md-12 text-center">
                                    <button type="submit" className="btn btn-outline-primary">Send Message</button>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>

    )
}
export default Contactus;