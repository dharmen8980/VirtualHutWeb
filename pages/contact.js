import React from 'react'

function Contact() {
  return (
        <>
        
        <div className='border-8 border-sky-400 max-w-screen-md mx-auto my-20'>
        <div className='flex flex-col justify-center items-center relative top-2'>
        <button className = "font-extrabold w-50 text-transparent text-8xl bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-white my-5 hover:from-blue-100 hover:to-green-500">
            Contact Us</button>
        </div>
          <div>
            <p className='text-center text-white text-2xl relative top-3'>Are you interested to know about our VR technology? <br/>
            Please fill out this form and we will contact you as soon as possible </p>
          </div>
          <div className='px-10 my-7 relative top-3'>
            <label className='text-white'>Your email</label>
            <input type="email" id="email" placeholder='your@email' className='w-full px-2' />
          </div>
          <div className='px-10'>
            <label className='text-white'>Subject</label>
            <input type="text" id="subject" placeholder='your subject' className='w-full px-2' />
          </div>
          <div className='px-10 my-5'>
            <label className='text-white'>Your message</label>
            <textarea type="textarea" id="message" placeholder='your message' className='block w-full px-2' />
          </div>
          <div className="my-2 mx-9">
          <button className='bg-green-500 px-4 py-1.5 rounded-lg text-white'>Send message</button>
          </div>
      </div>

        </>
        )
}

export default Contact