import React from 'react'
import CustomHeading from '../common/CustomHeading'
import FooterLogo from '../assets/images/png/footer-logo.png'
import { MEDIA_ICONS } from '../utils/helper'

function Footer() {
  return (
    <div className='bg-footer bg-no-repeat bg-cover bg-center'>
        <CustomHeading title="Sign up for the latest news"/>
        <p className='text-center max-w-[660px] mx-auto text-custom-xl leading-[170%]'>Convallis et vel cras odio mi, volutpat sed ultrices. Sed amet sed aenean egestas ut sit. </p>
        <div className='max-w-[521px] flex mx-auto bg-white'>
            <input className='w-full' required placeholder='Your email' type="email" />
            <button className='text-2xl'>Subscribe</button>
        </div>
        <div>
            <img className='max-w-[172px] mx-auto' src={FooterLogo} alt="footer logo" />
            <div className='flex justify-center gap-5 mt-[60px]'>
            {MEDIA_ICONS.map((obj, i) => (
                    <div key={i}>
                        <a target='_blank' href={obj.link}>{obj.icon}</a>
                    </div>
                ))}
            </div>
            <p className='text-center text-black opacity-70 text-xl mt-[63px] pb-[60px]'>Copyright@CrazyUnicorn.com</p>
        </div>
    </div>
  )
}

export default Footer