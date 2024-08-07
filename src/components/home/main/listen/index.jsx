import React from "react";
import SpotfyIcons from "../../../../assets/icons-spotfy.svg";
import IconsImagesOne from "../../../../assets/icons-svg-1.svg";
import IconsImagesTwo from "../../../../assets/icons-svg-2.svg";
import JohnSmith from "../../../../assets/johnsmith.png";
import ImagesOfLine from "../../../../assets/line-6.svg";
import QuoteImages from "../../../../assets/quote.svg";
import StartsImages from "../../../../assets/stars-6.svg";
const ListenGroup = () => {
    return (
        <div className="bg-[#]">
            <div className="mx-auto container px-8">
                <div className="py-[120px]">
                    <div className="mb-20">
                        <h3 className="text-center text-[59px] mb-20 font-bold">
                            Talk. Listen. Get inspired <br /> by every minute of
                            it.
                        </h3>
                        <div className="flex gap-6 justify-between items-center ">
                            <div className="w-[672px] h-auto duration-500 transition-all hover:scale-110  hover:shadow-md text-center flex flex-col p-4 rounded-md hover:border justify-center items-center  gap-4 bg-white ">
                                <img
                                    src={IconsImagesOne}
                                    className="object-cover w-[275px]"
                                    alt="images"
                                />
                                <p className="text-xl font-medium text-black">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Curabitur ac ultrices odio.{" "}
                                </p>
                            </div>
                            <div className="w-[672px] h-auto duration-500 transition-all hover:scale-110  hover:shadow-md text-center flex flex-col p-4 rounded-md hover:border justify-center items-center gap-4 bg-white ">
                                <img
                                    src={IconsImagesTwo}
                                    className="object-cover w-[275px]"
                                    alt="images"
                                />
                                <p className="text-xl font-medium text-black">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Curabitur ac ultrices odio.{" "}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-[200px]">
                        <div className="w-full bg-[#F7EDE8] h-[400px] relative hover:scale-125 transition-all cursor-pointer duration-700 rounded-md p-8">
                            <div className="absolute right-[-70px] top-[-70px] ">
                                <img
                                    src={StartsImages}
                                    className="w-[200px] h-[200px]"
                                    alt="stars"
                                />
                            </div>
                            <div className="flex justify-center items-center mb-[40px]">
                                <img
                                    src={QuoteImages}
                                    className="w-20 h-20"
                                    alt="images of quote"
                                />
                            </div>
                            <div className="flex justify-center">
                                <h2 className=" w-[850px] text-4xl font-bold text-black  text-center">
                                    One of the best daily podcasts that covers
                                    every topic on Spotify.
                                </h2>
                            </div>
                            <div className="absolute left-[-60px] bottom-[70px]">
                                <img src={ImagesOfLine} alt="line images" />
                            </div>

                            <div className="flex justify-center items-center py-20">
                                <div className="flex justify-start gap-2">
                                    <div className="flex gap-4 items-center justify-center">
                                        <img
                                            src={JohnSmith}
                                            className="rounded-full object-cover w-10 h-10 "
                                            alt=""
                                        />
                                        <h4 className="font-semibold font-sans text-xl">
                                            John Smith
                                        </h4>
                                    </div>
                                    <div className="flex  gap-1 items-center justify-center">
                                        <img
                                            src={SpotfyIcons}
                                            className=" object-cover w-4 h-4 "
                                            alt="spotfy icons "
                                        />
                                        <p className="font-bold font-sans text-xl">
                                            Social Community Manager
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListenGroup;
