import { useState} from 'react'
import PropTypes from 'prop-types'

function DropDownList({title , text}) {
    
    const [currentState, setCurrent] = useState(false);   
  
    // Handle open and close block
    function handleDropDown(e) {
        setCurrent(currentState === false ? true : false); 
       /*  let div = e.target.parentNode.parentNode.parentNode.getBoundingClientRect();
        var bottom = div.y;
        if(currentState === false ) {
            setTimeout(function() { 
              window.scrollTo({  
                  top: bottom,
                  left: 0,
                  behavior: 'smooth'});
            }, 100)
          }   */
    }

  return (
    <div className="dropdown-block">
       <div className={(currentState ? 'dropdown-block-header active' : 'dropdown-block-header')} onClick={handleDropDown} >
            <h2>{title}</h2>
        </div>
        <div className="dropdown-block-body">
            <ul className='dropdown-list'>
                {text && text.map((text, index) => (
                <li key={`${text}-${index}`} className='dropdown-item'>{text}</li>
            ))}  
            </ul>
        </div>
    </div>
  ) 
}


DropDownList.propTypes = {
    title:  PropTypes.string,
    text : PropTypes.array
  }
   

export default DropDownList
