import Document from 'next/document';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../components/Footer";
import Experience from "../components/experience";

function EventsView (){
    return(
        <div>
            
            <Experience />
            <Footer />
        </div>
    );
}
export default EventsView;