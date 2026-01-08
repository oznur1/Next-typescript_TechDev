import React from 'react'
import Link from 'next/link'
import Button from '../../Button/page'

const Navbar = () => {
  return (
    <header className="w-full border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <Link 
          href="/" 
          className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition"
        >
          TechDev
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
          <Link href="/" className="hover:text-blue-600 transition">Home</Link>
          <Link href="/features" className="hover:text-blue-600 transition">Features</Link>
          <Link href="/services" className="hover:text-blue-600 transition">Services</Link>
          <Link href="/reviews" className="hover:text-blue-600 transition">Reviews</Link>
          <Link href="/team" className="hover:text-blue-600 transition">Team</Link>
          <Link href="/pricing" className="hover:text-blue-600 transition">Pricing</Link>
          <Link href="/contact" className="hover:text-blue-600 transition">Contact</Link>
        </nav>

        {/* Action Button */}
        <div className="hidden md:block">
         <Button  text="Login" variant="primary" />
        </div>
      </div>
    </header>
  )
}

export default Navbar
