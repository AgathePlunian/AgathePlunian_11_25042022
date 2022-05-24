import PropTypes from 'prop-types'

function Tag({tags}) {
  return (    
    <ul className="tags-list">  
      {tags.map((tag ,index) => (
        <li className='default-tag' key={index}>
            {tag}
        </li>
      ))}    
    </ul>
  )
}

Tag.propTypes = {
  tags:  PropTypes.array
}
 

export default Tag
