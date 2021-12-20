import React from 'react'

const Plan = ({h1,h2,h3,h4,h5,period,py}) => {
    const items = [h3,h4,h5]
    return (
        <div className={`${py ?"bg-[#6C63FF] py-[72px]  text-white ": "bg-[#ECEBFF] py-[46px] bg-opacity-30 text-[#717082]"} shadow-lg shadow-[#383838] w-[363px]   flex flex-col items-center justify-center`}>
                    <h4 className=' mb-[22px]  font-normal text-[18px] '>{h1}</h4>
                    <div className='flex items-center justify-center'>
                    <h2 className={`font-bold text-[50px] mb-[30px] ${py?"text-white":"text-[#2F2E41]"} `}>{h2}</h2>
                    <p className={`${period?"flex" :"hidden"}`}>/month</p>
                    </div>
                    <div className='pb-[30px] flex flex-col gap-3 items-center '>
                    {items.map((item,index)=> <h4 key={index} className='font-normal text-[18px]'>{item}</h4>  )}
                   
                    </div>
                    <button className={ `${py?"px-[47px] text-[16px] hover:bg-[#6C63FF] hover:text-white hover:border-white bg-white":"px-[30px] hover:bg-[#6C63FF] hover:text-white text-[14px]"}  py-[15px]  font-bold text-[#6C63FF]  border border-[#6C63FF]`}>Get Started</button>
                </div>
    )
}

export default Plan
