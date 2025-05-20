'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {  IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import Button from '@mui/material/Button';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="bg-blue-300 shadow-md sticky top-0 z-50  py-4 text-white-500">
      <div className="container mx-auto px-6 flex items-center justify-between">
        
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="Logo" width={50} height={50} />
          
        </div>

        <ul className="hidden md:flex items-center gap-8 text-gray-700 dark:text-gray-200 font-medium">
          <li>
            <Link href="#features" className=" transition-colors">Features</Link>
          </li>
          <li>
            <Link href="#how-it-works" className="transition-colors">How It Works</Link>
          </li>
          <li>
            <Link href="#downoladboth" className="transition-colors">Downloads Now</Link>
          </li>
        </ul>


        <div className="hidden md:block">
          <Link href="#downoladboth">
           <Button
              variant="contained"
              fullWidth
              disableElevation
              disableRipple
              className="!bg-gray-300 !text-white hover:!bg-gray-400 !shadow-none"
              >
                Download Now
              </Button>
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
              <Link href="#features" onClick={() => setMenuOpen(false)}>Features</Link>
            </li>
            <li>
              <Link href="#how-it-works" onClick={() => setMenuOpen(false)}>How It Works</Link>
            </li>
            <li>
              <Link href="#downoladboth" onClick={() => setMenuOpen(false)} >Downloads</Link>
            </li>
            <li>
              <Link href="#downoladboth" onClick={() => setMenuOpen(false)}>
                 <Button
              variant="contained"
              fullWidth
              disableElevation
              disableRipple
              className="!bg-gray-300 !text-white hover:!bg-gray-400 !shadow-none"
              >
                Download Now
              </Button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
