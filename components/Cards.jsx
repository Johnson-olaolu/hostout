import   NextPage  from 'next';
import Tag from './Tag';
import Image from 'next/image'
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from '@fortawesome/free-regular-svg-icons';



function Card (){
    return(
        
           
           <div className='card'>
              <div className='card-image card-1'>
              <Image src='/A.jpg'
                width={264}
                height={182}
                className="card-img"
              />
          
               </div>
             <div className='card-title'>
               <h2> chilling with wizkid</h2>
               <FontAwesomeIcon icon={faClock} />
               </div>
            <div className="card-details"> <p>you forget to look at your phone</p>
            </div>
            
            <Tag />

             <div className='card-price'>
                 <p>From:</p>
                 <h2>₦3000</h2>
            
             </div>
           </div>
           
        );
}
export default Card;