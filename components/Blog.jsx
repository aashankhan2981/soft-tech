import React from 'react'
import Post from './Post'
import post1 from './svgs/post1.svg'
import post2 from './svgs/post2.svg'
import post3 from './svgs/post3.svg'
const Blog = () => {
    return (
        <div className='mt-[220px] mb-[50px] mx-[128px]'>
            <div className='flex justify-between items-center'>
            <h1 className='font-bold text-[60px]'>From our blog</h1>
            <button className='px-[30px] py-[14px] hover:bg-[#6C63FF] hover:text-white border-[#6C63FF] border font-bold text-[14px] text-[#6C63FF]' >View all</button>
            </div>
            <div className='flex justify-between gap-[35px] items-center mt-[90px]'>
            <Post post={post1} title='What’s Fusely?' para={`A brand new company, created for everyone. This article will help you understand what ${"fusely"} stands for.`} />
            <Post post={post2} title='Introducing Fusely Engage' para={`We’re happy to announce the Fusely Engage. The first growth automation platform designed for the digital interactions.`} />
            <Post post={post3} title='Premium vs Enterprise plan' para={`Let’s compare our most popular plans: Premium and Enterprise. This article will help you decide which one will be better for your needs.`} />
            
            </div>
        </div>
    )
}

export default Blog
