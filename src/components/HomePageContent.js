import React from 'react'
import './HomePageContent.css'
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
      <div className="col-lg-7 mb-2 intro-text">
        <bold>
          30 years of experience producing bespoke routines to handle such needs
          quarantees that you are in good hands.
        </bold>
        <bold>
          All in one responsive web application in The Cloud, accessible from
          Phone, iPad and Desktop, clear and intuitive design makes for minimal
          learning time and maximum productivity.
        </bold>
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
      <div className="col-lg-5 pr-5 mr-5 mb-5">
        <h2 className="title-green title-section">FOR WHO?</h2>
        <p>
          CAFS is good for any company – whether a start-up or a multinational.
          It handles all types of transportation: Air, Road, Sea and Courier.
        </p>
        <p>
          For the courier and freight companies CAFS enables to book, handle and
          document collection and delivery information.
        </p>
        <p>
          For the receiver/buyer it enables to follow the whole process
          providing detailed status updates.
        </p>
      </div>

      <div className="col-lg-6 pl-5 ml-5 mb-5">
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
        <div className="pl-4 ml-4">
          <Link to="/product" className="link-small">
            Read more
          </Link>
        </div>
      </div>
    </div>
    <div className="row mt-5 pt-5 d-flex justify-content-between">
      <div className="col-lg-5 quote-box">
        <p className="quote-text text-red mb-5 mb-md-1">
          "Do your clients have special requirements, the data they give you, or
          the data they want from you ? We have 30 years experience of producing
          bespoke routines to handle such needs. Each user can design their own
          reports, store them and run them again at any time outputing to
          e-mail, Excel or Word hassle free.” (many other systems don ́t do that
          so well)."
        </p>
        <div className="d-flex justify-content-between">
          <p className="quote-person text-red mt-5">
            Robet Parsons, MD of WebCafs
          </p>

          <img
            src={profilePhoto}
            alt="ProfilePhoto"
            className="ProfilePhoto mt-0"
          />
        </div>
      </div>

      <div className="col-lg-6 video-box mt-5 mt-lg-1">
        <div>
          <p className="quote-person text-red">SOME OF OUR CLIENTS</p>
          <div className="d-flex row justify-content-between mt-5">
            <div className=" col-lg-3 col-md-5 d-flex justify-content-center my-3">
              <img
                src={avonLogo}
                alt="avonLogo"
                className="mt-0 client-logo "
              />
            </div>
            <div className="col-lg-3 col-md-5 d-flex justify-content-center my-3">
              <img src={phseLogo} alt="phseLogo" className="mt-0 client-logo" />
            </div>
            <div className=" col-lg-3 col-md-5 d-flex justify-content-center my-3">
              <img
                src={corporateLogo}
                alt="corporateLogo"
                className="mt-0 client-logo"
              />
            </div>
            <div className="col-lg-3 col-md-5 d-flex justify-content-center my-3">
              <img
                src={westhouseLogo}
                alt="westhouseLogo"
                className="mt-0 client-logo "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row mt-5 pt-5 d-flex justify-content-between">
      <div className="col-lg-5">
        <img src={demo1} alt="Demo 1" className="mt-0 demo-photo" />
      </div>
      <div className="col-lg-6 quote-box mt-5 mt-lg-0 ">
        <h3 className="title-red title-section">
          SEE HOW IT WORKS (2 min video tour)
        </h3>
      </div>
    </div>
    <div className="row mt-5 pt-5 d-flex justify-content-between">
      <div className="col-lg-5">
        <img src={demo2} alt="Demo 2" className="mt-0 demo-photo" />
      </div>
      <div className="col-lg-5 mt-5 mt-lg-0 ">
        <img src={demo3} alt="Demo 3" className="mt-0 demo-photo" />
      </div>
    </div>
  </div>
)
