import { useState} from 'react'
import PropTypes from 'prop-types'

function Carousel({pictures}) {

    const [current, setCurrent] = useState(0);
    const slidesLength = pictures.length;

    // Add buttons if this is more that one picture
    function AddBtn() {   
        if (pictures.length > 1) {
            return (
                <div>
                    <button className="btn prev-btn" onClick={prevBtn}></button>
                    <button className="btn next-btn" onClick={nextBtn}></button>
                </div> )
        }
    }
  
    // Go to previous image on click
    function prevBtn()  {
        setCurrent(current === 0 ? slidesLength - 1 : current - 1);
    }

    // Go to next image on click
    function nextBtn() {       
        setCurrent(current === slidesLength - 1 ? 0 : current + 1);
    }

    return (
        <div className="carousel-container">
           <AddBtn></AddBtn>
            <ul className="carousel-inner">
                {pictures && pictures.map((picture, index) => (
                    <li 
                        key={index}
                        className={index === current ? "active carousel-item" : "inactive carousel-item"} 
                    >               
                        <img src={`${picture}`} alt={`Carousel ${index}`} />
                    </li>
                ))} 
            </ul>
        </div>
        
    )

  }

  Carousel.propTypes = {
    pictures:  PropTypes.array
  }
   
  
  export default Carousel