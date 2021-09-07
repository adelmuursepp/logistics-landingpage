import React from 'react'
import './HomePageContent.css'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShip } from '@fortawesome/free-solid-svg-icons'
import profilePhoto from '../../static/images/webcafs-profile.png'

export default () => (
  <div>
    <div className="row mb-5 pb-5">
      <div className="col-lg-8">
        <p>
          30 years of experience producing bespoke routines to handle such needs
          quarantees that you are in good hands.
        </p>
        <p>
          All in one responsive web application in The Cloud, accessible from
          Phone, iPad and Desktop, clear and intuitive design makes for minimal
          learning time and maximum productivity.
        </p>
      </div>
      <div className="col-lg-4 taCenter">
        <FontAwesomeIcon icon={faShip} /> Ikoonid <i class="fas fa-ship"></i>
      </div>
    </div>
    <div className="row mt-5 pt-5 d-flex justify-content-between">
      <div className="col-lg-6 px-4">
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
      <div className="col-lg-6">
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
    </div>
    <div className="row mt-5 pt-5">
      <div className="col-lg-6 quote-box">
        <p className="quote-text text-green mb-1">
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
      <div className="col-lg-6 clients-box"></div>
    </div>
  </div>
)
