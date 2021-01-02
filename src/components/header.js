import React, { useState } from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import SearchBar from '../components/search-bar'

const Header = () => {

  const data = useStaticQuery( graphql`
    query {
        site {
            siteMetadata {
              title
              tagline
              showLogo
              menuLinks {
                name
                link
              }
            }
        }
    }
  `)

  const [ isSearchVisible, setSearchVisibility ] = useState(0);

  const showSearchModal = ( val ) => {
    setSearchVisibility( val )
  }

  const { search } = window.location
  const query = new URLSearchParams(search).get('s')
    
  return (

    <header className="navbar">
      <nav className="nav__mobile"></nav>
      <div className="container">
        <div className="navbar__inner">

          <Link to="/">
            {data.site.siteMetadata.showLogo ? 
              <img className="custom__logo" src={'/logo.png'} alt="" />
              :
              <span className='navbar__logo'>{data.site.siteMetadata.title}</span>
            }
            
            {data.site.siteMetadata.tagline &&  
            <small className="site__description">
              {data.site.siteMetadata.tagline}
            </small>
            }
          </Link>
          
          <div className="navbar-container">
            <div className="menu-navbar-container">
              <ul className="navbar__menu">
                  {data.site.siteMetadata.menuLinks.map( (obj, index) => (
                    <li key={index}><Link to={obj.link}>{obj.name}</Link></li>
                  ))}
              </ul>
            </div>
            
            <div onClick={ () => showSearchModal(1) } id="searchBtn" className="search-btn">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="svg-inline--fa fa-search fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg>
            </div>
            
          </div>

          <div className="navbar__menu-mob">

            <div onClick={ () => showSearchModal(1) } id="searchBtnMob" className="search-btn">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="svg-inline--fa fa-search fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg>
            </div>

            <Link to="#" id='toggle'><svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" className=""></path></svg></Link>
          </div>
        </div>
      </div>

      <SearchBar
        showSearch={isSearchVisible}
        setVisibility={setSearchVisibility}
      />

    </header>
  )
}

export default Header