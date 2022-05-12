import React from 'react'

export const HeaderMenuItem = (props) => {

    const IWasClicked = ()   =>{
        props.onPageMenuClick(props.text)        
    }


  return (
    <li>
        <a onClick={IWasClicked} 
            className={`headeranchor ${props.activePage == props.text ? 'active' : ''}`}
            href="#">
                { props.text }
        </a>
    </li>
  )
}
