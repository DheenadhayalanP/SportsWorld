import './Contact.css';
import mail from '../Img1/mail-icon.png';
import phone from '../Img1/phone-icon.png';
import location from '../Img1/location-icon.png';



function Contact(){

    return(
        <>
        <section id='Contact'>
        <div className='contact'>
            <p id='pad' className='col'>CONTACT US</p>
            <h1 className='col'>Get In Touch</h1>
        </div>

        <div id='get'>
            <div>
            <h2 className='col'>Send us a message</h2>
            <p>Feel free to reach out through contact form or find our contact <br />
            information below. Your feedback, questions, and suggestions <br />
            are important to us as we strive to provide exceptional service <br />
            to our university community.</p>
            <div id='social'>
                <img className='social' src={mail} alt='mail'/>
                <p id='con'>Contact@GreatStack.com</p>
            </div>
            <div id='social'>
                <img className='social' src={phone} alt='phone'/>
                <p id='con'>+1123-456-7890</p>
            </div>
            <div id='social'>
                <img className='social' src={location} alt='location'/>
                <p id='con'>77 Massachusetts Ave, Cambridge <br />
                MA 02139, United States</p>
            </div>
        </div>

            <div id='submit'>
                <form>
                <label>Your Name:</label>
                <input type="text" name="name" placeholder='Enetr Your Number' required />  <br />
                <label>Phone Number:</label>
                <input type="number" name="phone" placeholder='Enetr Your Number' required/> <br />
                <label>Write your message here:</label>
                <textarea name="message" rows="6" placeholder='Enetr Your Message' required></textarea><br />
                <button type='submit' className='btn'> SUBMIT NOW →</button>
                </form>
                <span></span>
            </div>
        </div>
                <div>
                    <footer id='foot'>
                        <div><h4>&copy; 2025 Edusity. All rights reserved.</h4> </div>
                        <div> <h4>Terms of Services &nbsp; &nbsp; Privacy Policy</h4> </div>
                    </footer>
                </div>

        </section>
        </>
    );
}
export default Contact;