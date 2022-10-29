import React from 'react'

const Footer = () => {
  return (
    <>

        <div className='absolute bottom-0 text-white shadow-[0px_45px_90px_20px_rgba(0,0,0,0.3)] w-full'>
            <div className='bg-sky-600'>
            <div className='py-16 grid grid-cols-4 xs:grid-cols-4 md:grid-cols-8 gap-8 text-left max-w-full relative mx-auto '>
                <div className='col-span-2 text-white text-2xl px-10 my-auto font-semibold mx-auto'>
                <p>Virtual Hut</p>
                </div>
                <div className='col-span-2 mx-auto'>
                <p className='underline text-gray-300'>About Virtual Hut</p>
                <div className='my-2'>
                <p>
                <button className='my-1'>
                    Home
                </button>
                </p>
                <p>
                <button className='my-1'>
                    Progresbutton
                </button>
                </p>
                <p>
                <button className='my-1'>
                    Progress
                </button>
                </p>
                <p>
                <button className='my-1'>
                    FAQs
                </button>
                </p>
                </div>
                </div>
                <div className='col-span-2 mx-auto'>
                <p className='underline text-gray-300'>Our Product</p>
                <div className='my-2'>
                <p>
                <button className='my-1'>
                    Physics Lab
                </button>
                </p>
                <p>
                <button className='my-1'>
                    Chemistry Lab
                </button>
                </p>
                <p>
                <button className='my-1'>
                    Biology Lab
                </button>
                </p>
                <p>
                <button className='my-1'>
                    Office Rooms
                </button>
                </p>
                </div>
                </div>
                <div className='col-span-2 mx-auto'>
                <p className='underline text-gray-300'>Contact</p>
                <div className='my-2'>
                <p>
                <button className='my-1'>
                    Dharmendra Sharma
                </button>
                <p>(Project Manager)</p>
                </p>
                <p>
                <button className='my-1'>
                    (504)-401-6830
                </button>
                </p>
                <p>
                <button className='my-1'>
                    dharmen8980@gmail.com
                </button>
                </p>
                </div>
                </div>
            </div>
            </div>
        </div>

    </>
  )
}

export default Footer