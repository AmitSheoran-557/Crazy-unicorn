import React, { useState } from 'react'
import { FAQ_LIST } from '../utils/helper';
import { ArrowDown } from '../utils/icons';
import CustomHeading from '../common/CustomHeading';
import HeadingHorse from '../assets/images/png/heading-horse.png';
import FaqLeftStars from '../assets/images/png/faq-left-star.png';
import FaqRightStars from '../assets/images/png/faq-right-star.png';

const Faq = () => {
    const [active, setActive] = useState(0);
    const toggle = (index) => {
        setActive(active === index ? null : index);
    };
    return (
        <div id='faq' className='relative bg-faq px-4 bg-no-repeat bg-cover bg-bottom pt-[207px] max-lg:pt-24'>
            <img className='max-lg:hidden z-0 absolute top-0 left-0 w-full max-w-[300px] animate-stars' src={FaqLeftStars} alt="faq stars" />
            <img className='max-lg:hidden z-0 absolute top-36 right-0 w-full max-w-[300px] animate-stars' src={FaqRightStars} alt="faq stars" />
            <div className='w-fit relative z-[1] mx-auto'>
                <CustomHeading title="FAQ" />
                <img className='max-w-[118px] absolute -top-10 max-lg:-top-14 -right-16' src={HeadingHorse} alt="horse" />
            </div>


            <div className="max-w-[1189px] relative z-[1] mt-[88px] max-lg:mt-10 max-md:mt-7 max-sm:mt-2 flex flex-col mx-auto">
                {FAQ_LIST.map((item, index) => (
                    <div
                        key={index}
                        className={`py-[17.5px] ${active === index
                            ? ""
                            : ""
                            }`}
                    >
                        <button
                            onClick={() => toggle(index)}
                            className='flex w-full uppercase text-black justify-between max-sm:gap-4 bg-transparent items-center text-left font-medium text-custom-5xl max-lg:text-3xl max-md:text-2xl'
                        >
                            {item.heading}{" "}
                            <span
                                className={`transition-all duration-300 ${active === index ? "rotate-180 " : ""
                                    }`}
                            >
                                <ArrowDown />
                            </span>
                        </button>
                        <p
                            className={`text-black font-comic max-w-[790px] text-custom-xl leading-[170%] max-md:text-sm overflow-hidden transition-all duration-300 ${active === index ? "max-h-32 max-sm:max-h-52 pt-4 border-b-[1px] border-black border-opacity-30 pb-[22px]" : "max-h-0"
                                }`}
                        >
                            {item.subHeading}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Faq