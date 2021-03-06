import Document from 'next/document';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "../components/Cards";
import Nav from "../components/NavBar"
import Experience from "../components/experience";
import Footer from "../components/Footer";

function EventsInput (){
  return(
    <div>
    <Nav />
    <div className='form-input'>
      <form action=''>
        <div className='form-event-title'>
        <h3>Enter Event*</h3>
        <input type='text'  placeholder='Enter Event Title'/>
        </div>
       { /*-- the price and catergory is flexed---*/}
       <div className='input-container'>
       <div className='form-event-category'>
        <h3>Select a catergory</h3>
        <select id="items">
          <option value="">select a catergory </option>
           <option value="">Tech</option>
           <option value="">Linux</option>
           <option value="">loop</option>
       </select>
        </div>
        <div className='form-event-price'>
        <h3>Event registration price</h3>
        <input type='text' placeholder='Amount' />
        </div>
       </div>
        <div className='form-event-description'>
      <h3>Events description</h3>
        <textarea rows="5"  type='text' placeholder='Enter your description here'/>
        </div>
        <div className='person-container-info'>
          <h3>Add tags to an event</h3>
          <div className='person-name-info'>
            <input type="text" placeholder="Enter menu name"/>
            <button >Add</button>
          </div>
        </div>
        <div className='persons-input-info'>
          <h3>How many persons per account</h3>
          <div id='persons-container'>
          <input type="radio" name="persons" value="" /> <span>The Account holder</span>
          <input type="radio" name="persons" value="" />  <span>The holder and a friend</span>
          <input type="radio" name="persons" value="" />  <span> More than three people</span>
          </div>
        </div>
        <div>
          <h3>Add the availabe list of food menu</h3>
          <div className='input-food-menu'>
          <input type="text" placeholder="enter item here"/> 
          <select id="food-items">
          <option value="">per quantity </option>
           <option value="">rice</option>
           <option value="">fish</option>
           <option value="">swallow</option>
           </select> 
             <span>Amount</span>
               <input type="text" placeholder="enter price"/>
                <button >Add</button>

          </div>
        </div>



        <div>
          <h3>Add the availabe lists of activities</h3>
          <div className='input-act-menu'>
          <input type="text" placeholder="enter activity here"/> 
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
        <div className='event-location-description'>
          <h3>Event Location</h3>
          <textarea rows="5"  type='text' placeholder='Enter your description here'/>
        </div>

        <div className='input-events-image'>
          <h3>event images / flyer</h3>
          <input type="file"  placeholder='insert flyer / image'/> <span>Attach image files</span>
        </div>
        <div id='input-event-btn'>
        <button className='input-event-button' >Create Event</button>
        </div>

      </form>  
    </div>


<Footer />
   </div>
  );

}

export default EventsInput;