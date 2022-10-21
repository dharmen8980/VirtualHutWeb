import { Button, Drawer } from 'antd'
import React, { useState } from 'react'

const Header = () => {
    const [open, setOpen] = useState(false);

    const onClose = () => {
        setOpen(false);
    };
    return (
        <nav className="container mx-auto pt-8  flex justify-between lg:gap-12 items-center sticky">
            <h1 className="navbar__logo font-bold text-2xl m-0">Virtual Hut</h1>
            <ul className="navbar__links hidden gap-8 text-sm lg:flex">
                <li>
                    <a href="#" id="active" className="navbar__link text-gray-700 hover:text-blue-100"> Home </a>
                </li>
                <li className="navbar__link">
                    <a href="#" className="navbar__link text-gray-700 hover:text-blue-100"> Progress </a>
                </li>
                <li>
                    <a href="#" className="navbar__link text-gray-700 hover:text-blue-100"> Team </a>
                </li>
                <li>
                    <a href="#" className="navbar__link text-gray-700 hover:text-blue-100"> Contact </a>
                </li>
            </ul>
            <button onClick={() => setOpen(true)} className="block lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 500" className="text-gray-700" height={"24px"} width="24px">
                    <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" color='black' />
                </svg>
            </button>
            <Drawer placement="right" onClose={onClose} open={open}>
                <ul className="navbar__links flex flex-col gap-8 text-sm ">
                    <li>
                        <a href="#" id="active" className="navbar__link text-gray-700 hover:text-blue-100"> Home </a>
                    </li>
                    <li className="navbar__link">
                        <a href="#" className="navbar__link text-gray-700 hover:text-blue-100"> Progress </a>
                    </li>
                    <li>
                        <a href="#" className="navbar__link text-gray-700 hover:text-blue-100"> Team </a>
                    </li>
                    <li>
                        <a href="#" className="navbar__link text-gray-700 hover:text-blue-100"> Contact </a>
                    </li>
                </ul>
            </Drawer>
        </nav >
    )
}

export default Header