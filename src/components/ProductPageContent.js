import React from 'react'
import './ProductPageContent.css'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCloudUploadAlt,
  faGlobeAmericas,
  faUsers,
  faPlaneDeparture,
  faShip,
  faTruckMoving
} from '@fortawesome/free-solid-svg-icons'
import profilePhoto from '../../static/images/webcafs-profile.png'
import corporateLogo from '../../static/images/corporate-logo.png'
import avonLogo from '../../static/images/avon-logo.jpeg'
import phseLogo from '../../static/images/phse-logo.png'
import westhouseLogo from '../../static/images/westhouse-logo.jpeg'
import demo1 from '../../static/images/demo-1.png'
import demo2 from '../../static/images/demo-2.png'
import demo3 from '../../static/images/demo-3.png'

export default () => (
  <div>
    <div className="row  pb-5 d-flex justify-content-between">
      <div className="col-lg-7 mb-5">
        <p>
          CAFS is all in one software for air, road, sea and courier transport.
          It can fully handle temperature controlled shipments, multiple
          coolants, temperature monitors and specialized packaging quickly and
          efficiently.
        </p>
        <p className="title-green">
          Get all functionalities with just one payment a month plus 24/7
          support.
        </p>
      </div>
      <div className="col-lg-4 taCenter d-flex justify-content-around mb-5">
        <FontAwesomeIcon icon={faCloudUploadAlt} className="icon-homepage" />
        <FontAwesomeIcon icon={faGlobeAmericas} className="icon-homepage" />
        <FontAwesomeIcon icon={faUsers} className="icon-homepage" />
        <FontAwesomeIcon icon={faPlaneDeparture} className="icon-homepage" />
        <FontAwesomeIcon icon={faShip} className="icon-homepage" />
        <FontAwesomeIcon icon={faTruckMoving} className="icon-homepage" />
      </div>
    </div>
    <div className="row mt-5 pt-5 d-flex justify-content-between">
      <div className="col-lg-5">
        <img src={demo1} alt="Demo 1" className="mt-0 demo-photo" />
      </div>
      <div className="col-lg-6 quote-box d-flex flex-column justify-content-around ">
        <h4 className="mb-5">
          All in one responsive web application in The Cloud, accessible from
          iPhone, iPad and Desktop. Clear intuitive design makes for minimal
          learning time and maximum productivity.
        </h4>
        <div className="mt-5">
          <p className="quote-person text-green mt-5">
            WHICH CLIENTS USE THIS?
          </p>
          <div className="d-flex justify-content-between mt-5">
            <img src={avonLogo} alt="avonLogo" className="mt-0 client-logo" />
            <img src={phseLogo} alt="phseLogo" className="mt-0 client-logo" />
            <img
              src={corporateLogo}
              alt="corporateLogo"
              className="mt-0 client-logo"
            />
            <img
              src={westhouseLogo}
              alt="westhouseLogo"
              className="mt-0 client-logo"
            />
          </div>
        </div>
      </div>
    </div>
    <div className="row mt-5 pt-5 d-flex justify-content-between">
      <div className="col-lg-5 pr-5 mr-5 mb-5">
        <h2 className="title-red title-section">PRODUCT FUNCTIONALITY</h2>
        <ul>
          <li>
            Its clear and intuitive design makes for minimal learning time and
            maximum productivity.
          </li>
          <li>
            Drivers are automatically updated with collections and deliveries.
          </li>
          <li>
            Status updates are sent to Client by automated email whenever an
            event occurs.
          </li>
          <li>All documentation for Air, Sea and Road is available.</li>
          <li>
            Built in Client Website allows easy creation of bookings and veiwing
            of statuses.
          </li>
          <li>
            30 years of experience producing bespoke routines to handle
            emperature controlled shipments, multiple coolants, temperature
            monitors and specialized packaging quickly and efficiently.
          </li>
          <li>Driver App for iPhone and Android.</li>
        </ul>
        <div className="pl-4">
          <Link to="/product" className="link-small">
            Read more
          </Link>
        </div>
      </div>

      <div className="col-lg-6 pl-5 ml-5 mb-5 mt-5 mt-lg-0">
        <h3 className="title-red title-section">
          SEE HOW IT WORKS (2 min video tour)
        </h3>
      </div>
    </div>

    <div className="row mt-5 pt-5 d-flex justify-content-between">
      <div className="col-lg-5">
        <img src={demo1} alt="Demo 1" className="mt-0 demo-photo" />
      </div>
      <div className="col-lg-6 quote-box"></div>
    </div>
    <div className="row mt-5 pt-5 d-flex justify-content-between">
      <div className="col-lg-5">
        <img src={demo2} alt="Demo 2" className="mt-0 demo-photo" />
      </div>
      <div className="col-lg-5 mt-5 mt-lg-0">
        <img src={demo3} alt="Demo 3" className="mt-0 demo-photo" />
      </div>
    </div>
  </div>
)
