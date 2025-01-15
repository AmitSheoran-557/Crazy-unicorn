import React from 'react'
import CustomHeading from '../common/CustomHeading'
import Description from '../common/Description'

const OurStory = () => {
  return (
    <div className='max-w-[1320px] lg:pb-[212px] pb-40 mx-auto flex flex-col justify-center items-center'>
      <CustomHeading title="Our Story" className="lg:mb-[22px] md:mb-4 mb-3 text-center" />
      <Description className="!text-center font-comic" title="Vestibulum, id lacus, volutpat nec. Magna senectus enim nisi, sit. Sagittis, ac velit gravida a nullam lobortis in malesuada. Cras pellentesque convallis semper dolor at velit diam odio. Nullam quam sollicitudin urna eget. In gravida maecenas amet tincidunt feugiat tellus, pulvinar nulla. Ultricies eu lectus consequat et imperdiet eget elementum. Euismod placerat amet nisl sagittis arcu, et, sodales velit. Pretium elit volutpat orci accumsan, a ac id rutrum enim. Tellus luctus eget elit vitae eget nisl ante." />
      <Description className="!max-w-[953px] font-comic !text-center" title="Sed lectus ut elit id lectus diam massa nisl pretium. Vel amet, sagittis, adipiscing maecenas lorem ullamcorper. Faucibus netus sed varius lobortis. Morbi sit sit magna lorem arcu facilisi ipsum sed amet. At bibendum egestas in maecenas." />
    </div>
  )
}

export default OurStory