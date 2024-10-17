import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import pic1 from "./img/Ppic1-min.jpg";
import pic2 from "./img/Ppic2-min.jpg";
import pic3 from "./img/Ppic3-min.jpg";

export const ParallaxHero = () => {
    return (
        <div className="bg-[#DDE6ED] dark:bg-[#030637] dark:text-[#EEEDEB]">
            <TextParallaxContent
                imgUrl={pic1}
                subheading="Manageable System"
                heading="Built for all of us."
            >
                <AboutUsContent/>
            </TextParallaxContent>
            <TextParallaxContent
                imgUrl={pic2}
                subheading="Quality"
                heading="Never compromise."
            >
                <FeaturesContent/>
              
            </TextParallaxContent>
            <TextParallaxContent
                imgUrl={pic3}
                subheading="Modern"
                heading="Give for the best."
            >
               <ExampleContent/>
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
                className="absolute inset-0 bg-[#526D82]/70 dark:bg-[#720455]/70"
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
            className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-[#FEFBF6] dark:text-[#EEEDEB]"
        >
            <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
                {subheading}
            </p>
            <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
        </motion.div>
    );
};

const ExampleContent = () => (
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-5 pt-12 md:grid-cols-12">
        <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
            Discover SHELFSHIFT
        </h2>
        <div className="col-span-1 md:col-span-8">
            <p className="mb-4 text-xl text-[#364F6B] dark:text-[#EEEDEB] md:text-2xl">
                Inventory management is a critical aspect of any retail or business operation, focusing on overseeing and controlling stock levels to meet customer demand while minimizing excess inventory. It involves key components such as stock control, order management, warehouse organization, inventory valuation, and data analytics. Your project, ShelfShift, is an inventory management system tailored for shop owners and large marts, designed with a user-friendly interface using React and Tailwind CSS.
            </p>
            <p className="mb-8 text-xl text-[#364F6B] dark:text-[#EEEDEB] md:text-2xl">
                Inventory management involves overseeing and controlling a company's inventory levels, ensuring that there is enough stock to meet customer demand while minimizing excess inventory.
            </p>
        </div>
    </div>
);

const AboutUsContent = () => (
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-5 pt-12 md:grid-cols-12">
        <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
            Our Story
        </h2>
        <div className="col-span-1 md:col-span-8">
            <p className="mb-4 text-xl text-[#364F6B] dark:text-[#EEEDEB] md:text-2xl">
                At ShelfShift, we believe that effective inventory management is the backbone of any successful retail operation. Our team of experts has years of experience in developing innovative solutions for businesses of all sizes.
            </p>
            <p className="mb-8 text-xl text-[#364F6B] dark:text-[#EEEDEB] md:text-2xl">
                Our mission is to provide user-friendly and scalable inventory management systems that help businesses streamline their operations and increase profitability.
            </p>
        </div>
    </div>
);

const FeaturesContent = () => (
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-5 pt-12 md:grid-cols-12">
        <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
            Key Features
        </h2>
        <div className="col-span-1 md:col-span-8">
            <p className="mb-4 text-xl text-[#364F6B] dark:text-[#EEEDEB] md:text-2xl">
                ShelfShift provides a comprehensive set of tools to streamline your inventory management process, including Item Management, Bills Management, and Purchase Order Management.

            </p>
            <p className="mb-8 text-xl text-[#364F6B] dark:text-[#EEEDEB] md:text-2xl">
                With ShelfShift, you can optimize your inventory levels, reduce stockouts and overstocking, and gain valuable insights into your business operations to make informed decisions.
            </p>
        </div>
    </div>
);

const TestimonialContent = () => (
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-5 pt-12 md:grid-cols-12">
        <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
            What Our Customers Say
        </h2>
        <div className="col-span-1 md:col-span-8">
            <p className="mb-4 text-xl text-[#364F6B] dark:text-[#EEEDEB] md:text-2xl">
                "ShelfShift has revolutionized the way we manage our inventory. The user-friendly interface and customizable features have saved us time and increased our profitability." - John, Owner of XYZ Mart
            </p>
            <p className="mb-8 text-xl text-[#364F6B] dark:text-[#EEEDEB] md:text-2xl">
                "We were struggling to keep track of our inventory across multiple locations. ShelfShift's automated stock tracking feature has been a game-changer for our business." - Emily, Manager of ABC Retail
            </p>
        </div>
    </div>
);
