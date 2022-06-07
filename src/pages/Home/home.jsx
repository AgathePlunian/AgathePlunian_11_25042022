import Gallery from '../../components/Gallery'
import UseFetch from '../../utils/Hooks/useFetch'

function Home() {
  const data = UseFetch('./data.json')
 
  return (
    <div className="main-homepage">
        <div className="container">
            <div className="banner-home">
                <h1 className='home-title'>Chez vous, partout et ailleurs</h1>
            </div>
            
            <div className='gallery-container'>
                <Gallery data={data} />
            </div>
        </div>  
     </div>
  )
}

export default Home;