import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import hero_img from '../assets/hero.png';
import Profile from './Profile';
import Header from './Header';

function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true); // Added loading state
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setIsLoggedIn(true);
    }
    setLoading(false); // Set loading to false after checking user
  }, []);

  const handleLogin = (userData) => {
    setIsLoggedIn(true);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('user');
  };

  const handleStartQuiz = () => {
    navigate('/select-quiz');
  };

  if (loading) { // Show loading while checking login status
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="flex flex-col items-center">
          <div className="h-10 bg-yellow-300 rounded w-1/2 mb-4 animate-pulse"></div>
          <div className="h-6 bg-yellow-300 rounded w-3/4 mb-2 animate-pulse"></div>
          <div className="h-6 bg-yellow-300 rounded w-1/4 animate-pulse"></div>
        </div>
      </div>
    );
  }

  if (!isLoggedIn) {
    return <Profile onLogin={handleLogin} />;
  }

  return (
    <div className=' bg-[#081027] h-screen'>
      <Header isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
      <div className='bg-slate-900 bg-blend-overlay bg-auto h-[60vh] bg-center bg-repeat ' style={{ backgroundImage: `url(${hero_img})` }}>
        <h1 className='text-center pt-10  text-4xl text-yellow-300 pb-6 '> <span className='text-2xl'>Challenge</span> <br /> Your Mind</h1>
        <p className='text-center text-lg  text-wrap text-blue-200 mx-4 '    >Thousands of quizzes across every topic—start your journey now.</p>

        <div className='pt-4 md:pt-2 flex justify-center'>
          <button 
            onClick={handleStartQuiz}
            className="bg-yellow-300 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400"
          >
            Start Quiz
          </button>
        </div>
      </div>
      <div className='bg-[#081027] py-4 '>
        <h2 className='text-center text-2xl mb-4 text-yellow-300  '>Topics to Explore</h2>
        <div className='text-center grid grid-cols-2 md:grid-cols-2 gap-2 mx-4 my-3'>


          <div className='bg-[#0e1c44] rounded-md p-2 text-blue-200'  >
            <span>Science</span>
            <span>🔬</span>
          </div>
          <div className='bg-[#0e1c44] rounded-md p-2 text-blue-200'>
            <span>History</span>
            <span>🏛️</span>
          </div>

          <div className='bg-[#0e1c44] rounded-md p-2 text-blue-200'>
            <span>Math</span>
            <span>➗</span>
          </div>
          <div className='bg-[#0e1c44] rounded-md p-2 text-blue-200'>
            <span>Literature</span>
            <span>📖</span>
          </div>
          <div className='bg-[#0e1c44] rounded-md p-2 text-blue-200'>
            <span>Geography</span>
            <span>🌍</span>
          </div>
          <div className='bg-[rgb(14,28,68)] rounded-md p-2 text-blue-200'>
            <span>Zoology </span>
            <span>🐾</span>
          </div>
        </div>

      </div>
      <div>


      </div>
      <footer className='bottom-0 left-0 right-0  p-4 bg-[rgb(14,28,68)] 
      text-blue-200 text-sm'>

        <div className=' text-center flex justify-center pb-2 gap-4 mx-4'>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
        <p className='text-center mx-4'>© 2024 JudgeFun. Developed by <a
          target='_blank' href="https://github.com/mhanik00" className='text-yellow-300 hover:underline'>Mh Anik</a>.</p>
      </footer>
    </div>
  );
}

Home.propTypes = {
  onStart: PropTypes.func.isRequired,
}

export default Home;
