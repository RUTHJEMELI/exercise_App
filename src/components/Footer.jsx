import React from 'react'
import {AiOutlineFacebook, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineTwitter} from 'react-icons/ai'
import { CgMail } from 'react-icons/cg'
import {Link} from 'react-router-dom'
const Footer = () => {
  return (
      <div className=' p-2 bg-slate-200 flex justify-between mx-4 mt-0'>
          <div className='flex justify-evenly space-x-4 '>
              <div>
                <h3 className='font-bold'>Services</h3>
                  <ul className='underline'>
                      <li>Personal training in landing</li>
                      <li>Online Coaching</li>
                      <li>Nutrition Coaching</li>
                      <li>One on One Coaching</li>
                      <li>Mindset Course</li>
                </ul>
              </div>
              <div>
                  <h3 className='font-bold'>Company</h3>
                  <ul className='underline'>
                     <Link to = '/about'> <li>About</li></Link>
                      <li>Blog</li>
                      <li>Privacy Policy</li>
                      <li>Terms and Conditions</li>
                  </ul>
              </div>
              <div>
                  <h3 className='font-bold'>Support</h3>
                  <ul className='underline'>
                     <Link to='/contact'> <li>contact</li></Link>
                  </ul>
              </div>
              
          </div>
          <div>
              <div>
              <p>82 maner Road,</p>
              <p>landing,</p>
              <p>West Sussex,</p>
              <p>BN15 OHD</p>
              <p>United Kingdom</p>
              </div>
              <div className='flex justify-evenly'>
               <Link to = 'https://www.facebook.com'>  <AiOutlineFacebook /></Link>
               <Link to = 'https://www.instagram.com'>   <AiOutlineInstagram /></Link>
               <Link to = 'https://www.linkedin.com'><AiOutlineLinkedin /></Link>
               <Link to = 'https://www.gmail.com'><CgMail /></Link>
               <Link to = 'https://www.x.com'><AiOutlineTwitter /></Link>
              </div>
          </div>
          

    </div>
  )
}

export default Footer