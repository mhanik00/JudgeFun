import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Header({ isLoggedIn, handleLogout }) {
  return (
    <header className='flex justify-between items-center p-4 bg-[#0e1c44] relative'>
      <h1 className='flex text-xl md:text-2xl items-center font-bold
     text-yellow-300 '>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mr-1">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
        </svg>
        JudgeFun
      </h1>
      <nav className='flex flex-col md:flex-row items-center gap-4'>
        <div>
          <button className='md:hidden flex absolute  top-5  right-4' onClick={() => document.getElementById('mobile-nav').classList.toggle('hidden')}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 text-yellow-300 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
          <div id='mobile-nav' className='flex flex-col items-center gap-4 md:flex-row justify-center
           md:mx-4  mx-8 md:block hidden text-sm md:text-lg'>
            {isLoggedIn && (
              <>
              <div className='flex absolute top-5 right-12 items-center  '>
              <Link to="/profile" className=' rounded-md text-yellow-300'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="
                size-6 md:size-8 p-1 rounded-md">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>

                </Link>
               
               
                <button onClick={handleLogout} className='text-yellow-300 rounded-md'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 md:size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
</svg>

                </button>
              </div>
               
              </>
            )}
            {!isLoggedIn && (
              <Link to="/" className='text-yellow-300 mx-2 px-4 py-1 md:px-5 md:py-1 rounded-md'>Login</Link>
            )}
          </div>
        </div>
        
      </nav>
    </header>
  );
}

Header.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  handleLogout: PropTypes.func.isRequired,
};

export default Header;
