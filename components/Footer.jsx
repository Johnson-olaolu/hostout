import   NextPage  from 'next';

function Footer (){

    var currentYear= new Date().getFullYear(); 

    return (
        <footer className='footer-con'>
        <div className='footer-container '>
        <div className='menu foot'>
        <h3>Menu</h3>
            <ul>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>Events</a></li>
                <li><a href='#'>About Us</a></li>
                <li><a href='#'>Privacy and Policy</a></li>
            </ul>
        </div>

        <div className='follow-us foot'>
        <h3>Follow Us</h3>
            <ul>
                <li><a href='#'>Facebook</a></li>
                <li><a href='#'>Twitter</a></li>
                <li><a href='#'>Instagram</a></li>
                <li><a href='#'>Linkedin</a></li>
                <li><a href='#'>Tik Tok</a></li>
            </ul>
        </div>


        <div className='contact-us foot'>
        <h3>Contact Us</h3>
            <ul>
                <li><a href='#'>Whatsapp</a></li>
                <li><a href='#'>support@gmail.com</a></li>
                <li><a href='#'>+234945984</a></li>
                <li><a href='#'>FAQs</a></li>
                <li><a href='#' className='footer-btn'>Contact Us </a></li>
            </ul>
        </div>
        <div className='get-updates foot'>
        <h3>Get Updates </h3>
            
                <p>Subscribe to our new letter ad get updated about future events and activities</p>
                <input type="text" placeholder="input email"></input>
                <form type='submit'>
                <a href='#' className='footer-btn2'>Submit</a>

                </form>

        </div>
        </div>

        <div className='last-footer'>
      <div className='copyright'>
        <p>© {currentYear} Hostout all right reserved</p>

        </div>
        <div className='address'>
        126 Joel Ogunnaike Street,Ikeja GRA, Ikeja,Lagos
        </div>
        </div>






        </footer>

    );
}
export default Footer ;