import React from 'react'
import Head from 'next/head'


function Progress() {
  setTimeout(function(){globalThis.location='/contact';}, 2000);
  return (
    <div>
      <Head>
        <title>Progress</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div className='flex flex-col justify-center items-center relative top-20'>
        <button className = "font-extrabold w-50 text-transparent text-8xl bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-white my-5 hover:from-blue-100 hover:to-green-500">
            Current Progress</button>
        </div>
        <div className='my-20 py-20 px-8'>
        <img src='./Picture1.png'/>

        </div>
    </div>
  )
}

export default Progress