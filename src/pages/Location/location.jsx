import UseFetch from '../../utils/Hooks/useFetch';
import { useParams } from 'react-router-dom' 
import Carousel from '../../components/Carousel';
import Tag from '../../components/Tag';
import Rating from '../../components/Rating';
import DropDown from "../../components/DropDown";
import DropDownList from '../../components/DropDownList';


function Location() {
  
    const locationId = useParams().locationId.toString();
    const data = UseFetch('./../data.json');
    
    let locationData = data.filter(location => {
        return location.id === locationId;
    });
   
    return (
        <div className='container'>   
            {locationData.map((location, index) => (
                <div className='location-detail-page' key={index}>
                    <Carousel pictures={location.pictures} ></Carousel> 
                    <div className='location-infos clearfix'>
                        <div className='infos-col-left'>
                            <h1 className='location-detail-title'>{location.title}</h1>
                            <p className='location-detail-location'>{location.location}</p>
                            <div className="tags-container">
                                <Tag tags={location.tags}></Tag>
                            </div>
                        </div>

                        <div className='infos-col-right'>
                            <div className="host-id">
                                <p className="host-name">{location.host.name}</p>
                                <div className="host-picture-container"><img alt="Host" src={`${location.host.picture}`}/></div>
                            </div>
                            <Rating rating={location.rating}></Rating>
                        </div>
                    </div> 

                    <div className='wrap-blocks-container'>
                        <div className='dropdown-block-col'>
                        <DropDown
                            title = "Description"
                            text = {location.description}>       
                        </DropDown>
                        </div>
                        <div className='dropdown-block-col'>
                        <DropDownList
                            title = "Équipements"
                            text = {location.equipments}>       
                        </DropDownList>
                        </div>
                    </div>                
                </div>
            ))}         
        </div>
        
    )
  }
  
  export default Location