import React from 'react'
import Plan from './Plan'

const Plans = () => {
    return (
        <div className='mx-[130px]'>
            <h1 className='font-bold text-[60px] text-center text-[#2F2E41] '>Choose your plan</h1>
            <div className='flex justify-between gap-[45px] items-center mt-[90px] mb-3 '>
                <Plan h1={"Starter"} h2={"Free"} h3={"Dashboard"} h4={"Limited Support"} h5={"Forever free"} period={false} py={false} />
                <Plan h1={"Premium"} h2={"$29"} h3={"Dashboard & Analysis"} h4={"Premium Support"} h5={"Tracking Service"} period={true} py={true}  />
                <Plan h1={"Enterprise"} h2={"$49"} h3={"All features in Premium"} h4={"Realtime overview"} h5={"Mobile app"} period={true} py={false}/>

            </div>
        </div>
    )
}

export default Plans
