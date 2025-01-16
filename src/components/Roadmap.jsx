import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import Description from '../common/Description'
import CustomHeading from '../common/CustomHeading'
import SmallHorseImg from '../assets/images/png/small-flying-horse-img.png'
import RoadmapLayerImg from '../assets/images/png/roadmap-layer-img.png'
import RoadmapLayerImgTwo from '../assets/images/png/roadmap-layer-img-2.png'
import RoadmapCloudImgTwo from '../assets/images/png/roadmap-bg-clouds-2.png'
import StarImgThree from '../assets/images/png/stars-img-3.png'
import StarImgFour from '../assets/images/png/stars-img-4.png'

const Roadmap = () => {
    useEffect(() => {
        AOS.init({
            duration: 1200,
            easing: "ease-in-out",
            once: false,
            offset: 100,
        });
    }, []);
    return (
        <div className="relative">
            <img className='star-img-2 2xl:max-w-[361px] xl:max-w-xs lg:max-w-64 md:max-w-48 max-w-36 absolute left-0 lg:-bottom-[34%] bottom-0' src={StarImgThree} alt=" start-img-3" />
            <img className='star-img 2xl:max-w-[361px] xl:max-w-xs lg:max-w-64 md:max-w-48 max-w-36 absolute right-0 lg:bottom-0 -top-[25%]' src={StarImgFour} alt=" start-img-4" />
            <img className='star-img 2xl:max-w-[361px] xl:max-w-xs lg:max-w-64 md:max-w-48 max-w-36 absolute right-0 -bottom-[55%]' src={StarImgFour} alt=" start-img-4" />
            <div className='max-w-[1320px] flex mx-auto flex-col justify-center items-center'>
                <span className='relative max-w-max flex justify-center items-center'>
                    <CustomHeading className="xl:mb-[261px] lg:mb-60 mb-48" title="roadmap" />
                    <img className='max-w-[118px] w-full absolute -right-12 -top-14' src={SmallHorseImg} alt="small-horse-img" />
                </span>

                <div className="w-full max-xl:px-4 mx-auto flex flex-col pl-[42px] justify-center items-center relative">

                    <img className='xl:max-w-[755px] max-w-2xl w-full absolute xl:block max-xl:hidden mx-auto -z-20 xl:-top-36 lg:-top-40' src={RoadmapLayerImg} alt="layer-img" />
                    <img className='lg:max-w-sm max-w-lg w-full absolute opacity-40 max-xl:block xl:hidden mx-auto -z-20 -top-28' src={RoadmapLayerImgTwo} alt="layer-img-2" />

                    <div data-aos="zoom-in-up" className="flex relative z-10 w-full lg:mb-[61px] xl:pl-20 max-xl:pl-32 max-lg:pl-24 max-md:pl-14 max-sm:pl-10 mb-40">
                        <img className='lg:max-w-[500px] md:max-w-sm max-w-[340px] absolute lg:left-0 lg:-top-16 max-lg:left-8 max-md:left-1 max-sm:-left-2 max-lg:-top-14 xl:hidden lg:block' src={RoadmapCloudImgTwo} alt="cloud-img" />
                        <div className='sm:mr-auto max-w-[451px] relative z-10 !leading-[115%] xl:min-w-[205px] !w-full'>
                            <h2 className='xl:mb-[15px] md:!leading-[115%] xl:text-[40px] lg:text-4xl md:text-3xl text-2xl'>Phase 1</h2>
                            <Description className="font-comic xl:!text-lg lg:!text-base !leading-[174%] xl:!leading-[32px] lg:block max-lg:hidden xl:max-w-[400px] max-w-xs" title="Sed lectus ut elit id lectus diam massa nisl pretium. Sagittis, adipiscing maecenas lorem ullamcorper. Faucibus netus sed varius loborti orbi sit sit magna lorem arcu." />
                            <Description className="font-comic lg:hidden max-lg:block !text-xs xl:max-w-[400px] max-w-[270px]" title="Sed lectus ut elit id lectus diam massa nisl preti Sagittis, adipiscing maecenas lorem ullamcorper. Faucibus netus sed varius loborti orbi." />
                        </div>
                    </div>

                    <div data-aos="zoom-in-up" className="flex relative z-10 w-full xl:mb-[66px] lg:mb-8 mb-40">
                        <img className='lg:max-w-[520px] md:max-w-sm max-w-[340px] absolute lg:!right-8 lg:!-top-20 max-lg:right-20 max-md:-right-3 max-lg:-top-14 xl:hidden lg:block' src={RoadmapCloudImgTwo} alt="cloud-img" />
                        <div className='ml-auto xl:max-w-[451px] lg:max-w-[420px] md:max-w-sm max-w-[270px] relative z-10 !leading-[115%] xl:min-w-[205px] w-full'>
                            <h2 className='xl:mb-[15px] md:!leading-[115%] xl:text-[40px] lg:text-4xl md:text-3xl text-2xl'>Phase 2</h2>
                            <Description className="font-comic xl:!text-lg lg:!text-base !leading-[174%] xl:!leading-[32px] lg:block max-lg:hidden xl:max-w-[360px] max-w-xs" title="Sed lectus ut elit id lectus diam massa nisl pretium. Sagittis, adipiscing maecenas lorem ullamcorper. Faucibus netus sed varius loborti orbi sit sit magna lorem arcu." />
                            <Description className="font-comic lg:hidden max-lg:block !text-xs xl:max-w-[360px] max-w-[270px]" title="Sed lectus ut elit id lectus diam massa nisl preti Sagittis, adipiscing maecenas lorem ullamcorper. Faucibus netus sed varius loborti orbi." />
                        </div>
                    </div>

                    <div data-aos="zoom-in-up" className="flex relative z-10 w-full xl:mb-[22px] lg:mb-7 xl:pl-20 max-xl:pl-32 max-lg:pl-24 max-md:pl-14 max-sm:pl-10 mb-40">
                        <img className='lg:max-w-[500px] md:max-w-sm max-w-[340px] absolute lg:left-0 lg:-top-16 max-lg:left-8 max-md:left-1 max-sm:-left-2 max-lg:-top-14 xl:hidden lg:block' src={RoadmapCloudImgTwo} alt="cloud-img" />
                        <div className='sm:mr-auto max-w-[451px] relative z-10 !leading-[115%] xl:min-w-[205px] w-full'>
                            <h2 className='xl:mb-[15px] md:!leading-[115%] xl:text-[40px] lg:text-4xl md:text-3xl text-2xl'>Phase 3</h2>
                            <Description className="font-comic xl:!text-lg lg:!text-base !leading-[174%] xl:!leading-[32px] lg:block max-lg:hidden xl:max-w-[340px] max-w-xs" title="Sed lectus ut elit id lectus diam massa nisl pretium. Sagittis, adipiscing maecenas lorem ullamcorper. Faucibus netus sed varius loborti orbi sit sit magna lorem arcu." />
                            <Description className="font-comic lg:hidden max-lg:block !text-xs xl:max-w-[340px] max-w-[270px]" title="Sed lectus ut elit id lectus diam massa nisl preti Sagittis, adipiscing maecenas lorem ullamcorper. Faucibus netus sed varius loborti orbi." />
                        </div>
                    </div>

                    <div data-aos="zoom-in-up" className="flex relative z-10 w-full lg:mb-[61px] mb-40">
                        <img className='lg:max-w-[520px] md:max-w-sm max-w-[340px] absolute lg:!right-8 lg:!-top-20 max-lg:right-20 max-md:-right-3 max-lg:-top-14 xl:hidden lg:block' src={RoadmapCloudImgTwo} alt="cloud-img" />
                        <div className='ml-auto xl:max-w-[451px] lg:max-w-[420px] md:max-w-sm max-w-[270px] relative z-10 !leading-[115%] xl:pl-10 xl:min-w-[205px] w-full'>
                            <h2 className='xl:mb-[15px] md:!leading-[115%] xl:text-[40px] lg:text-4xl md:text-3xl text-2xl'>Phase 4</h2>
                            <Description className="font-comic xl:!text-lg lg:!text-base !leading-[174%] xl:!leading-[32px] lg:block max-lg:hidden xl:max-w-[360px] max-w-xs" title="Sed lectus ut elit id lectus diam massa nisl pretium. Sagittis, adipiscing maecenas lorem ullamcorper. Faucibus netus sed varius loborti orbi sit sit magna lorem arcu." />
                            <Description className="font-comic lg:hidden max-lg:block !text-xs xl:max-w-[360px] max-w-[270px]" title="Sed lectus ut elit id lectus diam massa nisl preti Sagittis, adipiscing maecenas lorem ullamcorper. Faucibus netus sed varius loborti orbi." />
                        </div>
                    </div>

                    <div data-aos="zoom-in-up" className="flex relative z-10 w-full xl:pl-20 max-xl:pl-32 max-lg:pl-24 max-md:pl-14 max-sm:pl-10 mb-40">
                        <img className='lg:max-w-[500px] md:max-w-sm max-w-[340px] absolute lg:left-0 lg:-top-16 max-lg:left-8 max-md:left-1 max-sm:-left-2 max-lg:-top-14 xl:hidden lg:block' src={RoadmapCloudImgTwo} alt="cloud-img" />
                        <div className='sm:mr-auto max-w-[451px] relative z-10 !leading-[115%] w-full'>
                            <h2 className='xl:mb-[15px] md:!leading-[115%] xl:text-[40px] lg:text-4xl md:text-3xl text-2xl'>Phase 5</h2>
                            <Description className="font-comic xl:!text-lg lg:!text-base !leading-[174%] xl:!leading-[32px] lg:block max-lg:hidden max-w-[323px]" title="Sed lectus ut elit id lectus diam massa nisl pretium. Sagittis, adipiscing maecenas lorem ullamcorper. Faucibus netus sed varius loborti orbi sit sit." />
                            <Description className="font-comic lg:hidden max-lg:block !text-xs max-w-[270px]" title="Sed lectus ut elit id lectus diam massa nisl preti Sagittis, adipiscing maecenas lorem ullamcorper. Faucibus netus sed varius loborti orbi." />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Roadmap