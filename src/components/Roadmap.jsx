import React from 'react'
import Description from '../common/Description'
import CustomHeading from '../common/CustomHeading'
import SmallHorseImg from '../assets/images/png/small-flying-horse-img.png'
import RoadmapLayerImg from '../assets/images/png/roadmap-layer-img.png'
import RoadmapCloudImg from '../assets/images/png/roadmap-bg-clouds.png'

const Roadmap = () => {
    return (
        <div className='max-w-[1320px] mx-auto flex flex-col justify-center items-center'>
            <span className='relative max-w-max flex justify-center items-center mx-auto'>
                <CustomHeading className="xl:mb-[261px] lg:mb-40 mb-20" title="roadmap" />
                <img className='max-w-[118px] w-full absolute -right-12 -top-14' src={SmallHorseImg} alt="small-horse-img" />
            </span>

            <div className="w-full max-lg:max-w-max max-xl:px-4 flex flex-col pl-[42px] justify-center items-center mx-auto relative">
                <img className='max-w-[755px] w-full absolute lg:block max-lg:hidden mx-auto -z-20 xl:-top-36 lg:-top-32' src={RoadmapLayerImg} alt="layer-img" />
                <div className="flex relative z-10 w-full lg:mb-[61px]">
                    <div className='lg:mr-auto max-w-[451px] !leading-[115%] xl:min-w-[205px] w-full'>
                        <h2 className='lg:mb-[15px] md:mb-3 mb-2.5 !leading-[174%] xl:text-[40px] lg:text-4xl text-3xl'>Phase 1</h2>
                        <Description className="font-comic lg:text-lg text-base max-w-[400px]" title="Sed lectus ut elit id lectus diam massa nisl pretium. Sagittis, adipiscing maecenas lorem ullamcorper. Faucibus netus sed varius loborti orbi sit sit magna lorem arcu." />
                    </div>
                </div>
                <div className="flex relative z-10 w-full lg:mb-[66px]">
                    <div className='lg:ml-auto max-w-[451px] !leading-[115%] xl:min-w-[205px] w-full'>
                        <h2 className='lg:mb-[15px] md:mb-3 mb-2.5 !leading-[174%] xl:text-[40px] lg:text-4xl text-3xl'>Phase 2</h2>
                        <Description className="font-comic lg:text-lg text-base max-w-[360px]" title="Sed lectus ut elit id lectus diam massa nisl pretium. Sagittis, adipiscing maecenas lorem ullamcorper. Faucibus netus sed varius loborti orbi sit sit magna lorem arcu." />
                    </div>
                </div>
                <div className="flex relative z-10 w-full lg:mb-[22px]">
                    <div className='lg:mr-auto max-w-[451px] !leading-[115%] xl:min-w-[205px] w-full'>
                        <h2 className='lg:mb-[15px] md:mb-3 mb-2.5 !leading-[174%] xl:text-[40px] lg:text-4xl text-3xl'>Phase 3</h2>
                        <Description className="font-comic lg:text-lg text-base max-w-[340px]" title="Sed lectus ut elit id lectus diam massa nisl pretium. Sagittis, adipiscing maecenas lorem ullamcorper. Faucibus netus sed varius loborti orbi sit sit magna lorem arcu." />
                    </div>
                </div>
                <div className="flex relative z-10 w-full lg:mb-[61px]">
                    <div className='lg:ml-auto max-w-[451px] !leading-[115%] xl:pl-10 xl:min-w-[205px] w-full'>
                        <h2 className='lg:mb-[15px] md:mb-3 mb-2.5 !leading-[174%] xl:text-[40px] lg:text-4xl text-3xl'>Phase 4</h2>
                        <Description className="font-comic lg:text-lg text-base max-w-[360px]" title="Sed lectus ut elit id lectus diam massa nisl pretium. Sagittis, adipiscing maecenas lorem ullamcorper. Faucibus netus sed varius loborti orbi sit sit magna lorem arcu." />
                    </div>
                </div>
                <div className="flex relative z-10 w-full">
                    <div className='lg:mr-auto max-w-[451px] !leading-[115%] w-full'>
                        <h2 className='lg:mb-[15px] md:mb-3 mb-2.5 !leading-[174%] xl:text-[40px] lg:text-4xl text-3xl'>Phase 5</h2>
                        <Description className="font-comic lg:text-lg text-base max-w-[323px]" title="Sed lectus ut elit id lectus diam massa nisl pretium. Sagittis, adipiscing maecenas lorem ullamcorper. Faucibus netus sed varius loborti orbi sit sit." />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Roadmap