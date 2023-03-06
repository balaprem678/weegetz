import './App.css';
import './responsive.css';
import React, { useState, useEffect, useRef } from "react";
import 'aos/dist/aos.css';

import OwlCarousel from 'react-owl-carousel';
import "owl.carousel/dist/assets/owl.carousel.min.css"
import "owl.carousel/dist/assets/owl.theme.default.min.css";


// import Homepagelogo from "./images/Group 18.png"
import Group4318 from "./images/New folder (2)/4318.png"
import Group5318 from "./images/New folder (2)/5318.png"
import Group5319 from "./images/New folder (2)/5319.png"
import Group5320 from "./images/New folder (2)/5320.png"

import Group1 from "./images/Group 1.png";
import Group5 from "./images/Group 5.png";
import Group3 from "./images/Group 3.png";
import Group4 from "./images/Group 4.png";
import Group3336 from "./images/value img png/Group 9139.png";
import Group3337 from "./images/value img png/Group 9141-2.png";
import Group3338 from "./images/value img png/Group 9140.png";
import Group3339 from "./images/value img png/Group 9141-1.png";
import Group3340 from "./images/value img png/Group 9141.png";
import Group3341 from "./images/value img png/Group 9141-3.png";
import Group3374 from "./images/Group 3374.png";
import Group3430 from "./images/Group 3430.png";
import Group3458 from "./images/Group 3458.png";
import Group3554 from "./images/Group 3554.png";
import Group4319 from "./images/Group 4319.png";
import Group4320 from "./images/Group 4320.png";
import Group4321 from "./images/Group 4321.png";
import Group4330 from "./images/Group 4330.png";
import Group6 from "./images/Mask Group 6.png";
import WebBulk from "./images/Web/Web/Bulk Upload.png";
import WebDashboard from "./images/Web/Web/Dashboard.png";
import WebMultiStores from "./images/Web/Web/Multi-Stores.png";
import WebPOS from "./images/Web/Web/POS.png";
import WebProducts from "./images/Web/Web/Products.png";
import WebSubPlans from "./images/Web/Web/Sub Plans.png";
import WebWallet from "./images/Web/Web/Wallet.png";
import MobileCart from "./images/Mobile/Mobile/Cart.jpeg";
import MobileDashboard from "./images/Mobile/Mobile/Dashboard.jpeg";
import MobileInvoice from "./images/Mobile/Mobile/Invoice.jpeg";
import MobileMultiStores from "./images/Mobile/Mobile/Multi-Stores.jpeg";
import MobilePOS from "./images/Mobile/Mobile/POS.jpeg";
import MobileProducts from "./images/Mobile/Mobile/Products.jpeg";
import Tick from "./images/tick.png";
import whitetick from "./images/whitetick.png";
import Wrong from "./images/wrong.png";
import Navigation from './Navigation';
import Footer from './Footer';
function Home() {
  useEffect(() => {
    const body = document.querySelector('#root');

    body.scrollIntoView({
      behavior: 'smooth'
    }, 500)
  }, []);
  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch(error => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);

  return (
    <div className="Home" id="Home">
      <Navigation />
      <div>
        {/* Online Store Start*/}
        <div className='online-store'>
          <div className='container-fluid'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-7 col-md-7 col-sm-12 reveal fade-left' data-aos="fade-right">
                  <div className='content'>
                    <h6>Get online!</h6>
                    <h1>Weegetz is that <span class="type"> <span >quicker and easier</span>&nbsp;
                    </span><br />way to transform your store into<br /> an online  e-commerce store,<br /> <span class="type"> <span> in just a few clicks.</span>
                      </span>
                    </h1>

                    <h5>Take advantage of our free trial today!</h5>
                  </div>
                  <div className='store' data-aos="fade-up">
                    <a href="" target="_blank"><img src={Group1} /><span>Google Play</span></a>
                    <a href="" target="_blank"><img src={Group5} /><span className='app-stores'>App Store</span></a>
                    <a href="" target="_blank"><img src={Group3} /><span>For Web</span></a>
                  </div>
                </div>
                <div className='col-lg-5 col-md-5 col-sm-12 play' data-aos="fade-left">
                  <div className='shoping-trolly'>
                    <img src={Group4318} />
                    <div>
                      {/* <video
                    style={{ maxWidth: "100%", width: "800px", margin: "0 auto" }}
                    playsInline
                    loop
                    muted
                    controls
                    alt="All the devices"
                    src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                    ref={videoEl}
                  /> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Online Store Start*/}
        {/* Weegetz-Store Start*/}
        <div className='weegetz-store'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-5 col-md-5 col-sm-12 wee-store' data-aos="fade-left">
                <div className='left-content'>
                  <h1><span>Weegetz</span> Store</h1>
                  <p className='head-2'> <span class="typed">
                    <span> A whole new e-shopping world</span>
                  </span>
                  </p>
                  <p className='head-1'>
                    Weegetz is an all-in-one platform that you can use to create, manage and grow your retail business. It comes with a variety of tools that will help you sell your products easily and effectively. It's a cost-effective way to expand your brand, reach more customers, and increase your reach and sales.
                  </p>
                </div>
              </div>
              <div className='col-lg-7 col-md-7 col-sm-12 wee-store' data-aos="fade-right">
                <div className='right-img'>
                  <img src={Group3336} />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Weegetz-Store Start*/}
        {/* Value Start */}
        <div className='value'>
          <h1 data-aos="fade-up"><bold>Values</bold></h1>
          <h6 data-aos="fade-down">Running a business is no more complicated.</h6>
          <div className='container-fluid'>
            <div className='row d-flex justify-content-center'>
              <div className='flex-fill' data-aos="fade-right">
                <div class="flip-card" tabIndex="0">
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <img src={Group3337} />
                      <p className='known'>Increase The Sales<br />by 15% to 20 %</p>
                    </div>
                    <div class="flip-card-back">
                      <p>Increase your revenue by increase the sales with bring your local store in to e-commerce store.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex-fill' data-aos="fade-right">
                <div class="flip-card" tabIndex="0">
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <img src={Group3338} />
                      <p className='known'>Round-The-Clock<br /> Sales</p>
                    </div>
                    <div class="flip-card-back">
                      <p>With Weegetz, sell your products while you sleeping. Online e-commerce store shallbe available 24/7 and no fes or extensive training required, can set up your shop and start slling in seconds.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex-fill'>
                <div class="flip-card" tabIndex="0">
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <img src={Group3339} />
                      <p className='known'>No more boundary</p>
                    </div>
                    <div class="flip-card-back">

                      <p>WE're a powerful solution that provides tha tools you need to sell anywhere - all at no additional cost.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex-fill' data-aos="fade-left">
                <div class="flip-card" tabIndex="0">
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <img src={Group3340} />
                      <p className='known knowns'>Easier than ever before</p>
                    </div>
                    <div class="flip-card-back">
                      <p>We've mad setting up shop with Weegetz as simple as possible. Find out how easy it is to get started and how you can use our dashboard to manage everything from inventory to orders. </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex-fill' data-aos="fade-left">
                <div class="flip-card" tabIndex="0">
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <img src={Group3341} />
                      <p className='known knowns-1'>We're about more than<br /> just software</p>
                    </div>
                    <div class="flip-card-back">
                      <p>Not only do we give you the software to start  you own e-commerce store, but we also provid you with analytics and insights that will help you run a successful business.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Value End */}
        {/* Features Start */}
        <div className='features' id='Features'>
          <div className='head-features'>
            <h1 data-aos="fade-down" >Features</h1>
            <h3 data-aos="fade-up">Weegetz Store</h3>
            <div className='container background-line-1'>
              <div className='row'>
                <div className='col-lg-6 col-md-6 col-sm-12 features-img-1' data-aos="fade-right">
                  <div className='left-img'>
                    <img src={Group3374} />
                  </div>
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12' data-aos="fade-left">
                  <div className='right-content'>
                    <h1 className='heading'>Customer Intelligence Platform</h1>
                   
                    <ul>
                      <li> Customer Intelligence Platform gathers and analyzes customer
                        information to develop strong customer relationship and improve
                        decision-making process.</li>
                      <li>This data can be used to improve customer service, target marketing
                        campaigns, and personalize the shopping experience.</li>
                      <li>This platform may also provide tools for managing customer loyalty
                        programs and analyzing customer behavior</li>
                    </ul>
                  </div>
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12 feature-img-1 wee-store' data-aos="fade-right">
                  <div className='left-img'>
                    <img src={Group3374} />
                  </div>
                </div>
              </div>

              {/* Predictive-Analytics */}
              <div className='row Predictive-Analytics'>
                <div className='col-lg-6 col-md-6 col-sm-12' data-aos="fade-right">
                  <div className='left-text'>
                    <h1 className='heading'>Predictive Analytics</h1>
                    <p className='heading-para'>With the help of predictive analytics, retailers can figure out future trends. Discovering a pattern and understanding how it can impact the business is extremely important. Predictive analytics shows "what's next. However, this can only show a simple forecast, without offering specific insights. It offers valuable information about metrics like profit margins, sales trends, and customer counts. This will help you forecast purchases and manage inventory.</p>
                  </div>
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12 wee-store' data-aos="fade-left">
                  <div className='right-img'>
                    <img src={Group3430} />
                  </div>
                </div>
              </div>
              {/* Multi-store-integration */}
              <div className='row Multi-store-integration'>
                <div className='col-lg-6 col-md-6 col-sm-12 features-img-2 ' data-aos="fade-right">
                  <div className='right-img'>
                    <img src={Group3458} />
                  </div>
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12' data-aos="fade-left">
                  <div className='left-text'>
                    <h1 className='heading'>Multi-store Integration</h1>
                    <p className='heading-para'>Multi-store is used to provide international exposure, brand separation and allows purchasing single license of ecommerce software.</p>
                    <ul>
                      <li>Multi-lingual customer support  </li>
                      <li>Separate google analytics accounts</li>
                      <li>Design templates modification</li>
                    </ul>
                  </div>
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12 feature-img-2' data-aos="fade-right">
                  <div className='right-img'>
                    <img src={Group3458} />
                  </div>
                </div>
              </div>
              {/*Customer-loyalty-programs*/}
              <div className='row Customer-loyalty-programs'>
                <div className='col-lg-6 col-md-6 col-sm-12' data-aos="fade-right">
                  <div className='left-text'>
                    <h1 className='heading'>Customer Loyalty Programs</h1>
                    <p className='heading-para'>Customer loyalty program broadens and solidifies customers Relationships, leading to strengthened loyalty and patronage.</p>
                    <ul>
                      <li>Aid Customer Acquistion</li>
                      <li>Increased customer retention</li>
                      <li>increase in sales and revenue</li>
                    </ul>
                  </div>
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12 wee-store' data-aos="fade-left">
                  <div className='right-img'>
                    <img src={Group3554} />
                  </div>
                </div>
              </div>
              {/* Customer-loyalty-programs End */}
              {/*Customer-loyalty-programs*/}
              <div className='row Customer-loyalty-programs'>
                <div className='col-lg-6 col-md-6 col-sm-12 wee-store features-img-3' data-aos="fade-left">
                  <div className='right-img'>
                    <img src={Group5319} />
                  </div>
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12' data-aos="fade-right">
                  <div className='left-text'>
                    <h1 className='heading'>Just a QR code</h1>
                    <p className='heading-para'>No more queues</p>
                    <p className='heading-para'>As a customer, you can order your favorite products and skip the queue. As a merchant, you can keep track of inventory levels and make last-minute changes. No more missed opportunities.
                    </p>

                  </div>
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12 wee-store feature-img-3' data-aos="fade-left">
                  <div className='right-img'>
                    <img src={Group5319} />
                  </div>
                </div>
              </div>
              {/* Customer-loyalty-programs End */}
            </div>
          </div>
          <div className='Customers'>
            {/* <h3 data-aos="fade-up">B2C ( Customers)</h3> */}
            <div className='container background-line-2'>
              <div className='Shop-and-Earn'>
                <div className='row'>
                  <div className='col-lg-6 col-md-6 col-sm-12' data-aos="fade-right">
                    <div className='left-text'>
                      <h1 className='heading'>Shop and Earn</h1>
                      <p className='heading-para'>
                        Shop & Earn savings are on top of savings customers already receive products with low prices, coupons, hot sales or other discounts. It takes only one click to activate monthly savings and tracks all the rest.
                      </p>
                    </div>
                  </div>
                  <div className='col-lg-6 col-md-6 col-sm-12 wee-store' data-aos="fade-left">
                    <div className='right-img'>
                      <img src={Group4319} />
                    </div>
                  </div>
                </div>
              </div>
              {/*  */}
              <div className='row Grab-and-Go'>
                <div className='col-lg-6 col-md-6 col-sm-12 wee-store features-img-4' data-aos="fade-right">
                  <div className='right-img'>
                    <img src={Group4320} />
                  </div>
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12' data-aos="fade-left">
                  <div className='left-text'>
                    <h1 className='heading'>Grab and Go</h1>
                    <p className='heading-para'>
                      Pick & GO first Al convenience store. Imagine shopping for your daily necessities without having to wait for long queues or squeeze with the crowd 24/7 anytime and any day technology, simply grab what you want and just walk out to complete your payment within seconds. With Pick & GO, you can finally spend more time doing things you love!
                    </p>
                  </div>
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12 wee-store feature-img-4' data-aos="fade-right">
                  <div className='right-img'>
                    <img src={Group4320} />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        {/* Features Start */}

        {/* Additional Features Start*/}
        <div className='Additional-Features'>
          <h2 data-aos="fade-up">Weegetz POS</h2>
          <div className='container background-line-3'>
            <div className='row Integrated Merchant'>
              <div className='col-lg-6 col-md-6 col-sm-12' data-aos="fade-right">
                <div className='left-text'>
                  <h1 className='heading'>Integrated Merchant and POS system</h1>
                  <p className='heading-para'>An integrated POS that blends your choice of POS systems with our payments technology to deliver everything you need to simplify payments and elevate customer experience</p>
                  <ul>
                    <li>Easy payments</li>
                    <li>Robust customer service</li>
                    <li>Superior technology</li>
                  </ul>
                </div>
              </div>
              <div className='col-lg-6 col-md-6 col-sm-12 wee-store' data-aos="fade-left">
                <div className='right-img'>
                  <img src={Group4321} />
                </div>
              </div>
            </div>
            <div className='row Sales-report'>
              <div className='col-lg-6 col-md-6 col-sm-12 features-img-5 wee-store' data-aos="fade-right">
                <div className='right-img'>
                  <img src={Group4} />
                </div>
              </div>
              <div className='col-lg-6 col-md-6 col-sm-12' data-aos="fade-left">
                <div className='left-text'>
                  <h1 className='heading'>Sales report for tracking and auditing</h1>
                  <p className='heading-para'>Track the sales, inventory and cash now using different report generation services provided by Bill Quick access to your critical information makes for foster and better informed decision making. The reporting gives you complete visibility and analysis into every aspect of your business. Access anytime online to manage and track transactional and customer data.</p>
                </div>
              </div>
              <div className='col-lg-6 col-md-6 col-sm-12 feature-img-5 wee-store' data-aos="fade-right">
                <div className='right-img'>
                  <img src={Group4} />
                </div>
              </div>
            </div>
            <div className='row More-informative'>
              <div className='col-lg-6 col-md-6 col-sm-12' data-aos="fade-right">
                <div className='left-text'>
                  <h1 className='heading '>More informative Visual Dashboards</h1>
                  <p className='heading-para'>Excellent visual dashboards to analyse monthly expenses, sales reports for faster and better decision making</p>
                </div>
              </div>
              <div className='col-lg-6 col-md-6 col-sm-12 wee-store' data-aos="fade-left">
                <div className='right-img'>
                  <img src={Group4330} />
                </div>
              </div>
            </div>
            <div className='row More-informative'>
              <div className='col-lg-6 col-md-6 col-sm-12 features-img-6 wee-store' data-aos="fade-left">
                <div className='right-img-second-final'>
                  <img src={Group5318} />
                </div>
              </div>
              <div className='col-lg-6 col-md-6 col-sm-12' data-aos="fade-right">
                <div className='left-text'>
                  <h1 className='heading '>Tax Billing & Inventory</h1>
                  <p className='heading-para'>Create onvoice with GST that comply with goods and service tax law of your country. GST onvoice and bills can be generated online and offline mode. Help to keep your accounts and books updated.</p>
                </div>
              </div>
              <div className='col-lg-6 col-md-6 col-sm-12 feature-img-6 wee-store' data-aos="fade-left">
                <div className='right-img-second-final'>
                  <img src={Group5318} />
                </div>
              </div>
            </div>
            <div className='row More-informative'>

              <div className='col-lg-6 col-md-6 col-sm-12' data-aos="fade-right">
                <div className='left-text'>
                  <h1 className='heading '>Offline Billing</h1>
                  <p className='heading-para'>Continue selling even when offline. your POS works both online and offline. No internet dependency.</p>
                </div>
              </div>
              <div className='col-lg-6 col-md-6 col-sm-12 wee-store' data-aos="fade-left">
                <div className='right-img-final'>
                  <img src={Group5320} />
                </div>
              </div>

            </div>
          </div>
        </div>
        {/* Additional Features End */}

        {/* WEB View Start */}
        <div className='web-view'>
          <h1 data-aos="fade-up">WEB View</h1>
          <h6 data-aos="fade-down">Ecommerce platform view Pos system view</h6>
          <div className='container'>
            <div className='lap-view' data-aos="fade-up">
              <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img class="d-block w-100" src={WebBulk} alt="First slide" />
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100" src={WebDashboard} alt="Second slide" />
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100" src={WebMultiStores} alt="Third slide" />
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100" src={WebPOS} alt="Third slide" />
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100" src={WebProducts} alt="Third slide" />
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100" src={WebSubPlans} alt="Third slide" />
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100" src={WebWallet} alt="Third slide" />
                  </div>
                </div>
                <div className='arrow'>
                  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                  </a>
                  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* WEB View End*/}

        {/* APP View Start*/}
        <div className='app-view' id='AppView'>
          <h1 data-aos="fade-up">APP View</h1>
          <h6 data-aos="fade-down">Ecommerce platform view Pos system view</h6>
          <div className='container'>

            <OwlCarousel
              className='owl-theme'
              responsive={{
                0: {
                  items: '1',
                },
                576: {
                  items: '2',
                },
                768: {
                  items: '2',
                },
                1000: {
                  items: '3',
                }
              }}
              autoPlay={true}
              autoplayHoverPause={true}
              nav={true}
              center
              dots={false}
              autoplaySpeed={1000}
              loop
            >
              <div className='item'>
                <div>
                  <div className='mobile-view-1' data-aos="fade-left">
                    <div class="image-wrap">
                      <a>
                        <img src={MobileCart} className="card-img-top" alt="..." />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='item'>
                <div>
                  <div className='mobile-view-1' data-aos="fade-up">
                    <div class="image-wrap">
                      <a>
                        <img src={MobileDashboard} className="card-img-top" alt="..." />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='item'>
                <div>
                  <div className='mobile-view-1' data-aos="fade-right">
                    <div class="image-wrap">
                      <a>
                        <img src={MobileInvoice} className="card-img-top" alt="..." />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='item'>
                <div>
                  <div className='mobile-view-1' data-aos="fade-left">
                    <div class="image-wrap">
                      <a>
                        <img src={MobileMultiStores} className="card-img-top" alt="..." />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='item'>
                <div>
                  <div className='mobile-view-1' data-aos="fade-up">
                    <div class="image-wrap">
                      <a>
                        <img src={MobilePOS} className="card-img-top" alt="..." />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='item'>
                <div>
                  <div className='mobile-view-1' data-aos="fade-right">
                    <div class="image-wrap">
                      <a>
                        <img src={MobileProducts} className="card-img-top" alt="..." />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='item'>
                <div>
                  <div className='mobile-view-1' data-aos="fade-left">
                    <div class="image-wrap">
                      <a>
                        <img src={MobileCart} className="card-img-top" alt="..." />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
        {/* APP View End*/}
        {/* Pricing Start */}
        <div className='pricing' id='Pricing'>
          <h1 data-aos="fade-down">Pricing</h1>
          <div className='container'>
            <div className='seprate'>
              <div className='row'>
                <div className='col-lg-4 col-md-6 col-sm-12' data-aos="fade-left" id="free">
                  <div className='price-card'>
                    <button className='button-1'>FREE</button>
                    <p>For high performing teams who are<br /> looking to break the norms</p>
                    <h1>FREE  <br /><span>/Free</span></h1>

                    <div className='pricing-adjustment-1'>
                      <div className='border-bottom border-1'><span class="goldTick"></span>Tax Billing and invoice </div>
                      <div className='border-bottom border-2'><span class="goldTick"></span>Tack Payments</div>
                      <div className='border-bottom border-3'><span class="goldTick"></span>Accounting & taxes</div>
                      <div className='border-bottom border-4'><span class="goldTick"></span>Visual Business Metrics Dashboard </div>

                      <div className='border-bottom border-7'><span class="goldTick"></span>POS device compatabiliy </div>
                      <div className='border-bottom border-5'><span><img src={Wrong} /></span>Marketing Watch </div>
                      <div className='border-bottom border-6'><span><img src={Wrong} /></span>Analytics & insights</div>
                      <div className='border-bottom border-7'><span><img src={Wrong} /></span>Billing advertisements</div>
                      <div className='border-bottom border-7'><span><img src={Wrong} /></span>Store QR</div>
                      <div className='borders-bottom border-8'><span><img src={Wrong} /></span>Whatsapp Integration</div>
                    </div>

                    <button className='button-2 button-4'>Sign Up For Free Now</button>
                  </div>
                </div>

                <div className='col-lg-4 col-md-6 col-sm-12' data-aos="fade-left">
                  <div className='price-card'>
                    <button className='button-1'>Weegetz Gold</button>
                    <p>For businessess, enterprise domain<br />registrars and registries.</p>
                    <h1>₹100.00<span className='offer-dolor'></span> <br /><span>/Standard Plan</span></h1>

                    <div className='pricing-adjustment-2'>
                      <div className='border-bottom border-1'><span class="goldTick"></span>Tax Billing and invoice </div>
                      <div className='border-bottom border-2'><span class="goldTick"></span>Tack Payments</div>
                      <div className='border-bottom border-3'><span class="goldTick"></span>Accounting & taxes</div>
                      <div className='border-bottom border-4'><span class="goldTick"></span>Visual Business Metrics Dashboard </div>
                      <div className='border-bottom border-5'><span class="goldTick"></span>Marketing Watch </div>

                      <div className='border-bottom border-7'><span class="goldTick"></span>Store QR</div>
                      <div className='border-bottom border-7'><span class="goldTick"></span>Whatsapp Integration</div>
                      <div className='border-bottom border-7'><span class="goldTick"></span>POS device compatabiliy </div>
                      <div className='border-bottom border-6'><span><img src={Wrong} /></span>Analytics & insights</div>
                      <div className='borders-bottom border-8'><span><img src={Wrong} /></span>Billing advertisements</div>
                    </div>
                    <button className='button-2 button-3'>Contact Us</button>
                  </div>
                </div>
                <div className='col-lg-4  col-md-6 col-sm-12' data-aos="fade-right">
                  <div className='price-card'>
                    <button className='button-1'>Weegetz Preminum</button>
                    <p>For businessess, enterprise domain<br />registrars and registries.</p>
                    <h1> ₹150.00 <span className='offer-dolor'></span> <br /><span>/Unlimited Plan </span></h1>
                    <div className='pricing-adjustment-3'>
                      <div className='border-bottom border-1'><span class="goldTick"></span>Tax Billing and invoice </div>
                      <div className='border-bottom border-2'><span class="goldTick"></span>Tack Payments</div>
                      <div className='border-bottom border-3'><span class="goldTick"></span>Accounting & taxes</div>
                      <div className='border-bottom border-4'><span class="goldTick"></span>Visual Business Metrics Dashboard </div>
                      <div className='border-bottom border-5'><span class="goldTick"></span>Marketing Watch </div>
                      <div className='border-bottom border-6'><span class="goldTick"></span>Analytics & insights</div>
                      <div className='border-bottom border-7'><span class="goldTick"></span>Billing advertisements</div>
                      <div className='border-bottom border-7'><span class="goldTick"></span>Store QR</div>
                      <div className='border-bottom border-7'><span class="goldTick"></span>Whatsapp Integration</div>
                      <div className='borders-bottom border-8'><span class="goldTick"></span>POS device compatabiliy </div>
                    </div>
                    <button className='button-2 button-3'>Contact Us</button>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Pricing End */}
        {/* About Us Start */}
        <div className='AboutUs'>
          <h1 data-aos="fade-right">About Us</h1>
          <div className='container-fluid'>
            <div className='content'>
              <p data-aos="fade-left"> Weegetz is a large e-commerce SaaS solution
                for merchants at every stage of growth, from
                small<br /> startups, to mid-market businesses, to
                large enterprises. We focus on enable
                merchants to build, <br />innovate and grow their
                business online .</p>
            </div>
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
          </div>
        </div>
        {/* About Us End*/}
        {/* Contact Us Start */}
        <div className='Contact-Us' id='Contact'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-lg-6 col-md-6 col-sm-12 contact-left-content' data-aos="fade-right">
                <div className='left-content'>
                  <h1>Contact Us</h1>
                  <p>Forms again? I know. Unfortunately, we haven't found a better way. So,<br /> kindly bear with us and fill up this form on the right.</p>
                  <p>We typically respond within 24 hours of you filling up the form.</p>
                  {/* <div className='spreedsheet'>
                    <div className='first'>
                      <h1><span className="material-symbols-outlined">
                        check_circle
                      </span>Say NO to spreadsheets!</h1>
                      <p>Why run with spreadsheets when you can have fully<br /> native products built in minutes?</p>
                    </div>
                    <div className='first'>
                      <h1><span className="material-symbols-outlined">
                        check_circle
                      </span>Integrate with anything</h1>
                      <p>Why run with spreadsheets when you can have fully<br /> native products built ZORP connects with your existing technology<br /> stack seamlessly. Easily connect with APIs, again without code.in<br /> minutes?</p>
                    </div>
                    <div className='first'>
                      <h1><span className="material-symbols-outlined">
                        check_circle
                      </span>One platform, many use cases</h1>
                      <p>Be it sales or operations or warehousing or remote teams, you can<br /> build apps for any use case using ZORP. And yes, in minutes.</p>
                    </div>
                  </div> */}
                </div>
              </div>
              <div className='col-lg-6 col-md-6 col-sm-12' data-aos="fade-left">
                <div className='right-form'>
                  <div className='google-inputs'>
                    <div className="google-input">
                     
                      <form>
                        <input type="text" name="username" placeholder='Full Name'/>
                      </form>
                    </div>
                  </div>
                  <div className='google-inputs'>
                    <div className="google-input">
                    
                      <form>
                        <input type="text" name="Companyname" placeholder=' Company Name'/>
                      </form>
                    </div>
                  </div>
                  <div className='google-inputs'>
                    <div className="google-input">
                     
                      <form>
                        <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required placeholder='Phone Number'/>
                      </form>
                    </div>
                  </div>
                  <div className='google-inputs'>
                    <div className="google-input">
                      <label htmlFor="template-input">
                        Role of Company
                      </label>
                      <form>
                        <input type="text" name="Role of Company" />
                      </form>
                    </div>
                  </div>
                  <div className='google-inputs'>
                    <div className="google-input">
                      <label htmlFor="template-input">
                        Message
                      </label>
                      <form>
                        <textarea rows="8" cols="44"></textarea>
                      </form>
                    </div>
                  </div>
                  <button className='form-btn'>Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Contact Us End */}
        {/* FAQ Start */}
        <div className='Frequently-Asked-Questions'>
            <div className='row'>
              <div className='col-lg-6 col-sm-12' data-aos="fade-right">
                <div className='left-img'>
                  <img src={Group6} />
                </div>
              </div>
              <div className='col-lg-6 col-sm-12' data-aos="fade-left">
                <div className='right-colapse'>
                  <div className="container">
                    <h1 data-aos="fade-down">Frequently Asked<br /> Questions</h1>
                    <section className="accordion-wrapper" data-accordion>
                      <details>
                        <summary>
                          How can i add customers to the store?
                          <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
                          </svg>
                        </summary>
                        <div className="details-info">
                          <p>By using add customer tab you can able to create a customer for your store. By providing all the general information.</p>
                        </div>
                      </details>
                      <details>
                        <summary>
                          How can I able to print invoices?
                          <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
                          </svg>
                        </summary>
                        <div className="details-info">
                          <p>We recommend thermal printers to print the invoice. While purchasing the printer size of the bill should be taken care and that can either connect with UBS or bluetooth. For your convenience bluetooth devices are preferred while connection with mobile app In our web store we have multiple variates of thermal printers you can also buy form there.</p>
                        </div>
                      </details>
                      <details>
                        <summary>
                          How can I activate the subscription?
                          <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
                          </svg>
                        </summary>
                        <div className="details-info">
                          <p>You can navigate to the subscription page there you will get all the details regarding your current/previos subscription and you can able to see a subscription form from where you can activate the subscription.</p>
                        </div>
                      </details>
                      <details>
                        <summary>
                          How can contact for an demo?
                          <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
                          </svg>
                        </summary>
                        <div className="details-info">
                          <p>Contact from the contactUs page and we will provide a demo and onboard you as a merchant.</p>
                        </div>
                      </details>
                      <details>
                        <summary>
                          How Weegetz PoS work?
                          <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
                          </svg>
                        </summary>
                        <div className="details-info">
                          <p>IBill is an all in one billing software. Here users can create invoices by adding products and customers on their own and can also manage the inventory. With a simple user interface.</p>
                        </div>
                      </details>
                      <details>
                        <summary>
                          How can I purchase Weeget and integrate it with my business?
                          <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
                          </svg>
                        </summary>
                        <div className="details-info">
                          <p>For Mobile: Download the Weegetz mobile application form the PlayStore for android or AppStore for ios

                            For Desktop: Navigate to the Weegetz application through the browser<br />

                            1. Once downloaded, you can purchase the subscription plan according to your store needs and just follow the on-board process.<br />

                            2. After onboarding successfully then you can use Weegetz application</p>
                        </div>
                      </details>
                      <details>
                        <summary>
                          How can I add products to the store?
                          <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
                          </svg>
                        </summary>
                        <div className="details-info">
                          <p>The products can be added by using two ways<br />

                            1. CSV file for bulk uploading<br />

                            2. By adding products manually to the store.</p>
                        </div>
                      </details>
                      <details>
                        <summary>
                          How can I add multiple products at the same time?
                          <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
                          </svg>
                        </summary>
                        <div className="details-info">
                          <p>Download sample CSV file from the add product section and fill the CSV with the appropriate value and then upload the CSV file to the application then it will automatically add the products to the store.</p>
                        </div>
                      </details>
                    </section>
                  </div>
                </div>
              </div>
            </div>
        </div>
        {/* FAQ End */}
      </div>
      <Footer />
    </div >
  );
}

export default Home;
