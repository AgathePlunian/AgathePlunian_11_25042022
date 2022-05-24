import fullStar from '../assets/img/full-star.svg'
import emptyStar from '../assets/img/empty-star.svg'
import PropTypes from 'prop-types'

function Rating({rating}) {
 
    const totalStars = 5;
    let nbEmptyStars = totalStars - rating;

    let fullStars = [];
    for (let i = 0 ; i < rating ; i++) {
        fullStars.push(<li key={i} className='item-star'><img alt='full star' src={fullStar}/></li>)
    }

    let emptyStars = [];
    for (let i = 0 ; i < nbEmptyStars; i++) {
        emptyStars.push(<li key={i} className='item-star'><img alt="empty star" src={emptyStar}/></li>)
    }

    return (
        <ul className="rating-list">
            {fullStars}
            {emptyStars}
        </ul>
    )
  }

 Rating.propTypes = {
    rating:  PropTypes.string,
  }
   
  
  export default Rating