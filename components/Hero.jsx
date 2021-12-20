import Image from 'next/image'
import React from 'react'
import hero from './svgs/herogroup.svg'
import border from './svgs/border.png'
import style  from '../styles/Home.module.css'

const Hero = () => {
    return (
        <div className='flex flex-row-reverse  justify-between items-center mt-[80px] mx-auto px-[130px]'>
            <div className='w-full relative'>
                
                <Image src={hero} alt='girl'  />
                
                <div className=' absolute left-[200px] bottom-[1px]   ' >
                    <Image  src={border} alt="line" />
                </div>
                

            </div >
            <div className='w-full'>
                <h1 className='font-bold text-[86px]  leading-[88px] max-w-[489px]  '>
                Let’s get fusely together
                </h1 >
                <p className='font-normal text-[20px] my-[30px] text-[#9893A3] leading-[34px] text-left max-w-[489px] '>Outcome-centered product that reduce churn, optimize pricing, and grow your subscription business end-to-end.
                </p>
                <button className={`${style.getButton} ${style.hovermehron}`} >Get Started</button>
            </div>
        </div>
    )
}

export default Hero
