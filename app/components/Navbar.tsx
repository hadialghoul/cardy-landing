'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="bg-gray-300 shadow-md sticky top-0 z-50  py-4 text-black">
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="Logo" width={40} height={40} />
          <span className="text-xl font-semibold text-red-800 dark:text-white">Cardy</span>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8 text-gray-700 dark:text-gray-200 font-medium">
          <li>
            <Link href="#" className="hover:text-red-600 transition-colors">Features</Link>
          </li>
          <li>
            <Link href="#" className="hover:text-red-600 transition-colors">How It Works</Link>
          </li>
          <li>
            <Link href="#" className="hover:text-red-600 transition-colors">Downloads Now</Link>
          </li>
        </ul>

        {/* Button - desktop only */}
        <div className="hidden md:block">
          <Link href="#">
            <Button variant="contained" color="error">Downloads</Button>
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <IconButton onClick={() => setMenuOpen(!menuOpen)} color="inherit">
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4">
          <ul className="flex flex-col gap-4 text-gray-700 dark:text-gray-200 font-medium">
            <li>
              <Link href="#" onClick={() => setMenuOpen(false)} className="hover:text-red-600">Features</Link>
            </li>
            <li>
              <Link href="#" onClick={() => setMenuOpen(false)} className="hover:text-red-600">How It Works</Link>
            </li>
            <li>
              <Link href="#" onClick={() => setMenuOpen(false)} className="hover:text-red-600">Downloads</Link>
            </li>
            <li>
              <Link href="#" onClick={() => setMenuOpen(false)}>
                <Button fullWidth variant="contained" color="error">Download Now</Button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
