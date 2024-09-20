import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

export const ParallaxHero = () => {
    return (
        <div className="bg-white dark:bg-slate-900 dark:text-white">
            <TextParallaxContent
                imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmLsz_vVa-1cVlkGKak7i4VV-Ik7Iv4kbUOw&s"
                subheading="Managable System"
                heading="Built for all of us."
            >
                <ExampleContent />
            </TextParallaxContent>
            <TextParallaxContent
                imgUrl="https://cdn-icons-png.flaticon.com/512/7656/7656409.png"
                subheading="Quality"
                heading="Never compromise."
            >
                <ExampleContent />
            </TextParallaxContent>
            <TextParallaxContent
                imgUrl="https://i0.wp.com/www.globaltrademag.com/wp-content/uploads/2022/04/shutterstock_585073000-scaled.jpg?fit=2560%2C1706&ssl=1"
                subheading="Modern"
                heading="Give for the best."
            >
                <ExampleContent />
            </TextParallaxContent>
        </div>
    );
};

const IMG_PADDING = 12;

const TextParallaxContent = ({ imgUrl, subheading, heading, children }) => {
    return (
        <div
            style={{
                paddingLeft: IMG_PADDING,
                paddingRight: IMG_PADDING,
            }}
        >
            <div className="relative h-[150vh]">
                <StickyImage imgUrl={imgUrl} />
                <OverlayCopy heading={heading} subheading={subheading} />
            </div>
            {children}
        </div>
    );
};

const StickyImage = ({ imgUrl }) => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["end end", "end start"],
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    return (
        <motion.div
            style={{
                backgroundImage: `url(${imgUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: `calc(100vh - ${IMG_PADDING * 2}px)`,
                top: IMG_PADDING,
                scale,
            }}
            ref={targetRef}
            className="sticky z-0 overflow-hidden rounded-3xl"
        >
            <motion.div
                className="absolute inset-0 bg-neutral-950/70"
                style={{
                    opacity,
                }}
            />
        </motion.div>
    );
};

const OverlayCopy = ({ subheading, heading }) => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
    const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

    return (
        <motion.div
            style={{
                y,
                opacity,
            }}
            ref={targetRef}
            className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
        >
            <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
                {subheading}
            </p>
            <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
        </motion.div>
    );
};

const ExampleContent = () => (
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
        <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
            Additional content explaining the above card here
        </h2>
        <div className="col-span-1 md:col-span-8">
            <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
            Inventory management is a critical aspect of any retail or business operation, focusing on overseeing and 
            controlling stock levels to meet customer demand while minimizing excess inventory. It involves key components such as stock control,
             order management, warehouse organization, inventory valuation, and data analytics. Your project, Storify, is an inventory
             management system tailored for shop owners and large marts, designed with a user-friendly interface using React and Tailwind CSS. 
            </p>
            <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
            Inventory management involves overseeing and controlling a company's inventory levels, ensuring that there 
            is enough stock to meet customer demand while minimizing excess inventory. 
            </p>
        
        </div>
    </div>
);