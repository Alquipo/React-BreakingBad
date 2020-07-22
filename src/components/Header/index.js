import React from 'react'
import './styles.css'
import logo from '../../assets/logo.png'

const Header = () => {
    return(
        <header className='center'>
            <img src={logo} alt="Logo"/>
        </header>
    )
}

export default Header