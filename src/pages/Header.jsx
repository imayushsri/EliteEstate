import { FaHome, FaInfoCircle, FaPhoneAlt, FaSearch, FaSignInAlt } from 'react-icons/fa';
import { TiUserAdd } from 'react-icons/ti';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='bg-light shadow position-fixed top-0 w-100 z-3'>
      <nav className='navbar navbar-expand-sm navbar-expand-md navbar-light bg-light container px-4'>
        <Link className='navbar-brand fw-bold fs-5 d-flex align-items-center text-shadow-md' to='/'>
          <span className='text-color'>Elite</span>
          <span className='text-dark'>Estate</span>
        </Link>

        {/* Toggler for collapse on small screens */}
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse justify-content-between' id='navbarSupportedContent'>
          {/* Left Links */}
          <ul className='navbar-nav me-auto mb-2 mb-sm-0'>
            <li className='nav-item'>
              <Link className='nav-link text-secondary d-flex align-items-center gap-1 nav-text' to='/'><FaHome /> Home</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link text-secondary d-flex align-items-center gap-1 nav-text' to='/about'><FaInfoCircle /> About</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link text-secondary d-flex align-items-center gap-1 nav-text' to='/contact'><FaPhoneAlt /> Contact</Link>
            </li>
          </ul>

          {/* Search Form */}
          <form className='d-flex bg-white px-3 py-2 rounded align-items-center me-sm-3 my-2 my-sm-0 nav-search'>
            <input
              type='text'
              className='form-control border-0 bg-transparent p-0 me-2'
              placeholder='Search...'
              style={{ minWidth: '100px' }}
            />
            <button type='submit' className='btn p-0'>
              <FaSearch className='text-secondary' />
            </button>
          </form>

          {/* Sign In Link */}
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <Link className='nav-link text-secondary text-nowrap d-flex align-items-center gap-1 nav-text' to='/signin'><FaSignInAlt /> Sign in</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link text-secondary text-nowrap d-flex align-items-center gap-1 nav-text' to='/signup'><TiUserAdd className='fs-5'/> Sign up</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
