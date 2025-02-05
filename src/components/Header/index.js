import {Link, withRouter} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {BsFillBriefcaseFill} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'
import Cookies from 'js-cookie'

import './index.css'

const Header = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
  return (
    <nav className='navbar'>
      <div className='nav-container'>
        <Link to='/'>
          <img
            src='https://assets.ccbp.in/frontend/react-js/logo-img.png'
            alt='website logo'
            className='home-website-logo'
          />
        </Link>
        <ul className='nav-items'>
          <li>
            <Link to='/' className='nav-link-lg'>
              Home
            </Link>
            <Link to='/' className='nav-link-sm'>
              <AiFillHome className='small-header-icons' />
            </Link>
          </li>
          <li>
            <Link to='/jobs' className='nav-link-lg'>
              Jobs
            </Link>
            <Link to='/jobs' className='nav-link-sm'>
              <BsFillBriefcaseFill className='small-header-icons' />
            </Link>
          </li>
          <li className='logout-btn-list-item-small' onClick={onClickLogout}>
            <FiLogOut className='logout-icon-sm' aria-label='logout' />
          </li>
          <li>
            <button
              className='logout-button-lg'
              onClick={onClickLogout}
              type='button'
              data-testid='logout'
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default withRouter(Header)
