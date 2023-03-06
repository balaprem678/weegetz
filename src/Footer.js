import './App.css';
import './responsive.css';
import React, { useState, useEffect } from "react";

import 'aos/dist/aos.css';
import { Link } from "react-router-dom";


import Group17 from "./images/Group 17.png";
import Whatsapp from "./images/Group 2507.png"

export default function Footer() {
  return (
    <div className="Footer">
      {/* Footer Start */}
      <footer>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-lg-7 col-md-12 col-sm-12'>
              <div className='left-content'>
                <img src={Group17} data-aos="fade-up" />
                <h6 data-aos="fade-up">© 2022 Intuit Inc. All rights reserved.</h6>
                <h5 data-aos="fade-up">Intuit, Weegetz, QB, TurboTax, ProConnect, and Mint are registered trademarks of Intuit Inc.<br /> Terms and conditions, features, support, pricing, and service options subject to change<br /> without notice.</h5>
                {/* <h4>By accessing and using this page you agree to the Terms and Conditions.</h4> */}
              </div>
            </div>
            <div className='col-lg-5 col-md-12 col-sm-12'>
              <div className='right-content'>
                <div className='icons' data-aos="fade-up">
                  <a href='https://www.facebook.com/Weegetz/' target="_blank">
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                  <a href='https://www.instagram.com/weegetztech/' target="_blank">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a href='https://twitter.com/weegetz' target="_blank">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                  <a href='https://www.youtube.com/channel/UCkCs0mD7YAp7fV_69zmUllg' target="_blank">
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                  <a href='https://www.linkedin.com/in/weegetz-tech-409661259/' target="_blank">
                    <i class="fa-brands fa-linkedin"></i>
                  </a>
                </div>
                <h6 className='legal-privacy-security' data-aos="fade-up">
                  <Link to={"/Privacy"} className="nav-link">
                    Privacy
                  </Link>|
                  <Link to={"/Security"} className="nav-link">
                    Security
                  </Link> </h6>
                {/* <h5 data-aos="fade-up">About cookies | Manage cookies</h5> */}
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* Footer End */}
      {/* WhatsApp */}
      <div className='whatsapp'>
       
          <a href="https://api.whatsapp.com/send?phone=+919790522121&text=EllDee HAI This Is Weegetz." class="float" target="_blank">
            <i class="fa fa-whatsapp my-float"></i>
          </a>
      </div>
      {/* WhatsApp */}

    </div>
  );
}

