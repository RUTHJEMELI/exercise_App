import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../utils/logo.avif';

const Header = () => {
  const profile = localStorage.getItem('photoURL');
  const name = localStorage.getItem('name');

  return (
    <div className=' sticky top-0 z-50 h-20 mx-4 flex justify-between items-center bg-slate-200 p-4'>
      <div className='flex items-center'>
       <Link to='/'>
         <img src={logo} alt='logo' className='w-16 h-16 rounded-full mr-2' />
       </Link> 
        <h3 className='font-bold'>F-Fitness</h3>
      </div>
      <div>
        <ul className='flex justify-evenly items-center space-x-4 font-bold'>
          <Link to='/'><li className='underline hover:text-slate-400'>Home</li></Link>
          <Link to='/about'><li className='underline hover-text-slate-400'>About Us</li></Link>
          <Link to = '/contact'><li className='underline hover:text-slate-400'>Contact Us</li></Link>
          {name ? (
            <li>
              <div className='flex  gap-2 items-center'>
                <img src={profile} className='w-10 rounded-full' alt='profile' />
                <button className='shadow-md p-2' onClick={() => {
                  localStorage.clear();
                }}>Logout</button>
              </div>
            </li>
          ) : (
            <Link to='/login'><li className='underline hover:text-slate-400'>User, login</li></Link>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Header;
