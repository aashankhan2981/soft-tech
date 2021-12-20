import React from 'react'

const FooterItems = ({h1,h2,h3,h4,h5,h6}) => {
    const items = [h2,h3,h4,h5,h6]
    return (
        <div className='flex flex-col text-[#2F2E41]' >
                        <h2 className='font-semibold mb-[20px] text-[18px] ' >{h1}</h2>
                        {items.map((item,index)=> <h4 key={index} className='font-normal mb-[8px] text-[16px] '>{item}</h4> )}
                        

                    </div>
    )
}

export default FooterItems
