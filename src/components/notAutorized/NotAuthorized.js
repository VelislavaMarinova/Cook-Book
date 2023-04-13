import { Link } from 'react-router-dom'

const NotAuthorized = () => {
  return (
    <div>
      please <Link to="/login">login</Link> in order to see this page
    </div>
  )
}

export default NotAuthorized
