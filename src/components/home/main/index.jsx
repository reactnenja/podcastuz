import React from "react";
import ListenGroup from "./listen";
import FeedbackSlider from "./ourListen";

const Main = () => {
    return (
        <main className="w-full h-auto main absolute">
            <div className="relative top-[-80px] flex justify-center items-center">
                <div className=" hover:scale-110 duration-500 transition-all cursor-pointer hover:shadow-md p-4 hover:bg-white rounded-md w-[150px]">
                    <svg
                        width="150"
                        height="154"
                        viewBox="0 0 150 154"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M54 2C54.0002 120.75 82.6905 85.7939 86.822 77.8929C122.305 10.0357 42.4671 47.5357 56.6612 152"
                            stroke="#CD4631"
                            stroke-width="2.5"
                            stroke-linecap="round"
                        />
                    </svg>
                </div>
            </div>
            <ListenGroup />
            <FeedbackSlider />
        </main>
    );
};

export default Main;
