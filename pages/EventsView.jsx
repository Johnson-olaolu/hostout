import Document from "next/document";
import {
  faAngleRight,
  faBell,
  faClock,
  faHome,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../components/Footer";
import Experience from "../components/experience";
import Picture from "../components/Pictures";
import RelatedPictures from "../components/RelatedPictures";
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
            <div className="About-title1">
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
        <div className="About-title2">
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
            <div className="About-title3">
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
        <div className="About-title4">
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
{/*-----events section end-----*/}
<div id="About-event">
        <h2>Pictures </h2>
      </div>
      <div className="input-picture-container">
        
      <Picture />
      <Picture />
      <Picture />
      <Picture />
      </div>

      <div id="About-event">
        <h2>Register </h2>
      </div>

     <div className="events-container-alert">
     <div className="events-alert">
      <p>Note that a sum of ???1200 will be charged as registration fee and this will cover for the event hosting fee and a cup of Parfait.</p>
      </div>
     </div>

     <div className="form-input">
     <form action=''>
        <div className='form-event-title'>
        <h3>Full name here *</h3>
        <input type='text'  placeholder='Enter Full name here *'/>
        </div>
        <div className='persons-input-info'>
          <h3>How many of you are coming?</h3>
          <div id='persons-container'>
          <input type="radio" name="persons" value="" /> <span>I???m coming Alone</span>
          <input type="radio" name="persons" value="" />  <span>No, I???m booking for a friend</span>
          <input type="radio" name="persons" value="" />  <span> No, We are</span>
          </div>
        </div>
        <div>
          <h3> You would love to take something, what??? is that? (optional)</h3>
          <div className='input-act-menu'>
          <input type="text" placeholder="Select menu"/> 
          <select id="act-items">
          <option value="">per  go / quantity </option>
           <option value="">CODM</option>
           <option value="">DEFCON</option>
           <option value="">Dancing </option>
           </select> 
             <span>Amount</span>
               <input type="text" placeholder="enter price"/>
                <button >Add</button>

          </div>
        </div>
        <div>
          <h3>Not just food, choose Games&activities and have fun (optional)</h3>
          <div className='input-act-menu'>
          <input type="text" placeholder="select  activity here"/> 
          <select id="act-items">
          <option value="">per  go / quantity </option>
           <option value="">CODM</option>
           <option value="">DEFCON</option>
           <option value="">Dancing </option>
           </select> 
             <span>Amount</span>
               <input type="text" placeholder="enter price"/>
                <button >Add</button>

          </div>
        </div>

        <div className='persons-input-info'>
          <h3>Updating you about the event is important, how do you want to get update?</h3>
          <div id='persons-container'>
          <input type="radio" name="persons" value="" /> <span>Email Address</span>
          <input type="radio" name="persons" value="" />  <span>Phone number</span>
          <input type="radio" name="persons" value="" />  <span> Both</span>
          </div>
        </div>

        <div className='event-location-description'>
          <h3>That???s not all, you may want to ask the host for a special request *</h3>
          <textarea rows="5"  type='text' placeholder='Enter your description here'/>
        </div>
        <div className="events-total-pay">
          <span>Total</span>
          <div className="events-total-amount">
            <p>Amount(???)</p>
            <p id="Amount">1000</p>
          </div>
        </div>
        <div id='input-event-btn'>
        <button className='input-event-button' >Proceed to Payments</button>
        </div>
      </form>  
     </div>
     <div id="About-event">
        <h2>Related Hangouts </h2>
      </div>
     <div className=" card-container">
    <RelatedPictures />
    <RelatedPictures />
    <RelatedPictures />
    <RelatedPictures />
     </div>
     <div id="About-event">
        <h2>Peoples Experience </h2>
      </div>
      <Experience />
      <Footer />
    </div>
  );
}
export default EventsView;
