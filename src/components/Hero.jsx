import React from 'react'
import Header from '../common/Header'
import HorseImg from '../assets/images/png/horse-img.png'
import StarsImgOne from '../assets/images/png/stars-img-1.png'
import StarsImgTwo from '../assets/images/png/stars-img-2.png'
import CloudsImgOne from '../assets/images/png/clouds-img.png'
import CloudsImgtwo from '../assets/images/png/clouds-img-2.png'

const Hero = () => {
    return (
        <div className='bg-hero-pattern bg-cover bg-center min-h-screen relative overflow-hidden'>
            <img className='star-img max-w-[390px] w-full absolute left-0 lg:top-[169px] top-20' src={StarsImgOne} alt="starts-img" />
            <img className='star-img-2 max-w-[520px] w-full absolute !right-0 lg:bottom-0' src={StarsImgTwo} alt="starts-img-2" />
            <img className='w-full max-w-[1920px] absolute bottom-0 ' src={CloudsImgOne} alt="clouds-img" />
            <Header />
            <div className='max-w-[1320px] mx-auto z-50 relative flex flex-col justify-center items-center'>
                <div className="">
                    <img className='max-w-[1264px] w-full' src={HorseImg} alt="horse-img" />
                </div>
            </div>
        </div>
    )
}

export default Hero