import './App.css';
import './responsive.css';
import React, { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Homepagelogo from "./images/Group 18.png"
export default function Navigation() {
  const links = ['Home', 'Features', 'AppView', 'Pricing'];
  const [active, setActive] = useState('Home');
  const [active2, setActive2] = useState(null);
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="Navigationbar">
      {/* Navbar_Section-Start */}
      <div className='navigation reveal fade-bottom'>
        <div className='container'>
          <nav className="navbar home-navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="/"><img src={Homepagelogo} alt="Homepagelogo" /></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav">
                {links.map((link) => (
                  <li className="nav-item active">
                    <a class="nav-link"
                      href={`#${link}`}
                      className={`nav-link ${active == link && 'm-active'}`}
                      onClick={() => setActive(link)}
                    >{link}</a>
                  </li>
                ))}
              </ul>
              <a class="nav-link" href={`#Contact`} className={`black-button  py-1 font-weight-bold ${active2 == "Contact" && 'active'}`}
                onClick={() => setActive2("Contact")}><button>Contact Us</button>
              </a>
            </div>
          </nav>
        </div>
      </div>
      {/* Navbar-Section-End */}
    </div>
  );
}

