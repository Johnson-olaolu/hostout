import   NextPage  from 'next';
import Image from 'next/image';


function Experience (){
    return(
        <div className='experience-card'>
       <div className='ex-top'>
       <div className='ex-img'>
           <Image 
               src='/public/Capture.PNG'
               alt=' weeee'
               height='200px'
               width='200px'
           />
       </div>
        <div className='ex-name'><h3>Gabriel Afolayan</h3></div>
        <div className='ex-icons'></div>
       </div>
       <div className='ex-detail'>
           <p>Hostout connects people together (host and hostee) for hangout and events. You can get to attend the event of your choice just by searching or checking events that matches your profile tags.</p>
           <h3>3 months ago</h3>
            </div>

        </div>
    );
}

export  default Experience;