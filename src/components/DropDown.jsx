import { useState} from 'react'


function DropDown({title , text}) {

  function BlockContent() {
    if (Array.isArray(text)) {
      return (
        <ul className='dropdown-list'>
          {text && text.map((text, index) => (
            <li key={`${text}-${index}`} className='dropdown-item'>{text}</li>
          ))}  
        </ul>
      )
    }

    else {
      return (
        <p>{text}</p>
      )
    }
  }

  

  const [currentState, setCurrent] = useState(false);
   
   // Handle open and close block
  function handleDropDown(e) {
  setCurrent(currentState === false ? true : false); 
 
}
    
    return (
      <div className="dropdown-block">
        <div className={(currentState ? 'dropdown-block-header active' : 'dropdown-block-header')} onClick={handleDropDown} >
            <h2>{title}</h2>
        </div>
        <div className="dropdown-block-body">
          <BlockContent></BlockContent>
        </div>
      </div>
    )
  }

 
  
  export default DropDown