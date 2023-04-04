import React, {useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { styles } from '../styles'
import { navLinks } from '../constants'
import { logo, menu, close } from '../assets'

const Navbar = () => {
  const [first, setFirst] = useState("");

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center fixed top-0 z-20 bg-primary}`}>
        <div className="w-full flex justify-between items-center max-w-7x1 mx-auto">
            <Link
              to="/"
              className="flex items-center gap-2"
              onClick={() => {
                setActive("");
                window.scrollTo(0,0); //Scroll to top of page
              }}
              >
                <img src={logo} alt="logo" className="w-2 h-2 object-contain" />
            </Link>
        </div>
    </nav>
  )
}

export default Navbar