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
        <div className="flex justify-between items-center max-w-[1140px] mx-auto px-4 pt-3">
            <button onClick={handleOpen}
                className={`hidden size-6 justify-center max-lg:absolute max-lg:right-4 relative z-[60] max-lg:flex flex-col overflow-hidden`}>
                <span className={`w-6 transition-all duration-300 h-[1.9px] bg-white mb-1 rounded-md relative after:w-full after:h-full after:bg-white after:absolute after:top-0 after:left-0 after:rounded-md ${open ? "rotate-45 after:rotate-90" : ""}`}></span>
                <span className={`w-6 transition-all duration-300 h-[2.333px] bg-white rounded-md mb-1 ${open ? "hidden" : ""}`}></span>
                <span className={`w-6 transition-all duration-300 h-0.5 bg-white rounded-md ${open ? "-translate-x-10" : ""}`}></span>
            </button>
            <a href="/">
                <img className="xl:max-w-[156px] lg:max-w-32 max-w-24 max-h-[72px]" src={pageLogo} alt="page-logo" />
            </a>
            <div className={`flex xl:gap-[30px] lg:gap-7 gap-6 !text-black max-lg:text-white lg:max-h-max max-lg:fixed max-lg:top-0 max-lg:h-full max-lg:w-full max-lg:flex-col max-lg:bg-black max-lg:duration-300 max-lg:justify-center max-lg:items-center z-40 ${open ? "max-lg:left-0" : "max-lg:left-full"}`}>
                {HEADER_LIST.map((obj, i) => (
                    <div key={i}>
                        <a onClick={handleOpen} className="text-white hover:underline underline-offset-2" href={obj.link}> {obj.title}</a>
                    </div>
                ))}
                <span onClick={handleOpen}>
                    <p></p>
                </span>
            </div>
            <div className="flex lg:gap-[19px] gap-4">
                <a className="border border-black hover:scale-[1.09] transition-all ease-linear duration-300 rounded-full justify-center items-center p-[10px]" href=""><TwitterLogo /></a>
                <a className="border border-black hover:scale-[1.09] transition-all ease-linear duration-300 rounded-full justify-center items-center p-[10px]" href=""><InstagramLogo /></a>
                <a className="border border-black hover:scale-[1.09] transition-all ease-linear duration-300 rounded-full justify-center items-center p-[10px]" href=""><DiscordLogo /></a>
            </div>
        </div>
    );
};

export default Header;
