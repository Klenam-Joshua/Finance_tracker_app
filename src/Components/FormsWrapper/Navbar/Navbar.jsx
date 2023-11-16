
import './Navbar.css'


const Navbar = ({children}) => {
  return (
    <>
      <header  id='header'>
                <div className="brandName__container">
                       <h2>
                             My Money
                       </h2>
                    </div>    
                    <div className="user_info">
                                
                    </div>
      </header>
       {children}
      </>
  )
}

export default Navbar
