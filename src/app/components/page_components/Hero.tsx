'use client'
import { useEffect, useState } from "react";
import ASButton from "../atom/ASButton"
import ASText from "../atom/ASText"
import Image from "next/image";

const Hero = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);
        return () => clearInterval(intervalId);
    }, []);
    const images = [
        'https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg',
        'https://images.pexels.com/photos/3027431/pexels-photo-3027431.jpeg',
        'https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg',
        'https://images.pexels.com/photos/2082091/pexels-photo-2082091.jpeg',
        'https://images.pexels.com/photos/2428271/pexels-photo-2428271.jpeg',
    ];
    return (
        <main className="h-[500px] bg-white relative ">
            <section className="container mx-auto flex justify-between items-center relative">
                <div className="w-[491px]">
                    <ASText text='SINC Partners is a service incubation company' className={'font-medium text-[32px] text-[#212121]'} />
                    <ASText text='Connecting experts in product development and growth marketing willing to offer their services to amazing startups in exchange for minute equity (usually 0.5% to 2%).' className={'font-normal text-[24px]  text-[#4E4E4E] mt-2'} />
                    <ASButton name="SINC With us" className="bg-[#303030] text-white px-8 py-4 rounded-full mt-6" />
                </div>
                <div className="w-[50%]">
                    <img src={images[currentImageIndex]} alt="Hero" className=" w-full h-[500px] object-cover" />
                </div>
            </section>
              <div className="flex gap-2 justify-center absolute bottom-0 w-full">
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`w-3 h-3 rounded-full ${index === currentImageIndex ? 'bg-black' : 'bg-gray-300'}`}
                    ></div>
                ))}
              </div>
        </main>
    )
}

export default Hero