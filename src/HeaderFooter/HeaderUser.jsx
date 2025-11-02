import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

function HeaderUser() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Centers', path: '/centers' },
    { name: 'About', path: '/about' },
    { name: 'Contact Us', path: '/contactus' },
    { name: 'Sign In', path: '/signin', isButton: true },
  ];

  return (
    <header className="bg-white w-full shadow-md">
      <div className="flex justify-between items-center px-6 md:px-12 py-4 max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-blue-600">CarWash Pro</h1>

        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `${link.isButton
                  ? 'bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700'
                  : 'text-lg hover:text-blue-600'
                } ${isActive && !link.isButton ? 'text-blue-600 font-semibold' : ''}`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} size="lg" />
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="md:hidden bg-white shadow-lg px-6 py-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `${link.isButton
                  ? 'bg-blue-600 text-white px-6 py-2 rounded-full text-center hover:bg-blue-700'
                  : 'text-lg hover:text-blue-600'
                } ${isActive && !link.isButton ? 'text-blue-600 font-semibold' : ''}`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}

export default HeaderUser;
