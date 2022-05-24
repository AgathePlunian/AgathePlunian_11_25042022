import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function Card({title, id, cover}) {
 
  return (    
      <Link to={`/location/${id}`} className='card-location' style={{ 
          backgroundImage: `url("${cover}")` 
        }}>         
          <h2 className="card-title"> {title}</h2>     
      </Link>       
  )
}

Card.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  picture: PropTypes.string,
}
 
  export default Card