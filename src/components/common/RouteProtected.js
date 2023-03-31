import NotAuthorized from '../notAutorized/NotAuthorized'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'

const RouteProtected = ({ children }) => {
  const {isAuthenticated} = useContext(AuthContext)

  if(!isAuthenticated){

    return <NotAuthorized />
  }

 

  return children
}

export default RouteProtected
