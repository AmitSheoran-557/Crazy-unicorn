import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import Header from '../common/Header'
import RainbowImg from '../assets/images/png/rainbow-img.png'
import HorseImg from '../assets/images/png/hero-horse-img.png'
import StarsImgOne from '../assets/images/png/stars-img-1.png'
import StarsImgTwo from '../assets/images/png/stars-img-2.png'
import CloudImg from '../assets/images/png/hero-cloud-img-2.png'

const Hero = () => {
    useEffect(() => {
        AOS.init({
            duration: 1200,
            easing: "ease-in-out",
            once: false,
            offset: 100,
        });
    }, []);
    return (
        <div className='relative overflow-hidden 2xl:pb-2 xl:pb-10 pb-20'>
            <img className='star-img xl:max-w-[390px] lg:max-w-xs z-50 md:max-w-64 max-w-48 w-full absolute left-0 lg:top-[169px] top-20' src={StarsImgOne} alt="starts-img" />
            <img className='star-img-2 xl:max-w-[520px] lg:max-w-sm z-40 md:max-w-64 max-w-48 w-full absolute !right-0 bottom-0' src={StarsImgTwo} alt="starts-img-2" />
            <Header />
            <div data-aos="zoom-out-up" className='max-w-[1320px] mx-auto relative flex flex-col justify-center items-center'>
                <img className='absolute sm:bottom-20 bottom-5 w-full z-30 max-md:min-w-[600px] scroll-animation max-w-[1320px]' src={CloudImg} alt="cloud-img" />
                <img className='absolute 2xl:-bottom-12 xl:-bottom-24 lg:-bottom-20 md:-bottom-14 -bottom-12 max-md:min-w-[450px] max-w-[1320px] w-full z-40 scroll-animation-two' src={CloudImg} alt="cloud-img" />
                <img className='absolute 2xl:-bottom-12 xl:-bottom-24 lg:-bottom-20 md:-bottom-14 -bottom-12 max-md:min-w-[450px] xl:max-w-[1320px] lg:max-w-5xl md:max-w-3xl w-full z-40' src={CloudImg} alt="cloud-img" />

                <div className='mx-auto flex justify-center items-center'>
                    <img className='max-w-[1264px] w-full -z-10' src={RainbowImg} alt="rainbow-img" />
                    <img className='max-w-[600px] absolute z-30 2xl:bottom-[140px] xl:bottom-20 lg:bottom-10 bottom-7 mx-auto w-full xl:px-0 lg:px-10 md:px-20 sm:px-28 px-20' src={HorseImg} alt="horse-img" />
                </div>
                <img className='absolute sm:bottom-20 bottom-10 w-full -z-20 max-md:min-w-[600px] scroll-animation-two max-w-[1320px]' src={CloudImg} alt="cloud-img" />
            </div>
        </div>
    )
}

export default Hero