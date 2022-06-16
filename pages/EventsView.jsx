import Document from "next/document";
import {
  faAngleRight,
  faBell,
  faHome,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../components/Footer";
import Experience from "../components/experience";
import Image from "next/image";

function EventsView() {
  return (
    <div>
      <div className="nv-bar">
        <div className="nv-form">
          <input placeholder="Search events" />
          <div className="nv-search">
            <a href="#">
              <FontAwesomeIcon icon={faSearch} />
            </a>
          </div>
        </div>

        <ul className="ul-li">
          <li id="angle-down">
            <a>
              <FontAwesomeIcon icon={faAngleRight} />
            </a>
          </li>
          <li>
            <div className="nv-img">
              <Image src="/avatar.jpeg" width={50} height={50} />
            </div>
          </li>
          <li>
            <a>
              <FontAwesomeIcon icon={faBell} />
            </a>
          </li>
          <li>
            <a href="#" className="nav-btn">
              Host an Event
            </a>
          </li>
          <li>
            <a href="#" className="nv-option">
              Hangouts
            </a>
          </li>
          <li>
            <a href="#" className="nv-option">
              Trending
            </a>
          </li>
        </ul>
      </div>

      {/*-----events page header------*/}
      <div className="flexbx-container">
        <div className="flexbx-1 flexbx-item">
          <h1>Chilling with wizkid at Oniru Beach</h1>
          <p>
            Host or Register an event and hangout, meet new people, have fun and
            enjoy every bit of your time.
          </p>
          <div className="hp-btn">
            <a href="#" className="flexbx-1-btn">
              Explore events
            </a>
            <a href="#" className="flexbx-1-btn2">
              Learn more
            </a>
          </div>
        </div>
        <div className="flexbx-2"></div>
        <div></div>
      </div>

      <div id="About-event">
        <h2>About Event </h2>
      </div>

      {/*-----events page header end------*/}

      {/*-----events section start-----*/}
      <div className="About-Events-container">
        <div className="About-description about-1st">
          < div className="About-top">
            <div className="About-image"></div>
            <div className="About-title">
              <h3>Description</h3>
            </div>
          </div>
          <div className="About-details">
            <p>
              Hostout connects people together (host and hostee) for hangout and
              events. You can get to attend the event of your choice just by
              searching or checking events that matches your profile tags.
              Hostout connects people together (host and hostee) for hangout and
              events. You can get to attend the event of your choice just by
              searching or checking events that matches your profile tags.
            </p>
          </div>
        </div>
        <div className="About-Food-menu about-1st">
       <div className="About-top">
       <div className="About-image"></div>
        <div className="About-title">
              <h3>Description</h3>
            </div>
       </div>

       <div className="About-details">
            <p>
              Hostout connects people together (host and hostee) for hangout and
              events. You can get to attend the event of your choice just by
              searching or checking events that matches your profile tags.
              Hostout connects people together (host and hostee) for hangout and
              events. You can get to attend the event of your choice just by
              searching or checking events that matches your profile tags.
            </p>
          </div>
        </div>
</div>
       
        <div className="Host-flexbox">
           <div className="About-host-container">
          <div className="About-host-img"></div>
          <div className="About-host-details">
            <p>Host</p>
            <h3>Anna</h3>
          </div>
        </div>
        </div>


   <div className="About-Events-container">
        <div className="About-description about-1st">
          < div className="About-top">
            <div className="About-image"></div>
            <div className="About-title">
              <h3>Description</h3>
            </div>
          </div>
          <div className="About-details">
            <p>
              Hostout connects people together (host and hostee) for hangout and
              events. You can get to attend the event of your choice just by
              searching or checking events that matches your profile tags.
              Hostout connects people together (host and hostee) for hangout and
              events. You can get to attend the event of your choice just by
              searching or checking events that matches your profile tags.
            </p>
          </div>
        </div>
        <div className="About-Food-menu about-1st">
       <div className="About-top">
       <div className="About-image"></div>
        <div className="About-title">
              <h3>Description</h3>
            </div>
       </div>

       <div className="About-details">
            <p>
              Hostout connects people together (host and hostee) for hangout and
              events. You can get to attend the event of your choice just by
              searching or checking events that matches your profile tags.
              Hostout connects people together (host and hostee) for hangout and
              events. You can get to attend the event of your choice just by
              searching or checking events that matches your profile tags.
            </p>
          </div>
        </div>
</div>
      

      <Experience />
      <Footer />
    </div>
  );
}
export default EventsView;
