import React, { useState } from 'react'
import {FAQ_LIST } from '../utils/helper';
import { ArrowDown } from '../utils/icons';

const Faq = () => {
      const [active, setActive] = useState(0);
      const toggle = (index) => {
        setActive(active === index ? null : index);
      };
  return (
    <div id='faq' className='bg-faq px-4 bg-no-repeat bg-cover bg-center'>
    <div className="pt-[210px] max-xl:pt-[170px] max-lg:pt-14 max-md:pt-10">
    
      <div className="max-w-[1189px] mt-[60px] max-lg:mt-10 max-md:mt-7 flex flex-col mx-auto">
        {FAQ_LIST.map((item, index) => (
          <div
            key={index}
            className={`py-[17.5px] ${
              active === index
                ? ""
                : ""
            }`}
          >
            <button
              onClick={() => toggle(index)}
              className='flex w-full uppercase text-black justify-between max-sm:gap-4 bg-transparent items-center text-left max-sm:text-base font-medium text-custom-5xl max-md:text-lg'
            >
              {item.heading}{" "}
              <span
                className={`transition-all duration-300 ${
                  active === index ? "rotate-180 " : ""
                }`}
              >
                <ArrowDown/>
              </span>
            </button>
            <p
              className={`text-black max-w-[790px] text-custom-xl max-md:text-sm overflow-hidden transition-all duration-300 ${
                active === index ? "max-h-32 max-sm:max-h-52 pt-4 border-b-[1px] border-black border-opacity-30 pb-[22px]" : "max-h-0"
              }`}
            >
              {item.subHeading}
            </p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Faq