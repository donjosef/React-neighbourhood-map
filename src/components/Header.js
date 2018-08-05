import React from 'react'

function Header(props) {
    return (
      <header className='header'>
        <button aria-label='toggle menu' onClick={props.onToggleMenu}>
            <span></span>
            <span></span>
            <span></span>
        </button>
        <h1>Best Places in Puglia</h1>
      </header>
    
    );
}

export default Header