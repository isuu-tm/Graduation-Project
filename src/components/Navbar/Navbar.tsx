//
import React from 'react'
import s from './Navbar.module.css'
import {NavLink} from 'react-router-dom'
import {routes} from "../../routes/route";


const Navbar: React.FC = () => {

   return (
      <nav className={s.nav}>
          {
              routes.map(rout => {
                  return <div className={s.navbar}>
                      <NavLink to={rout.to}
                               className={navData => navData.isActive ? s.activeLink : s.item}>
                          {rout.title}
                      </NavLink>
                  </div>
              })
          }
      </nav>
   )

}

export default Navbar

// у димы тут через activeClassName активные ссылки были сделанны