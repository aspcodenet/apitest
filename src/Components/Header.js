import React from 'react'
import { HeaderMenuItem } from './HeaderMenuItem'

export const Header = (props) => {
  return (
    <header className="siteheader">
        <div className="logo">
            <i className='bx bxs-cat logoicon'></i>
            {props.animal}<span className="logopart2">Lovers</span>                
        </div>
        <nav>
            <ul className="navmenu">
                <HeaderMenuItem text="Home"  onPageMenuClick={props.onPageMenuClick}    activePage={props.activePage} /> 
                <HeaderMenuItem text="Services" onPageMenuClick={props.onPageMenuClick}  activePage={props.activePage} />
                <HeaderMenuItem text="Products" onPageMenuClick={props.onPageMenuClick} activePage={props.activePage} />
                <HeaderMenuItem text="About" onPageMenuClick={props.onPageMenuClick} activePage={props.activePage} />
                <HeaderMenuItem text="Contact" onPageMenuClick={props.onPageMenuClick} activePage={props.activePage} />
                <HeaderMenuItem text="Country" onPageMenuClick={props.onPageMenuClick} activePage={props.activePage} />
            </ul>

            
        </nav>
        <ul className="navicons">
        <li><a className="navanchor" href="#"><i class='bx bx-search-alt navicon'></i></a></li> 
        <li><a className="navanchor" href="#"><i class='bx bx-menu navicon' ></i></a></li> 
        </ul>
    </header>

  )
}
