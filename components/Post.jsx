import Image from "next/image"


const Post = ({post,title,para}) => {
    return (
        <div className="flex flex-col">
            <Image src={post} />
            <h2 className="font-semibold text-[22px] mb-[5px] mt-[26px]">{title}</h2>
            <p className="font-normal text-[16px] max-w-[363px]">{para}</p>
            <h6 className="font-semibold relative ml-1 z-20 text-[18px] text-[#2F2E41] mt-[26px]">Read more</h6>
            <div className='h-[10px] bg-[#C5C2FF] relative bottom-[12px] opacity-50 w-[100px]'></div>
            
            
        </div>
    )
}

export default Post
