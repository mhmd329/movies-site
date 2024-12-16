import React from 'react'
import { Link , NavLink } from 'react-router-dom'
 const Header = () => {
  return (
    <div className='header'>
        <div className='container'>
            <div className='logo'>
               
                <Link to='/'>movies</Link>
            </div>
            <ul className='nav-links'>
                <li>
                   <NavLink to='/'>watch list</NavLink>
                    </li>
                <li>
                   <NavLink to='/watched'>watched</NavLink>
                    </li>
                <li>
                  <NavLink to='add'> Add</NavLink>
                    </li>
            </ul>
        </div>
    </div>
  )
}
export default Header