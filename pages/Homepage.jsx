import Document from 'next/document';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "../components/Cards";
import Nav from "../components/NavBar"
import HomeHead from "../components/Homepage-Header";
import HowToHost from "../components/How-to-host";
import HowToAttend from "../components/How-to-Attend";
import About from "../components/About-Hostout";
import Footer from "../components/Footer";
import NavBar from '../components/NavBar';
import Experience from "../components/experience";

function Homepage (){
    return(
        <div className='app'>
        <NavBar />
        <HomeHead />
       <div className='about1'>
       <div id='card-head'><h2>Popular events inspired by people’s browsing</h2></div>
        <div className='card-container'>
          <Card />
          <Card />
          <Card />
          <Card />
         </div>
       
       </div>
         <HowToHost />
         <HowToAttend />
        
        <div id='about-h2'> <h2>All about Hostout</h2></div>
         <div className='about-container'>
         <About />
         <About/>
         <About />
         </div>
       
         <div className='card-container'>
          <Card />
          <Card />
          <Card />
          <Card />
         </div>
         <Experience />
         <Footer />
       </div>
    );
}
export default Homepage;