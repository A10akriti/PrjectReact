import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ShoppingCartIcon } from '@heroicons/react/solid';
import { BiLogoTailwindCss } from 'react-icons/bi';

function Header() {
  return (
    <>
      <nav className="flex justify-between items-center py-4 px-8 bg-white shadow-md">
        <Link to="/" className="flex items-center">
          <img src="phb-logo.png" alt="PHB Logo" className="h-8 w-8 mr-2" />
          <span className="text-lg font-bold">PHB</span>
        </Link>
        <ul className="flex justify-between items-center">
          <li>
            <NavLink to="/shop" activeClassName="text-blue-500" className="text-gray-600 hover:text-blue-500 transition duration-300 ease-in-out">
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink to="/fruits" activeClassName="text-blue-500" className="text-gray-600 hover:text-blue-500 transition duration-300 ease-in-out">
              Fruits
            </NavLink>
          </li>
          <li>
            <NavLink to="/veg" activeClassName="text-blue-500" className="text-gray-600 hover:text-blue-500 transition duration-300 ease-in-out">
              Veg
            </NavLink>
          </li>
          <li>
            <NavLink to="/beverage" activeClassName="text-blue-500" className="text-gray-600 hover:text-blue-500 transition duration-300 ease-in-out">
              Beverage
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" activeClassName="text-blue-500" className="text-gray-600 hover:text-blue-500 transition duration-300 ease-in-out">
              Log in
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart" activeClassName="text-blue-500" className="text-gray-600 hover:text-blue-500 transition duration-300 ease-in-out">
              <ShoppingCartIcon className="h-5 w-5 mr-2" />
              Cart
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;