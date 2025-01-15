import React from 'react'
import { TEAM_CARDS } from '../utils/helper'
import Horse from "../assets/images/png/horse.png";
import CustomHeading from '../common/CustomHeading';
import HeadingHorse from '../assets/images/png/heading-horse.png';
function Team() {
    return (
        <div className='bg-team bg-cover bg-no-repeat bg-center pt-14'>
            <div className='w-fit relative mx-auto'>
            <CustomHeading title="TEAM"/>
            <img className='max-w-[118px] absolute -top-10 -right-16' src={HeadingHorse} alt="horse" />
            </div>
            <div className='flex max-w-[1320px] mx-auto justify-between gap-3 max-xl:flex-wrap max-xl:justify-center max-xl:gap-y-12 mt-[154px] items-end'>
                {TEAM_CARDS.map((obj, i) => (
                    <div className='bg-off-white border w-[424px] max-sm:w-[340px] border-pink-500 rounded-3xl group pb-5 text-center' key={i}>
                        <img className='pointer-events-none max-w-[312px] mx-auto -mt-9 group-hover:max-w-[381px] group-hover:-mt-[74px] transition-all ease-in-out duration-300' src={Horse} alt="horse" />
                        <h2 className='text-custom-5xl mt-7'>{obj.heading}</h2>
                        <p className='text-xl mt-3'>{obj.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Team