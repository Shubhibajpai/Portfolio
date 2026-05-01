import React,{useState} from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeToggle } from '../../Component/ThemeToggle/theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX} from '@fortawesome/free-solid-svg-icons';
const navClass = ({ isActive }) =>
  [
    'border-b-2 border-transparent pb-0.5 text-gray-900 transition-colors hover:text-purple-600 dark:text-gray-100 dark:hover:text-purple-400',
    isActive ? 'border-purple-600 text-purple-600 dark:border-purple-400 dark:text-purple-400' : '',
  ].join(' ');

const mobileMenuNavClass = ({ isActive }) =>
  [
    'border-b-2 border-transparent pb-0.5 text-zinc-100 transition-colors hover:text-purple-400',
    isActive ? 'border-purple-400 text-purple-300' : '',
  ].join(' ');

const Navbar = () => {
  const[menuOpen, setMenuOpen] = useState(false);

  return (
    <>
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between border-b-2 border-gray-200 bg-white/80 py-3 backdrop-blur-md dark:border-gray-700 dark:bg-black/50">
      <h1 className="ml-6 text-4xl font-bold text-gray-900 dark:text-white">
        Shubhi 
        <span className="hidden sm:inline"> Bajpai</span>
      </h1>
      <div className="flex items-center gap-4 pr-6 sm:pr-20">
        <nav className="hidden sm:flex gap-6">
          <NavLink className={navClass} to="/" end>
            Home
          </NavLink>
          <NavLink className={navClass} to="/about">
            About
          </NavLink>
          <NavLink className={navClass} to="/skills">
            Skills
          </NavLink>
          <NavLink className={navClass} to="/projects">
            Projects
          </NavLink>
        </nav>
        <ThemeToggle />


        <button
        type="button"
        className="sm:hidden text-lg text-gray-900 dark:text-white"
        onClick={()=> setMenuOpen(!menuOpen)}
        aria-expanded={menuOpen}
        aria-label="Open menu"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
    </header>
      {menuOpen && (
        <>
          <button
            type="button"
            className="fixed inset-0 z-90 cursor-default bg-black/50 sm:hidden"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          />
          <div
            className="fixed top-0 right-0 z-100 flex h-dvh w-72 min-w-0 max-w-[60vw] flex-col bg-zinc-950 shadow-2xl sm:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile menu"
          >
            <div className="flex h-16 shrink-0 items-center justify-end border-b border-zinc-800 px-4">
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="rounded p-2 text-zinc-100"
                aria-label="Close menu"
              >
                <FontAwesomeIcon icon={faX} className="text-2xl" />
              </button>
            </div>
            <nav className="flex min-h-0 flex-1 flex-col items-center justify-start gap-6 overflow-y-auto p-6 text-lg">
              <NavLink onClick={() => setMenuOpen(false)} className={mobileMenuNavClass} to="/" end>Home</NavLink>
              <NavLink onClick={() => setMenuOpen(false)} className={mobileMenuNavClass} to="/about">About</NavLink>
              <NavLink onClick={() => setMenuOpen(false)} className={mobileMenuNavClass} to="/skills">Skills</NavLink>
              <NavLink onClick={() => setMenuOpen(false)} className={mobileMenuNavClass} to="/projects">Projects</NavLink>
            </nav>
          </div>
        </>
      )}
    </>
  );
};
export default Navbar