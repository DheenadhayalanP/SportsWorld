import './Program.css'
import p1 from '../Img1/program-1.png';
import p2 from '../Img1/program-2.png';
import p3 from '../Img1/program-3.png';
import pi1 from '../Img1/program-icon-1.png';
import pi2 from '../Img1/program-icon-2.png';
import pi3 from '../Img1/program-icon-3.png';



function Program(){

    return(
        <>
        <section id='ourprogram'>
        <div className='ourprogram'>
            <p className='col'>OUR PROGRAM </p>
            <h1 className='col'>What We Offer</h1>
        <div className="pro">
            <div className='program-box'>
                <img className='base-img' src={p1} alt='Program1' />
                    <div className='hover-overlay'>
                    <img src={pi1} alt='Program Icon 1' />
                    <p>Graduation Degree</p>
                    </div>
            </div>
            <div className='program-box'>
                <img className='base-img' src={p2} alt='Program2' />
                    <div className='hover-overlay'>
                    <img src={pi2} alt='Program Icon 2' />
                    <p>Masters Degree</p>
                    </div>
            </div>
            <div className='program-box'>
                <img className='base-img' src={p3} alt='Program3' />
                    <div className='hover-overlay'>
                    <img src={pi3} alt='Program Icon 3' />
                    <p>Post Graduation</p>
                    </div>
            </div>
        </div>
        </div>
        </section>
        </>
    );
}
export default Program;