'use client';
import {useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

import Pic1 from './../../public/pic1.jpg';
import Pic2 from './../../public/pic2.jpg';

export default function Showreel() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['center', 'end end']
    });
    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
    const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
    const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
    const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
    const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);
    const pictures = [
        {src: Pic1, scale: scale4},
        {src: Pic2, scale: scale5},
        {src: Pic1, scale: scale6},
        {src: Pic2, scale: scale5},
        {src: Pic2, scale: scale6},
        {src: Pic2, scale: scale8},
        {src: Pic2, scale: scale9},
        // {src: Pic2, scale: scale8},
    ];

    return (
        <section className="relative bg-black min-h-screen">
            {/* <div className="reels"></div> */}
            <div className="h-[300vh] relative">
                <div className="sticky z-40 top-1/2 -translate-y-16">
                    <div className="absolute z-40 right-[50%] bottom-[50%] translate-x-1/2 translate-y-1/2 flex flex-col gap-2 items-center p-8 rounded-2xl bg-gray-950 backdrop-filter backdrop-blur-sm bg-opacity-60 max-sm:p-4 text-center max-sm:w-[80vw]">
                        <h2 className="text-gray-50 text-5xl max-sm:text-2xl font-semibold">Essential Network</h2>
                        <p className="text-gray-300 text-xl">If we do, we do big.</p>
                    </div>
                </div>
                <div className="sticky top-0 h-[100vh] bg-orange-300 overflow-hidden">
                    {pictures.map(({src, scale}, index) => {
                        return (
                            <motion.div key={index} style={{scale}} className="el w-full h-full absolute top-0 flex items-center justify-center">
                                <div className="imgContainer w-[25vw] h-[25vh] relative">
                                    <Image className="object-cover" src={src} fill alt="image" placeholder='blur' />
                                </div>
                            </motion.div>
                        )
                    })}
                    {/* <div className="el w-full h-full absolute top-0 flex items-center justify-center">
                        <motion.div style={{scale: scale4}} className="imgContainer w-[25vw] h-[25vh] relative">
                            <img className="object-cover" src=pic2 fill alt="image" placeholder='blur' />
                        </motion.div>
                    </div> */}
                </div>
            </div>
        </section>
    )
}
