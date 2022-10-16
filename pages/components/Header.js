import React from 'react'

const Header = () => {
    return (
        <nav className="navbar pt-8 pl-32 flex gap-12 items-center sticky">
            <h1 className="navbar__logo font-bold text-2xl">Virtual Hut</h1>
            <ul className="navbar__links flex gap-8 text-sm">
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
        </nav>
    )
}

export default Header