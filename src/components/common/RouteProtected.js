import NotAuthorized from '../notAutorized/NotAuthorized'
import { useAuthContext } from '../../contexts/AuthContext'

const RouteProtected = ({ children }) => {
  const {isAuthenticated} = useAuthContext()

  if(!isAuthenticated){

    return <NotAuthorized />
  }

 

  return children
}

export default RouteProtected
