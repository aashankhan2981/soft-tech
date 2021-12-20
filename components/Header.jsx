import Image from 'next/image'
import React from 'react'
import logo from './svgs/logo.svg'
import style  from '../styles/Home.module.css'
const Header = () => {
    return (
        <div className='flex px-[80px] pt-[40px] justify-between items-center'>
            <div>
                <Image src={logo} alt="logo" />
            </div>
            <div className='flex items-center justify-center'>
                <a className={style.head1}>Home</a>
                <a className={style.header}>Features</a>
                <a className={style.header}>Pricing</a>
                <a className={style.header}>Blog</a>
                <a className={style.header}>Contact</a>
            </div>
            <div className='flex'>
                <button className={style.headbutton}>Log in</button>
                <button className={`${style.getButton} ${style.hovermehron} ml-4`} >Get Started</button>
            </div>
            
        </div>
    )
}

export default Header
