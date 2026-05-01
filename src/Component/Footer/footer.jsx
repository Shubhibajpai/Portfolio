import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
    return(
        <>
        <footer className="flex shrink-0 items-center justify-center gap-4 border-t-2 border-gray-200 pt-4 pb-2 dark:border-gray-800">
            <Link className="text-gray-800 hover:text-purple-600 dark:text-gray-200 dark:hover:text-purple-400" to="/">Home</Link>
            <Link className="text-gray-800 hover:text-purple-600 dark:text-gray-200 dark:hover:text-purple-400" to="/about">About</Link>
            <Link className="text-gray-800 hover:text-purple-600 dark:text-gray-200 dark:hover:text-purple-400" to="/skills">Skills</Link>
            <Link className="text-gray-800 hover:text-purple-600 dark:text-gray-200 dark:hover:text-purple-400" to="/projects">Projects</Link>
        </footer>
          <span className="flex justify-center items-center pb-2 md:text-lg text-[15px] text-gray-500 dark:text-gray-400">&copy; 2026 Shubhi Portfolio. All rights reserved.</span>
          </>
    )
}
export default Footer;