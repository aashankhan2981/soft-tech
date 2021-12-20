import Image from 'next/image'
import part1 from './svgs/part1.svg'
import part2 from './svgs/part2.svg'
import part3 from './svgs/part3.svg'
import part4 from './svgs/part4.svg'
import part5 from './svgs/part5.svg'
const Partners = () => {
    return (
        <div className='flex my-[120px]  justify-between items-center mx-[260px] '>
            <Image src={part1} alt='part1' />
            <Image src={part2} alt='part2' />
            <Image src={part3} alt='part3' />
            <Image src={part4} alt='part4' />
            <Image src={part5} alt='part5' />
        </div>
    )
}

export default Partners
