import './notAuthorized.css'
import { Link } from 'react-router-dom'

const NotAuthorized = () => {
  return (
    <div className='notAuthorized'>
      Please <Link className='notAuthorized__link' to="/login">login</Link> in order to see this page!
    </div>
  )
}

export default NotAuthorized
