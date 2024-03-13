'use client';
import {useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

// import picture1 from '../../public/images/'

export default function Showreel() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    });
    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
    const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
    const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
    const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
    const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);
    const pictures = [
        {src: "https://images.unsplash.com/photo-1504600770771-fb03a6961d33?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", scale: scale4},
        {src: "https://images.unsplash.com/photo-1504600770771-fb03a6961d33?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", scale: scale5},
        {src: "https://images.unsplash.com/photo-1504600770771-fb03a6961d33?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", scale: scale6},
        {src: "https://images.unsplash.com/photo-1504600770771-fb03a6961d33?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", scale: scale6},
        {src: "https://images.unsplash.com/photo-1504600770771-fb03a6961d33?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", scale: scale8},
        {src: "https://images.unsplash.com/photo-1504600770771-fb03a6961d33?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", scale: scale9},
        {src: "https://images.unsplash.com/photo-1504600770771-fb03a6961d33?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", scale: scale5},
        {src: "https://images.unsplash.com/photo-1504600770771-fb03a6961d33?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", scale: scale8},
    ]

    return (
        <section className="relative bg-black min-h-screen">
            {/* <div className="reels"></div> */}
            <div className="h-[300vh] relative">
                <div className="ely sticky top-0 h-[100vh] bg-orange-600 overflow-hidden">
                    <div className="sticky z-40 top-1/2">
                        <div className="absolute z-40 right-[50%] bottom-[50%] translate-x-1/2 translate-y-1/2 flex flex-col gap-2 items-center p-8 rounded-2xl bg-gray-800 backdrop-filter backdrop-blur-sm bg-opacity-60">
                            <h2 className="text-gray-100 text-5xl font-semibold">Essential Network</h2>
                            <p className="text-gray-300 text-xl">If we do, we do big.</p>
                        </div>
                    </div>
                    {pictures.map(({src, scale}, index) => {
                        return (
                            <div key={index} className="el w-full h-full absolute top-0 flex items-center justify-center">
                                <motion.div style={{scale}} className="imgContainer w-[20vw] h-[20vh] relative">
                                    <img className="object-cover" src={src} alt="image" />
                                </motion.div>
                            </div>
                        )
                    })}
                    {/* <div className="el w-full h-full absolute top-0 flex items-center justify-center">
                        <motion.div style={{scale: scale4}} className="imgContainer w-[25vw] h-[25vh] relative">
                            <img className="object-cover" src="https://images.unsplash.com/photo-1504600770771-fb03a6961d33?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" fill alt="image" placeholder='blur' />
                        </motion.div>
                    </div> */}
                </div>
            </div>
        </section>
    )
}
