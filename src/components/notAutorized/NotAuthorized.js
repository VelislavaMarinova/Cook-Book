import { Link } from 'react-router-dom'

const NotAuthorized = () => {
  return (
    <div>
      please <Link to="/login">login</Link> in irder to see this page
    </div>
  )
}

export default NotAuthorized
