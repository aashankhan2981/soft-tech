import Head from 'next/head'
import Image from 'next/image'
import Gallery from '../components/Gallery'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Partners from '../components/Partners'
import styles from '../styles/Home.module.css'
import main1 from '../components/svgs/main1.svg'
import main2 from '../components/svgs/main2.svg'
import main3 from '../components/svgs/main3.svg'
import Plans from '../components/Plans'
import Blog from '../components/Blog'
import Footer from '../components/Footer'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Landing Page</title>
        <meta name="description" content="Landing page developed from figma design" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='hidden  xl:block'>
        <Header/>
        <Hero/>
        <Partners/>
        <Gallery img={main1} title={"Detailed Examination"} details={"A daily dataset to keep you up to date on subscription market trends and what's happening in your vertical."} />
        <Gallery img={main2} title={"Creative Solutions"} details={"Creativity is our second name. We're full of inventive ideas and we're happy to present them to you."} flex="flex-row-reverse"/>
        <Gallery img={main3} title={"Professional Team"} details={"Well, obviously, we're professionals. Don't hesitate - get to know us better."} />
        <Plans/>
        <Blog/>
        <Footer/>
        </div>
        <div className='flex items-center h-screen px-4  justify-center xl:hidden' >
                <h3 className='font-bold text-center text-xl' >Now it is only designed for above 1200px width but very soon its completely responsive design will be available</h3>
        </div>
    </div>
  )
}
