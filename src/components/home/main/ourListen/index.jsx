import React, { useState } from "react";

import { MdArrowForwardIos } from "react-icons/md";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ImagesQuote from "../../../../assets/quote.svg";
import SlideAvatarsOne from "../../../../assets/slide-avatar-1.png";
import SlideAvatarsTwo from "../../../../assets/slide-avatar-2.png";
import SlideAvatarsThree from "../../../../assets/slide-avatar-3.png";
import SlideIconsOne from "../../../../assets/slider-icons-1.svg";
import SlideIconsTwo from "../../../../assets/slider-icons-2.svg";
import SlideIconsThree from "../../../../assets/slider-icons-3.svg";
const feedbackData = [
    {
        slideAvatar: SlideAvatarsOne,
        text: "Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        name: "Luna Lovegood",
        icons: SlideIconsOne,
        platform: "Spotify",
    },
    {
        slideAvatar: SlideAvatarsTwo,
        text: "Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        name: "Emily Blunt",
        icons: SlideIconsTwo,
        platform: "Google Podcast",
    },
    {
        slideAvatar: SlideAvatarsThree,
        text: "Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        name: "Emily Blunt",
        icons: SlideIconsThree,
        platform: "Apple Podcast",
    },
    {
        slideAvatar: SlideAvatarsOne,
        text: "Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        name: "Luna Lovegood",
        icons: SlideIconsOne,
        platform: "Spotify",
    },
    {
        slideAvatar: SlideAvatarsTwo,
        text: "Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        name: "Emily Blunt",
        icons: SlideIconsTwo,
        platform: "Google Podcast",
    },
    {
        slideAvatar: SlideAvatarsThree,
        text: "Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        name: "Emily Blunt",
        icons: SlideIconsThree,
        platform: "Apple Podcast",
    },
    {
        slideAvatar: SlideAvatarsOne,
        text: "Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        name: "Luna Lovegood",
        icons: SlideIconsOne,
        platform: "Spotify",
    },
    {
        slideAvatar: SlideAvatarsTwo,
        text: "Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        name: "Emily Blunt",
        icons: SlideIconsTwo,
        platform: "Google Podcast",
    },
    {
        slideAvatar: SlideAvatarsThree,
        text: "Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        name: "Emily Blunt",
        icons: SlideIconsThree,
        platform: "Apple Podcast",
    },

    // Add more feedback items as needed
];

const FeedbackSlider = () => {
    const [swiper, setSwiper] = useState(null);

    return (
        <div className="bg-[#EDF3F7] w-full h-screen flex items-center justify-center flex-col py-16">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex items-center justify-center mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                    <h2 className="text-5xl font-bold">
                        What our listeners say
                    </h2>
                </div>
                <p className="text-gray-600 text-center text-xl mb-12">
                    Their experience throughout every platform
                </p>
            </div>

            <div className="relative w-full">
                <Swiper
                    spaceBetween={20}
                    slidesPerView="auto"
                    modules={[Navigation]}
                    onSwiper={setSwiper}
                    className="w-[100%] lg:pl-[250px] sm:pl-6"
                >
                    {feedbackData.map((feedback, index) => (
                        <SwiperSlide
                            key={index}
                            className="!w-[760px] cursor-pointer"
                        >
                            <div className="bg-white p-8 w-[700px] border h-[450px]  rounded-lg shadow-md">
                                <div className="flex justify-start ">
                                    <div className="flex justify-center w-[200px] mb-8 px-4 py-16 rounded-md hover:bg-white transition-all duration-500 hover:shadow-md">
                                        <img
                                            src={ImagesQuote}
                                            alt="Quote"
                                            className="w-16 h-16"
                                        />
                                    </div>
                                </div>
                                <blockquote className="text-lg mb-4 font-medium">
                                    "{feedback.text}"
                                </blockquote>
                                <div className="flex items-center gap-4">
                                    <img
                                        src={feedback.slideAvatar}
                                        alt={feedback.name}
                                        ty
                                        className="w-[80px] h-[80px] rounded-full mr-4"
                                    />
                                    <div>
                                        <div className="flex gap-3 items-center">
                                            <p className="font-semibold">
                                                {feedback.name}
                                            </p>
                                            <img
                                                src={feedback.icons}
                                                alt={feedback.platform}
                                                className="w-28 h-28 mr-2"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="absolute left-[250px] sm:left-8 top-[520px] transform -translate-y-1/2 flex gap-4">
                    <button
                        onClick={() => swiper?.slidePrev()}
                        className="bg-[#F7EDE8] text-black border-2 shadow-md  border-[#F7EDE8] hover:border-black  rounded-full p-3  h-20 w-20  flex justify-center items-center  hover:bg-transparent"
                    >
                        <MdArrowForwardIos className="text-2xl transform rotate-180" />
                    </button>
                    <button
                        onClick={() => swiper?.slideNext()}
                        className="bg-[#F7EDE8] text-black border-2 shadow-md  border-[#F7EDE8] hover:border-black  rounded-full p-3 h-20 w-20 flex justify-center items-center  hover:bg-transparent"
                    >
                        <MdArrowForwardIos className="text-2xl" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FeedbackSlider;
