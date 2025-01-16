import React from 'react'
import { TEAM_CARDS } from '../utils/helper'
import Horse from "../assets/images/png/horse.png";
import CustomHeading from '../common/CustomHeading';
import HeadingHorse from '../assets/images/png/heading-horse.png';
function Team() {
    return (
        <div className='bg-team bg-cover bg-no-repeat bg-center pt-14'>
            <div className='w-fit relative mx-auto'>
                <CustomHeading title="TEAM" />
                <img className='max-w-[118px] absolute -top-10 max-lg:-top-14  -right-16' src={HeadingHorse} alt="horse" />
            </div>
            <div className='flex max-w-[1320px] mx-auto gap-6 max-xl:flex-wrap max-xl:gap-y-12 mt-[154px] max-lg:mt-20 max-md:mt-12 max-sm:mt-8 items-end'>
                {TEAM_CARDS.map((obj, i) => (
                    <div className='gradient-bg rounded-3xl p-[1px] group h ' key={i}>
                        <div className='bg-white  rounded-3xl'>
                            <img className='pointer-events-none max-w-[312px] max-h-[518px] mx-auto -translate-y-[70px] group-hover:scale-[1.2] max-sm:max-w-[250px] max-sm:group-hover:max-w-[340px]   transition-all ease-linear duration-300' src={Horse} alt="horse" />
                            <div className='bg-off-white bg-white w-[424px] max-sm:w-[340px] rounded-3xl group pb-5 text-center' key={i}>
                                <h2 className='text-custom-5xl'>{obj.heading}</h2>
                                <p className='text-xl mt-3 font-comic'>{obj.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Team