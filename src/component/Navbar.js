import { React, useState } from 'react';
import { Link } from 'react-router-dom';

import SearchBox from './SearchBox';
import Menu from './Menu';

import icon2 from '../assets/svg/menu2.svg';
import logo from '../assets/svg/IMDB_Logo_2016.svg';
import IMDb_PRO from '../assets/svg/IMDb_PRO.svg';
import watchlist_icon from '../assets/svg/watchlist_icon.svg';

export default function Navbar({ addToRecentlyViewed }) {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <div className='navbar-container'>
        <nav className='navigation'>
          <Link to='/'>
            <img
              src={logo}
              className='logo'
              alt='IMDb logotype'
            />
          </Link>
          <div className='menu-dropdown'>
            <button
              className='btn-menu'
              onClick={() => setOpenMenu(!openMenu)}
            >
              <div className='hamburger'>
                <img src={icon2} alt='menu icon' />
              </div>
              Menu
            </button>
          </div>
          <SearchBox addToRecentlyViewed={addToRecentlyViewed} />
          <Link to='/Login'>
            <button className='btn-imdb-pro'>
              <img src={IMDb_PRO} alt='IMDb Pro logo' />
            </button>
          </Link>
          <div className='separator-bar'></div>
          <div className='login-button-container'>
            <Link to='/Login' style={{ textDecoration: 'none' }}>
              <button className='btn-navbar' type='button'>
                <img src={watchlist_icon} alt='icon of a gravestone' />
                Watchlist
              </button>
            </Link>
            <Link to='/Login' style={{ textDecoration: 'none' }}>
              <button className='btn-navbar' type='button'>
                Sign in
              </button>
            </Link>
          </div>
        </nav>
        <div className='language-container'>
        </div>
      </div>
      <Menu openMenu={openMenu} setOpenMenu={setOpenMenu} />
    </>
  )
}
