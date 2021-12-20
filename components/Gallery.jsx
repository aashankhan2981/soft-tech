import Image from 'next/image'
const Gallery = ({img,title,details,flex}) => {
    return (
        <div className={`flex ${flex} justify-between items-center my-[220px] mx-[130px]`}>
            <div>
                <Image src={img} />
            </div>
            <div className='max-w-[400px]'>
                <h1 className='font-bold text-[60px] leading-[64px] '>{title}</h1>
                <p className='font-normal text-[20px] my-[24px] text-[#9893A3] '>{details}</p>
                <h4 className='font-semibold relative z-10 text-[18px] pl-[2px] text-[#2F2E41]'>Learn more</h4>
                <div className='h-[10px] bg-[#C5C2FF] relative bottom-[12px] opacity-50 w-[100px]'></div>
            </div>
            
        </div>
    )
}

export default Gallery
