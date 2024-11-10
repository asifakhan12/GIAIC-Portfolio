'use client'
import { useState } from 'react';
import Link from 'next/link';
import { CiMenuBurger } from 'react-icons/ci';
import { ImCross } from 'react-icons/im';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="wrapper">
      <div className="logo">Asifa Khan</div>

      {/* Main navigation for large screens */}
      <ul className="mainlist">
        <li><Link href="/" className="link home">Home</Link></li>
        <li><Link href="/about" className="link">About</Link></li>
        <li><Link href="/contact" className="link">Contact Us</Link></li>
      </ul>

      {/* Sidebar for mobile screens */}
      <ul className={`sideBar ${isSidebarOpen ? 'open' : ''}`}>
        <li><Link href="/" className="link" onClick={toggleSidebar}>Home</Link></li>
        <li><Link href="/about" className="link" onClick={toggleSidebar}>About</Link></li>
        <li><Link href="/contact" className="link" onClick={toggleSidebar}>Contact Us</Link></li>
      </ul>

      {/* Toggle between Hamburger and Cross icons */}
      <div className="menuBar" onClick={toggleSidebar}>
        {isSidebarOpen ? <ImCross className="cross" /> : <CiMenuBurger className="menuIcon" />}
      </div>
    </div>
  );
};

export default Navbar;