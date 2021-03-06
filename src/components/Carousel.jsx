import { useState} from 'react'
import PropTypes from 'prop-types'

function Carousel({pictures}) {

    const [currentPicture, setCurrentPicture] = useState(1);
    const slidesLength = pictures.length;
    

    // Add buttons if this is more that one picture
    function AddBtn() {   
        if (pictures.length > 1) {
            return (
                <div>
                    <button className="btn prev-btn" onClick={goPrevBtn}></button>
                    <button className="btn next-btn" onClick={goNextBtn}></button>
                </div> )
        }
    }
  
    // Go to previous image on click
    function goPrevBtn()  {
        setCurrentPicture(currentPicture === 1 ? slidesLength - 1 : currentPicture - 1);
        console.log(currentPicture)
    }

    // Go to next image on click
    function goNextBtn() {       
        setCurrentPicture(currentPicture === slidesLength - 1 ? 1 : currentPicture + 1);
    }

    return (
        <div className="carousel-container">
           <AddBtn></AddBtn>
            <ul className="carousel-inner">
                {pictures && pictures.map((picture, index) => (
                    <li 
                        key={index}
                        className={index === currentPicture ? "active carousel-item" : "inactive carousel-item"} 
                    >               
                        <img src={picture} alt={`Carousel ${index}`} />
                        <p className='number-picture'>{currentPicture}/{slidesLength-1}</p>
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