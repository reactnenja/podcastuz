import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import CoverOne from "../../../../assets/cover-1.png";
import CoverTwo from "../../../../assets/cover-2.png";
import CoverThree from "../../../../assets/cover-3.png";
import CoverFive from "../../../../assets/cover-4.png";
import CoverFifty from "../../../../assets/cover-5.png";
import ImagesPodcastTwo from "../../../../assets/google-2.png";
import ImagesPodcastOne from "../../../../assets/spotfy-1.png";
import ImagesPodcastThree from "../../../../assets/youtube-3.png";
import "./index.scss";
const Hero = () => {
    const [images] = useState([
        { id: "1", images: CoverOne, imagesAlt: "Marquee images carousel" },
        { id: "2", images: CoverTwo, imagesAlt: "Marquee images carousel" },
        { id: "3", images: CoverThree, imagesAlt: "Marquee images carousel" },
        { id: "4", images: CoverFive, imagesAlt: "Marquee images carousel" },
        { id: "5", images: CoverFifty, imagesAlt: "Marquee images carousel" },
    ]);

    return (
        <div className="w-full pt-[100px] hero">
            <div className="container mx-auto px-4 sm:px-8 md:px-16  sm:mb-[60px]">
                <div className="pt-16 sm:pt-24 md:pt-[105px] mb-[100px] flex flex-col gap-8 items-center">
                    <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold text-center pb-4">
                        Your Daily <br />
                        <span className="text-[#CD4631]">Podcast</span>
                    </h1>
                    <p className="text-lg sm:text-xl font-semibold text-center w-full max-w-md">
                        We cover all kinds of categories and a weekly special
                        guest.
                    </p>
                    <button className="btn py-2 px-4 sm:py-3 sm:px-6 md:py-4 md:px-8 border-2 border-black bg-black rounded-md text-white font-semibold">
                        SUBSCRIBE
                    </button>
                </div>
                <div className="flex gap-4 justify-between items-center mt-12 py-10 border-t-2 border-b-2 border-black">
                    <h3 className="text-3xl font-semibold text-black">
                        Supported by:
                    </h3>
                    <div className="grid grid-cols-3 gap-2 sm:gap-4 ">
                        <Link to="https://ulugbekeshnazarov.uz">
                            <img
                                className="hover:scale-125 transition-transform duration-500 cursor-pointer"
                                src={ImagesPodcastOne}
                                alt="podcast social logo"
                            />
                        </Link>
                        <Link to="https://ulugbekeshnazarov.uz">
                            <img
                                className="hover:scale-125 transition-transform duration-500 cursor-pointer"
                                src={ImagesPodcastTwo}
                                alt="podcast social logo"
                            />
                        </Link>
                        <Link to="https://ulugbekeshnazarov.uz">
                            <img
                                className="hover:scale-125 transition-transform duration-500 cursor-pointer"
                                src={ImagesPodcastThree}
                                alt="podcast social logo"
                            />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="py-40">
                <Marquee>
                    {images.map((item) => (
                        <div
                            key={item.id}
                            className="flex-shrink-0 px-2 sm:px-3 md:px-4"
                        >
                            <img
                                src={item.images}
                                alt={item.imagesAlt}
                                className="object-cover"
                            />
                        </div>
                    ))}
                </Marquee>
            </div>
        </div>
    );
};

export default Hero;
