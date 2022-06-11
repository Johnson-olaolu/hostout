import Document from 'next/document';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "../components/Cards";
import Nav from "../components/NavBar"
import Experience from "../components/experience";
import Footer from "../components/Footer";

function EventPage (){
    return (
        <div>
        <Nav />
        <div id='menu'>
            <ul>
                <li><a href='#'>All</a></li>
                <li><a href='#'>Trending</a></li>
                <li><a href='#'>Hangouts</a></li>
                <li><a href='#'>Celebrity</a></li>
                <li><a href='#'>Entertainment</a></li>
                <li><a href='#'>Tech</a></li>
                <li><a href='#'>Company</a></li>
                <li><a href='#'>Society</a></li>
                <li className='li-drop li-left'><a href='#'>by Days</a></li>
                <li className='li-drop'> <a href='#'>by price</a></li>
                <li > </li>
            </ul>
            <a id='event-li-button' href='#'>Filter</a>
        </div>
        <div className='card-container'>
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
        <div className='card-container'>
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
        <div className='card-container'>
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
        <div className='card-container'>
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
        <div className='load-more'>
            <a>Load More</a>
        </div>




<Experience />
<Footer/>
        </div>
    );
}
export default EventPage;