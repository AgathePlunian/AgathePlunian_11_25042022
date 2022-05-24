import { Link } from 'react-router-dom'
//import '../../css/styles.css'

function Error() {
    
    return (
      <div className="error-page">
        <div className="container">
          <h1 className="error-title">404</h1>
          <p className="error-text">Oups! La page que vous demandez n'existe pas.</p>
          <Link to="/" className="error-link">Retourner sur la page d’accueil</Link>
         </div>
      </div>
    )
  }
  
  export default Error