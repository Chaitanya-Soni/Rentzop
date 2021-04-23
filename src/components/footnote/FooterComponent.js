import React from 'react';
import { FaPhone, FaFax, FaEnvelope } from 'react-icons/fa';
import '../bower_components/bootstrap-social'
import { Link } from 'react-router-dom';

function Footer (props) {
    return (
        <div className="footer">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-3 col-sm-3">
                        <h5>Blogs</h5>
                        <ul className="list-unstyled">
                            <li><a href="https://blog.taxbuddy.com/">Home Loans Taxation</a></li>
                            <li><a href="https://blog.feedspot.com/home_buying_blogs/">Trends and Analysis</a></li>
                            <li><a href="https://blog.hubspot.com/sales/real-estate-blogs">Real Estate Insights</a></li>
                        </ul>
                    </div>
                    <div className="col-5 col-sm-2">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/customerservices">Customer Services</Link></li>
                            <li><Link to="/signup">Sign Up</Link></li>
                            <li><Link to="/contactus">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="col-4 col-sm-5">
                        <h5>Our Address</h5>
                        <address>
                            F11 D-Block Sabar Hostel<br />
		                    Majra chowkdi, Prantij<br />
		                    Gujarat, India<br />
                            <span ><FaPhone /> </span>&nbsp;
                            <i className="fa fa-phone fa-lg"></i>
                            <FaFax /> &nbsp;
                            <i className="fa fa-fax fa-lg"></i>
                            <FaEnvelope />
                            <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:breejemodi16@gmail.com">rentzop21@gmail.com</a>
                        </address>
                    </div>
                    <div className="col-12 col-sm-4 align-self-center">
                    <b><h5>Connect With Us:</h5></b>
                        <div className="text-center">
                            <a className="btn btn-social-icon btn-google" href="http://google.com/+"><i className="fa fa-google-plus"></i></a>
                            <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                            <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
                            <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                            <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
                            <a className="btn btn-social-icon" href="mailto:"><i className="fa fa-envelope-o"></i></a>
                        </div>
                    </div>
                </div>
                <br/>
                <div className="row justify-content-center" id="copyright">
                    <div className="col-auto">
                        <p>© Copyright 2021 Rentzop</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;