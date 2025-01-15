import React, { useState, useEffect } from "react";
import pageLogo from "./../assets/images/png/header-logo.png";
import { HEADER_LIST } from "../utils/helper";
import { DiscordLogo, InstagramLogo, TwitterLogo } from "../utils/icons";

const Header = () => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (open && window.innerWidth < 1024) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);


    const handleOpen = () => {
        setOpen(!open);
    };

    return (
        <div className="flex justify-between items-center max-w-[1320px] mx-auto max-xl:px-4 pt-1.5 xl:pb-[165px] lg:pb-[100px] md:pb-[70px] pb-[40px]">
            <button onClick={handleOpen} className={`hidden size-7 justify-center max-lg:absolute max-lg:right-4 relative z-[60] max-lg:flex flex-col overflow-hidden`}>
                <span className={`w-6 transition-all duration-300 min-h-[2px] max-h-[2px] mb-1 bg-black relative after:w-full after:h-full  after:absolute after:top-0 after:left-0 ${open ? "rotate-45 after:rotate-90 after:bg-white !bg-white" : ""}`}></span>
                <span className={`w-6 transition-all duration-300 min-h-[2px] max-h-[2px] mb-1 bg-black ${open ? "hidden" : ""}`}></span>
                <span className={`w-6 transition-all duration-300 min-h-[2px] max-h-[2px] mb-1 bg-black after:!bg-white ${open ? "-translate-x-10 !bg-white" : ""}`}></span>
            </button>
            <a href="/">
                <img className="xl:max-w-[85px] lg:max-w-20 max-w-16 max-h-[88px]" src={pageLogo} alt="page-logo" />
            </a>
            <div className={`flex xl:gap-[30px] lg:gap-7 gap-6 !text-black lg:max-h-max max-lg:fixed max-lg:top-0 max-lg:h-full max-lg:w-full max-lg:flex-col max-lg:bg-hero-pattern max-lg:duration-300 max-lg:justify-center max-lg:items-center z-40 ${open ? "max-lg:left-0" : "max-lg:left-full"}`}>
                {HEADER_LIST.map((obj, i) => (
                    <div key={i}>
                        <a onClick={handleOpen} className="hover:underline uppercase underline-offset-2 lg:text-[22px] !leading-[109.6%] text-black max-lg:text-white" href={obj.link}> {obj.title}</a>
                    </div>
                ))}
                <div className="lg:hidden max-lg:block">
                    <div className="flex lg:gap-[19px] gap-4 ">
                        <a className="border border-black bg-white hover:scale-[1.09] transition-all ease-linear duration-300 rounded-full justify-center items-center p-1.5" href=""><TwitterLogo /></a>
                        <a className="border border-black bg-white hover:scale-[1.09] transition-all ease-linear duration-300 rounded-full justify-center items-center p-1.5" href=""><InstagramLogo /></a>
                        <a className="border border-black bg-white hover:scale-[1.09] transition-all ease-linear duration-300 rounded-full justify-center items-center p-1.5" href=""><DiscordLogo /></a>
                    </div>
                </div>
            </div>
            <div className="lg:block max-lg:hidden">
                <div className="flex lg:gap-[19px] gap-4 ">
                    <a className="border border-black hover:scale-[1.09] transition-all ease-linear duration-300 rounded-full justify-center items-center p-[10px]" href=""><TwitterLogo /></a>
                    <a className="border border-black hover:scale-[1.09] transition-all ease-linear duration-300 rounded-full justify-center items-center p-[10px]" href=""><InstagramLogo /></a>
                    <a className="border border-black hover:scale-[1.09] transition-all ease-linear duration-300 rounded-full justify-center items-center p-[10px]" href=""><DiscordLogo /></a>
                </div>
            </div>
        </div>
    );
};

export default Header;
