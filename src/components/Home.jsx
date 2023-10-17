import React from 'react';
import {Link} from 'react-router-dom'
import homeLogo from '../utils/home.jpg';

const Home = () => {
    let greetings
    const date = new Date()
    const time = date.getHours()
    if (time < 12) {
        greetings = 'Good Morning'
    }
    else if (time < 18) {
        greetings = 'Good Afternoon'
    } else {
        greetings = 'Good Evening'
    }
    const name = localStorage.getItem('name')
    return (
        <div className='mx-4 my-0 bg-slate-300 flex p-10'>
            <div className='flex justify-center items-center border-white border-4 rounded-lg bg-white mr-5'>
                <div className='text-center pr-4'>
                    <h3>{greetings}, {name ? name : 'user'}</h3>
                    <p>Success isn't given, it's earned. On the track, on the field, in the gym. With blood, sweat, and the occasional tear</p>
                    <h2>Be sweaty today! Smile tomorrow!!</h2>
                   <Link to='/exercises'><button className='bg-red-600 text-white px-2 py-2 rounded mt-4'>Get Started</button></Link>
                </div>
            </div>
            <div className=' rounded-lg'>
                <img src={homeLogo} alt='homeLogo' className='rounded-lg'/> 
            </div>
        </div>
    );
}

export default Home;
