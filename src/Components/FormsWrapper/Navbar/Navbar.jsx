import { AuthContext } from '../../Context/AuthContext'
import { useContext } from 'react'
import { useLogout } from '../../../hooks/useLogout'
import './Navbar.css'


const Navbar = ({children}) => {
  const {user} = useContext(AuthContext)
  const {logoutUser} = useLogout();
  

function handleLogout(){
  
      logoutUser()
}


  return (
    <>
      <header  id='header'>
                <div className="brandName__container">
                       <h2>
                             My Money
                       </h2>
                    </div>    
                    <div className="user_info">
                           {
                            user &&
                              <>
                                 <h3> {user.displayName}</h3>
                            <button  onClick={handleLogout}>
                                Logout
                            </button>
                              </>
                           }   
                    </div>
      </header>
       {children}
      </>
  )
}

export default Navbar
