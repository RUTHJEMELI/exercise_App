import React, { useState } from 'react'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {
    const [email, setEmail] = useState('')
    const [comment, setComment] = useState('')

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleComment = (e) => {
        setComment(e.target.value)

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = 
        {
            email,
            comment,
        }
        console.log(formData)
        
        setTimeout(() => {
            toast.success('message sent sucessfully!', { position: 'top-center' }) 
            setEmail('')
            setComment('')
        },1000)
    }
  return (
      <div className='my-2 rounded'>
          <form onSubmit={handleSubmit } className='w-1/2 mx-auto shadow-lg p-4 flex flex-col gap-6'>
              <h2>Get In Touch</h2>
              <p>Our team will get back to you</p>
              <input type='text'value={email}onChange={handleEmail} placeholder='Email address*'className='border-black border-2 rounded p-4' />
              <input type='textarea' value={comment} onChange={handleComment} placeholder='What can we help you with*' className='border-black border-2 rounded p-4' style={{minHeight:'100px', maxHeight:'200px', resize:'vertical'}} />
              <button className='bg-red-500 text-white font-semibold w-full rounded p-4 '>Send</button>
              
          </form>
    </div>
  )
}

export default Contact