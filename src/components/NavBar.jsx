import React, {PropTypes} from 'react'

const NavBar = ({toggleView}) => (
  <nav className='navbar navbar-inverse navbar-fixed-top'>
     <div className='container-fluid'>
        <div className='navbar-header'>
           <a className='navbar-brand' href='#'>Home Movies</a>
        </div>
        <div className='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>
           <form className='navbar-form navbar-left'>
              <button className='btn btn-default' onClick={toggleView}>Add Movie</button>
           </form>
        </div>
     </div>
  </nav>
)

NavBar.propTypes = {
  toggleView: PropTypes.func.isRequired
}

export default NavBar
