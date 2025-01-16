import React from 'react'
import CustomHeading from '../common/CustomHeading'
import Description from '../common/Description'
import StarImgThree from '../assets/images/png/stars-img-3.png'
import StarImgFour from '../assets/images/png/stars-img-4.png'
import SmallHorseImg from '../assets/images/png/small-flying-horse-img.png'

const OurStory = () => {
  return (
    <div className="relative">
      <img className='star-img-2 2xl:max-w-[361px] xl:max-w-xs lg:max-w-64 md:max-w-48 max-w-36 absolute left-0 lg:-top-[43%] -top-[30%]' src={StarImgThree} alt=" start-img-3" />
      <img className='star-img 2xl:max-w-[361px] xl:max-w-xs lg:max-w-64 md:max-w-48 max-w-36 absolute right-0 lg:bottom-0 -top-[30%]' src={StarImgFour} alt=" start-img-4" />
      <div className='max-w-[1320px] relative z-20 lg:pb-[212px] max-xl:px-4 pb-40 mx-auto flex flex-col justify-center items-center'>
        <span className='relative max-w-max flex justify-center items-center'>
          <CustomHeading title="Our Story" className="lg:mb-[22px] md:mb-4 mb-3 text-center" />

          <img className='max-w-[118px] w-full absolute -right-12 -top-14' src={SmallHorseImg} alt="small-horse-img" />
        </span>
        <Description className="xl:!max-w-[1120px] !max-w-4xl !text-center font-comic" title="Vestibulum, id lacus, volutpat nec. Magna senectus enim nisi, sit. Sagittis, ac velit gravida a nullam lobortis in malesuada. Cras pellentesque convallis semper dolor at velit diam odio. Nullam quam sollicitudin urna eget. In gravida maecenas amet tincidunt feugiat tellus, pulvinar nulla. Ultricies eu lectus consequat et imperdiet eget elementum. Euismod placerat amet nisl sagittis arcu, et, sodales velit. Pretium elit volutpat orci accumsan, a ac id rutrum enim. Tellus luctus eget elit vitae eget nisl ante." />
        <Description className="xl:!max-w-[953px] !max-w-4xl font-comic !text-center" title="Sed lectus ut elit id lectus diam massa nisl pretium. Vel amet, sagittis, adipiscing maecenas lorem ullamcorper. Faucibus netus sed varius lobortis. Morbi sit sit magna lorem arcu facilisi ipsum sed amet. At bibendum egestas in maecenas." />
      </div>
    </div>
  )
}

export default OurStory