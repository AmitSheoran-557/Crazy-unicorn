import React from 'react'
import Description from '../common/Description'
import CustomHeading from '../common/CustomHeading'
import SmallHorseImg from '../assets/images/png/small-flying-horse-img.png'
import RoadmapLayerImg from '../assets/images/png/roadmap-layer-img.png'
import RoadmapCloudImg from '../assets/images/png/roadmap-bg-clouds.png'
import RoadmapCloudImgTwo from '../assets/images/png/roadmap-bg-clouds-2.png'

const Roadmap = () => {
    return (
        <div className='max-w-[1320px] mx-auto flex flex-col justify-center items-center'>
            <span className='relative max-w-max flex justify-center items-center mx-auto'>
                <CustomHeading className="xl:mb-[261px] mb-60" title="roadmap" />
                <img className='max-w-[118px] w-full absolute -right-12 -top-14' src={SmallHorseImg} alt="small-horse-img" />
            </span>

            <div className="w-full max-lg:max-w-max max-xl:px-4 flex flex-col pl-[42px] justify-center items-center mx-auto relative">

                <img className='xl:max-w-[755px] max-w-2xl w-full absolute lg:block max-lg:hidden mx-auto -z-20 xl:-top-36 lg:-top-40' src={RoadmapLayerImg} alt="layer-img" />

                <div className="flex relative z-10 w-full lg:mb-[61px] max-xl:pl-40">
                    <img className='max-w-[600px] absolute lg:left-4 lg:-top-32 xl:hidden max-xl:block' src={RoadmapCloudImgTwo} alt="cloud-img" />
                    <div className='lg:mr-auto max-w-[451px] relative z-10 !leading-[115%] xl:min-w-[205px] w-full'>
                        <h2 className='xl:mb-[15px] !leading-[174%] xl:text-[40px] lg:text-4xl text-3xl'>Phase 1</h2>
                        <Description className="font-comic lg:text-lg text-base max-w-[400px]" title="Sed lectus ut elit id lectus diam massa nisl pretium. Sagittis, adipiscing maecenas lorem ullamcorper. Faucibus netus sed varius loborti orbi sit sit magna lorem arcu." />
                    </div>
                </div>

                <div className="flex relative z-10 w-full lg:mb-[66px]">
                    <img className='max-w-[600px] absolute lg:right-4 lg:-top-32 xl:hidden max-xl:block' src={RoadmapCloudImg} alt="cloud-img" />
                    <div className='lg:ml-auto max-w-[451px] relative z-10 !leading-[115%] xl:min-w-[205px] w-full'>
                        <h2 className='xl:mb-[15px] !leading-[174%] xl:text-[40px] lg:text-4xl text-3xl'>Phase 2</h2>
                        <Description className="font-comic lg:text-lg text-base max-w-[360px]" title="Sed lectus ut elit id lectus diam massa nisl pretium. Sagittis, adipiscing maecenas lorem ullamcorper. Faucibus netus sed varius loborti orbi sit sit magna lorem arcu." />
                    </div>
                </div>

                <div className="flex relative z-10 w-full lg:mb-[22px] max-xl:pl-40">
                    <img className='max-w-[600px] absolute lg:left-4 lg:-top-32 xl:hidden max-xl:block' src={RoadmapCloudImgTwo} alt="cloud-img" />
                    <div className='lg:mr-auto max-w-[451px] relative z-10 !leading-[115%] xl:min-w-[205px] w-full'>
                        <h2 className='xl:mb-[15px] !leading-[174%] xl:text-[40px] lg:text-4xl text-3xl'>Phase 3</h2>
                        <Description className="font-comic lg:text-lg text-base max-w-[340px]" title="Sed lectus ut elit id lectus diam massa nisl pretium. Sagittis, adipiscing maecenas lorem ullamcorper. Faucibus netus sed varius loborti orbi sit sit magna lorem arcu." />
                    </div>
                </div>

                <div className="flex relative z-10 w-full lg:mb-[61px]">
                    <img className='max-w-[600px] absolute lg:right-4 lg:-top-32 xl:hidden max-xl:block' src={RoadmapCloudImg} alt="cloud-img" />
                    <div className='lg:ml-auto max-w-[451px] relative z-10 !leading-[115%] xl:pl-10 xl:min-w-[205px] w-full'>
                        <h2 className='xl:mb-[15px] !leading-[174%] xl:text-[40px] lg:text-4xl text-3xl'>Phase 4</h2>
                        <Description className="font-comic lg:text-lg text-base max-w-[360px]" title="Sed lectus ut elit id lectus diam massa nisl pretium. Sagittis, adipiscing maecenas lorem ullamcorper. Faucibus netus sed varius loborti orbi sit sit magna lorem arcu." />
                    </div>
                </div>

                <div className="flex relative z-10 w-full max-xl:pl-40">
                    <img className='max-w-[600px] absolute lg:left-4 lg:-top-32 xl:hidden max-xl:block' src={RoadmapCloudImgTwo} alt="cloud-img" />
                    <div className='lg:mr-auto max-w-[451px] relative z-10 !leading-[115%] w-full'>
                        <h2 className='xl:mb-[15px] !leading-[174%] xl:text-[40px] lg:text-4xl text-3xl'>Phase 5</h2>
                        <Description className="font-comic lg:text-lg text-base max-w-[323px]" title="Sed lectus ut elit id lectus diam massa nisl pretium. Sagittis, adipiscing maecenas lorem ullamcorper. Faucibus netus sed varius loborti orbi sit sit." />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Roadmap