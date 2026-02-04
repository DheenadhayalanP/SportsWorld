import './About.css'
import about from '../Img1/about.png';



function About(){

    return(
        <>
        <section id='About'>
            <h1 className='col1'>Our Story & Mission</h1>
            <h1 className='col1'>Shaping the Future Together</h1>
        <div className='about'>
            
            <img className='abimg' src={about} alt='About'/>
            <div id='about'>
             <p className='col'>ABOUT UNIVERSITY</p> 
            <h1 className='col'>Nurturing Tomorrow's <br />Leaders Today</h1>
            <p>Embark on a transformative educational journey with our university's comprehensive <br />
             education programs. Our cutting-edge curriculum is designed to empower students <br />
             with the knowledge, skills, and experiences needed to excel in the dynamic field of <br />
             education. <br /><br />
             
             With a focus on innovation, hands-on learning, and personalized mentorship, our <br />
             programs prepare aspiring educators to make a meaningful impact in classrooms, <br />
             schools, and communities. <br /><br />

             Whether you aspire to become a teacher, administrator, counselor, or educational <br />
             leader, our diverse range of programs offers the perfect pathway to achieve your<br />
             goals and unlock your full potential in shaping the future of education.
             </p>
            </div>
        </div>
        </section>
        </>
    );
}
export default About;
