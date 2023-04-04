import React, {useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { styles } from '../styles'
import { navLinks } from '../constants'
import { logo, menu, close } from '../assets'

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

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
                <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
                  <p 
                    className="text-white text-[18px] font-bold cursor-pointer flex mr-12 "
                     >Matthew &nbsp;
                     <span className="sm:block hidden">| Developer</span>
                     </p>
                     <ul className='list-none hidden flex flex-right sm:flex flex-row gap-10'>
                     {navLinks.map((nav) => (
                        <li
                          key={nav.id}
                          className={`${
                            active === nav.title ? "text-white" : "text-secondary"
                          } hover:text-white text-[18px] justify-right flex font-medium cursor-pointer`}
                          onClick={() => setActive(nav.title)}
                        >
                          <a href={`#${nav.id}`}>{nav.title}</a>
                        </li>
                      ))}
                      </ul>
                      <div
                        className="sm:hidden flex flex-1 justify-end items-center">
                          <img
                            src={menu}
                            alt="Menu"
                            className="w-[28px] h-[28px] object-contain cursor-pointer"
                            onClick={() => {
                              setToggle(!toggle)}
                            }
                            />
                      </div>
            </Link>
        </div>
    </nav>
  )
}

export default Navbar