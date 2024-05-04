import React from 'react';

function Navbar(){
    const navigation = [
        { name: 'Home', href: '#' },
        { name: 'About', href: '#' },
        { name: 'Services', href: '#' },
        { name: 'Contact', href: '#' },
    ]
    return (
      <nav className = "sticky top-0 bg-green-100/80 p-4 mb-12 rounded-full shadow-md border-2 border-green-300 px-12">
        SuperPot
      </nav>
    );
};

export default Navbar;