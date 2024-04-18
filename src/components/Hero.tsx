"use client"
import dev from "@/assets/dev.json"
import Lottie from "lottie-react";
import HeroButton from "./HeroButtons";

export default function Hero() {
    return (
        <div className="flex flex-col items-center justify-center text-white px-10 h-screen w-screen">
            <Lottie animationData={dev} loop={true} className="h-3/5"/>
            <div className="text-white font-normal md:text-[20px] text-[15px]">
                Wellcome to my portfolio!</div>
            <div
                className="text-white font-semibold md:text-[55px] text-[40px] text-center">
                Hello, my name is <span className="bg-gradient-to-r from-purple-700 via-purple-400 to-purple-300 text-transparent bg-clip-text">Serhat&apos;</span>.</div>
            <div className="text-white font-normal md:text-[25px] text-[20px] pb-4">
                I am a <span className="bg-gradient-to-r from-purple-700 via-purple-400 to-purple-300 text-transparent bg-clip-text">frontend developer</span> from Turkey</div>
            <div className="flex items-center justify-center text-white w-screen pb-12">
                <HeroButton name="Contact" redirect="/contact" />
                <HeroButton name="Hire Me" redirect="/hire" />
            </div>
        </div>
    );
}
