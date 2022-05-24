import '../css/styles.css'
import Card from './Card';
import PropTypes from 'prop-types'


function Gallery({data}) {
  return (
    <ul className="gallery-wrap">
        {data && data.map((location) => (
        <li className="col-card" key={`${location.title}-${location.id}`}>
            <Card className="col-card" 
            title = {location.title} 
            id = {location.id}
            cover = {location.cover}
            />
        </li>
        ))} 
  </ul>
  )
}

Gallery.propTypes = {
  data:  PropTypes.array
}

export default Gallery
