import './Campus.css';
import gallery1 from '../Img1/gallery-1.png';
import gallery2 from '../Img1/gallery-2.png';
import gallery3 from '../Img1/gallery-3.png';
import gallery4 from '../Img1/gallery-4.png';




function Campus(){

    return(
        <>
        <section id='Campus'>
        <div className='gallery'>
             <p className='col'>GALLERY</p>
            <h1 className='col'>Campus Photos</h1>
            <div id='campus'>
                 <img className='campus' src={gallery1} alt='Program1'/>
                 <img className='campus' src={gallery2} alt='Program2'/>
                 <img className='campus' src={gallery3} alt='Program3'/>
                 <img className='campus' src={gallery4} alt='Program3'/>
            </div>
            <button className="see-btn">See more here →</button>
        </div>
        </section>
        </>
    );
}

export default Campus;





