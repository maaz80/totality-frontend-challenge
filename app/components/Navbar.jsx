'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useCart } from '../context/CartContext';
import { HiOutlineMenuAlt3, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [cartCount, setCartCount] = useState(0);
  const { cart } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [username, setUsername] = useState('');

  // Total Cart Count 
  const totalCount = cart.reduce((count, item) => count + item.quantity, 0);

  useEffect(() => {
    setCartCount(totalCount);
  }, [totalCount]); 

  // Checking Logged In or Not 
  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    const isLoggedIn = localStorage.getItem('LoggedIn') === 'true';
    if (isLoggedIn && storedUsername) {
      setUsername(storedUsername);
    } else {
      setUsername('');
    }
  },[username]);

  // Toggle function for the hamburger menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Logout Handle 
  const handleLogout = () => {
    localStorage.setItem('LoggedIn', 'false');
    localStorage.removeItem('username'); 
    setUsername(''); 
  };

  return (
    <nav className="p-4 z-50 top-0 fixed w-[100%] backdrop-blur-md bg-black/10 poppins-regular">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-gray-900 text-xl font-bold">
          {/* Checking login to display userName  */}
          {username ? (
            <div className="text-gray-900 text-lg md:text-xl font-semibold">
              Welcome, {username}
            </div>
          ) : (
            <div>MyProps</div>
          )}
        </h1>

        {/* Hamburger Icon for mobile view */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <HiX size={30} className="text-gray-900" />
            ) : (
              <HiOutlineMenuAlt3 size={30} className="text-gray-900" />
            )}
          </button>
        </div>

        {/* Links for desktop */}
        <div className="hidden lg:flex space-x-4">
          
          {username ? (
            <div className="text-gray-900 hover:text-blue-600 cursor-pointer" onClick={handleLogout}>
              Logout
            </div>
          ) : (
            <div className="text-gray-900 hover:text-blue-600 cursor-pointer">
              <Link href="/login">Login</Link>
            </div>
          )}

          <Link href="/" className="text-gray-900 hover:text-blue-600">Home</Link>
          <div className="relative">
            <div className="absolute bottom-0 left-0 w-3 h-3 text-white bg-red-700 rounded-full text-center text-[9px]">
              {cartCount}
            </div>
            <Link href="/cart" className="text-gray-900 hover:text-blue-600">Cart</Link>
          </div>
          <Link href="/favorite" className="text-gray-900 hover:text-blue-600">Favorite</Link>
          <Link href="/Props" className="text-gray-900 hover:text-blue-600">Properties</Link>
          <Link href="/contact" className="text-gray-900 hover:text-blue-600">Contact</Link>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-16 right-0 w-[40%] rounded-bl-xl bg-white shadow-lg">
            <div className="flex flex-col items-start py-4 space-y-4 pl-4">
              <Link href="/" className="text-gray-900 hover:text-blue-600" onClick={toggleMobileMenu}>Home</Link>
              <div className="relative">
                <div className="absolute bottom-0 left-0 w-3 h-3 text-white bg-red-700 rounded-full text-center text-[9px]">
                  {cartCount}
                </div>
                <Link href="/cart" className="text-gray-900 hover:text-blue-600" onClick={toggleMobileMenu}>Cart</Link>
              </div>
              <Link href="/favorite" className="text-gray-900 hover:text-blue-600" onClick={toggleMobileMenu}>Favorite</Link>
              <Link href="/Props" className="text-gray-900 hover:text-blue-600" onClick={toggleMobileMenu}>Properties</Link>
              <Link href="/contact" className="text-gray-900 hover:text-blue-600" onClick={toggleMobileMenu}>Contact</Link>
              {username ? (
                <div className="text-gray-900 hover:text-blue-600 cursor-pointer" onClick={handleLogout}>
                  Logout
                </div>
              ) : (
                <div className="text-gray-900 hover:text-blue-600 cursor-pointer">
                  <Link href="/login">Login</Link>
                </div>
              )}

            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
