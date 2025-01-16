import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import HorseGroup from '../assets/images/png/horse-group-img.png'
import CustomHeading from '../common/CustomHeading'
import SmallHorseImg from '../assets/images/png/small-flying-horse-img.png'
import Description from '../common/Description'
import CustomButton from '../common/CustomButton'

const AboutUs = () => {
      useEffect(() => {
            AOS.init({
                duration: 1200,
                easing: "ease-in-out",
                once: false,
                offset: 100,
            });
        }, []);
    return (
        <div className='max-w-[1320px] mx-auto lg:mb-[231px] mb-40 max-2xl:px-4 overflow-hidden'>
            <div className="flex justify-center xl:justify-between flex-wrap xl:items-end items-center">
                <div className="xl:w-6/12 w-full justify-center flex">
                    <img data-aos="fade-up-right" className='2xl:max-w-[661px] xl:min-h-[766px] xl:max-w-lg max-w-md max-h-[693px] w-full' src={HorseGroup} alt="horse-group-img" />
                </div>
                <div className="xl:w-6/12 w-full max-xl:mt-20 lg:pb-5 flex xl:justify-end justify-center lg:items-end">
                    <div data-aos="fade-up-left" className="max-w-[576px] w-full">
                        <span className='relative max-w-max flex max-xl:mx-auto'>
                            <CustomHeading className="xl:mb-6 lg:mb-5 mb-4" title="About Us" />
                            <img className='max-w-[118px] w-full absolute -right-12 -top-14' src={SmallHorseImg} alt="small-horse-img" />
                        </span>
                        <Description className="lg:mb-[10px] font-comic mb-2 lg:!max-w-none !w-full max-xl:!text-center" title="Tortor suscipit non habitant natoque elementum, lectus turpis. Maecenas viverra habitasse ut sit eleifend aenean. Egestas platea bibendum tempor non tempus egestas. Rhoncus sit est risus tellus lorem convallis. Amet pellentesque viverra euismod eget dignissim ullamcorper. In et ac amet, habitant erat fermentum eget aliquet lectus. Condimentum congue nibh nisl sed quis justo, senectus egestas. " />
                        <Description className='lg:mb-[53px] font-comic md:mb-9 mb-7 max-xl:!text-center' title="In in ut scelerisque quam purus, quam. Porttitor aenean elit blandit gravida potenti sed. Mauris." />
                        <div className="border-linear-gradient max-w-max rounded-xl ml-2 max-xl:mx-auto">
                            <CustomButton className="uppercase md:-translate-x-[5px] -translate-x-1 md:-translate-y-[5px] -translate-y-1 !bg-white" title='mint now' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs