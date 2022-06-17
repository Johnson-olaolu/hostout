import   NextPage  from 'next';
import Tag from './Tag';
import Image from 'next/image'
 

function Picture (){
    return(
        <div className='input-picture'>
          <Image 
              src='/A.jpg'
              width={250}
              height={250}
          />  
        </div>
    );
}

export default Picture