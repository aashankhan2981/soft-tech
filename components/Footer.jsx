import Image from 'next/image'
import React from 'react'
import fb from './svgs/fb.svg'
import twit from './svgs/twitter.svg'
import link from './svgs/linkdon.svg'
import logo from './svgs/footerlogo.svg'
import FooterItems from './FooterItems'
import style from '../styles/Home.module.css'

const Footer = () => {
    return (
        <div className=''>
           <div className='bg-[#2F2E41] relative top-36 mx-auto flex p-[84px] justify-between max-w-[900px] items-center'>
               <h1 className='font-bold text-[50px] text-white   max-w-[350px]'>Interested in getting fusely? </h1>
               <button className={`${style.getButton2} ${style.hovermehron} `}>Let’s talk</button>
               </div> 
           <div className='footer bg-[#ECEBFF] flex flex-col justify-end'>
               <div className='flex px-[260px] mt-[244px] justify-between items-start'>
                    
                    <FooterItems h1={'Product'} h2={'How it works'} h3={'Features'} h4={'Pricing'} h5={'FAQ'} h6={'Download'} />
                    <FooterItems h1={'Company'} h2={'About'} h3={'Blog'} h4={'Partnership'} h5={'Terms of use'} h6={'Privacy policy'} />
                    <FooterItems h1={'Support'} h2={'Help center'} h3={'Contact us'}  />
                    <div className='flex flex-col text-[#2F2E41] '>
                        <h2 className='font-semibold mb-[20px] text-[18px]' >Get in touch</h2>
                        <div className='flex items-center gap-3 justify-between'>
                            <Image src={fb} alt='fb-icon' />
                            <Image src={twit} alt='twitter-con' />
                            <Image src={link} alt='linkdon-icon' />

                        </div>
                    </div>
               </div>
               <div className='copyright mb-[40px] px-[80px] mt-[80px] flex justify-between items-center '>
                   <Image src={ logo} alt='logo' />
                   <h5 className='font-normal text-[12px] text-[#9893A3]' >© Fusely 2021. All rights reserved.</h5>

               </div>

           </div>
        </div>
    )
}

export default Footer
