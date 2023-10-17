import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AiOutlineFacebook, AiOutlineTwitter } from 'react-icons/ai';
import {signInWithGoogle} from '../utils/firebase'


const Login = () => {

  return (
    <div className='mx-auto w-1/2 text-center p-4 '>
      <h2 className='font-bold'>Login with</h2>
          <div className='flex flex-col justify-center items-center gap-6 '>
     <button onClick={signInWithGoogle} className='shadow-md  py-4 hover:bg-slate-100 flex flex-row gap-2 rounded items-center px-4 w-36'><FcGoogle /> <p>Google</p></button>
     <button className='shadow-md  py-4 hover:bg-slate-100 flex flex-row gap-2 rounded items-center px-4 w-36'><AiOutlineFacebook  className='text-blue-400'/> <p>Facebook</p></button> 
     <button className='shadow-md py-4 hover:bg-slate-100 flex flex-row gap-2 rounded items-center px-4 w-36'><AiOutlineTwitter  className='text-blue-400'/> <p>Twitter</p></button> 
     </div>
    </div> 
  );
}

export default Login;
