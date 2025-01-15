import React from 'react'
import HorseGroup from '../assets/images/png/horse-group-img.png'
import CustomHeading from '../common/CustomHeading'
import SmallHorseImg from '../assets/images/png/small-flying-horse-img.png'
import Description from '../common/Description'
import CustomButton from '../common/CustomButton'

const AboutUs = () => {
    return (
        <div className='max-w-[1320px] mx-auto'>
            <div className="flex justify-center  items-center">
                <div className="lg:w-6/12 w-full">
                    <img className='max-w-[661px] max-h-[693px] w-full' src={HorseGroup} alt="horse-group-img" />
                </div>
                <div className="lg:w-6/12 w-full flex lg:justify-end  items-center">
                    <div className="max-w-[576px] w-full">
                        <span className='relative max-w-max flex'>
                            <CustomHeading className="xl:mb-6 lg:mb-5 mb-4" title="About Us" />
                            <img className='max-w-[118px] w-full absolute right-0 top-0' src={SmallHorseImg} alt="small-horse-img" />
                        </span>
                        <Description className="lg:mb-[10px] mb-2" title="Tortor suscipit non habitant natoque elementum, lectus turpis. Maecenas viverra habitasse ut sit eleifend aenean. Egestas platea bibendum tempor non tempus egestas. Rhoncus sit est risus tellus lorem convallis. Amet pellentesque viverra euismod eget dignissim ullamcorper. In et ac amet, habitant erat fermentum eget aliquet lectus. Condimentum congue nibh nisl sed quis justo, senectus egestas. " />
                        <Description className='lg:mb-[53px] md:mb-9 mb-7' title="In in ut scelerisque quam purus, quam. Porttitor aenean elit blandit gravida potenti sed. Mauris." />
                        <div className="border-linear-gradient max-w-max rounded-xl ml-2">
                            <CustomButton className="uppercase  -translate-x-2 -translate-y-2 !bg-white" title='mint now' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs