import { motion } from "framer-motion";

const SquishyCard = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 dark:bg-slate-900">
            <section className="px-4 py-12">
                <div className="mx-auto w-fit">
                    <Card
                        shape1="circle"
                        shape2="ellipse"
                        planType="Individual"
                        price="$299"
                        bgColor="bg-indigo-500"
                    />
                </div>
            </section>
            <section className="px-4 py-12">
                <div className="mx-auto w-fit">
                    <Card
                        shape1="square"
                        shape2="rect"
                        planType="Company"
                        price="$999"
                        bgColor="bg-purple-500"
                    />
                </div>
            </section>
            <section className="px-4 py-12">
                <div className="mx-auto w-fit">
                    <Card
                        shape1="triangle"
                        shape2="rhombus"
                        planType="Enterprise"
                        price="$4,999"
                        bgColor="bg-pink-500"
                    />
                </div>
            </section>
        </div>
    );
};

const Card = ({ shape1, shape2, planType, price, bgColor }) => {
    return (
        <motion.div
            whileHover="hover"
            transition={{
                duration: 0.8,
                ease: "easeInOut",
            }}
            variants={{
                hover: {
                    scale: 1.05,
                },
            }}
            className={`relative h-96 w-80 shrink-0 overflow-hidden rounded-xl ${bgColor} p-8`}
        >
            <div className="relative z-10 text-white">
                <span className="mb-3 block w-fit rounded-full bg-white/30 px-3 py-0.5 text-sm font-light text-white">
                    {planType}
                </span>
                <motion.span
                    initial={{ scale: 0.85 }}
                    variants={{
                        hover: {
                            scale: 1,
                        },
                    }}
                    transition={{
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="my-2 block origin-top-left font-mono text-6xl font-black leading-[1.2]"
                >
                    {price}/
                    <br />
                    Month
                </motion.span>
                <p className="mt-4">
                    For individuals who want to understand why their landing pages aren’t working
                </p>
            </div>
            <button className="absolute bottom-4 left-4 right-4 z-20 rounded border-2 border-white bg-white py-2 text-center font-mono font-black uppercase text-neutral-800 backdrop-blur transition-colors hover:bg-white/30 hover:text-white">
                Get it now
            </button>
            <Background shape1={shape1} shape2={shape2} />
        </motion.div>
    );
};

const Background = ({ shape1, shape2 }) => {
    const renderShape = (shape, index) => {
        const baseAnimation = {
            hover: {
                y: index === 0 ? -20 : 20,
                scale: 1.2,
            },
        };
        
        switch (shape) {
            case "circle":
                return (
                    <motion.circle
                        cx="160.5"
                        cy="114.5"
                        r="80"
                        fill="#262626"
                        variants={baseAnimation}
                        transition={{
                            duration: 0.8,
                            ease: "easeInOut",
                            delay: index * 0.2,
                        }}
                    />
                );
            case "ellipse":
                return (
                    <motion.ellipse
                        cx="160.5"
                        cy="265.5"
                        rx="100"
                        ry="40"
                        fill="#262626"
                        variants={{
                            hover: {
                                scaleX: 1.3,
                                scaleY: 1.1,
                                y: 10,
                            },
                        }}
                        transition={{
                            duration: 0.8,
                            ease: "easeInOut",
                            delay: index * 0.2,
                        }}
                    />
                );
            case "square":
                return (
                    <motion.rect
                        x="100"
                        y="90"
                        width="120"
                        height="120"
                        fill="#262626"
                        variants={{
                            hover: {
                                rotate: 45,
                                scale: 1.2,
                                x: -10,
                                y: -10,
                            },
                        }}
                        transition={{
                            duration: 0.8,
                            ease: "easeInOut",
                            delay: index * 0.2,
                        }}
                    />
                );
            case "rect":
                return (
                    <motion.rect
                        x="60"
                        y="220"
                        width="200"
                        height="60"
                        fill="#262626"
                        variants={{
                            hover: {
                                scaleY: 1.5,
                                y: -10,
                            },
                        }}
                        transition={{
                            duration: 0.8,
                            ease: "easeInOut",
                            delay: index * 0.2,
                        }}
                    />
                );
            case "triangle":
                return (
                    <motion.polygon
                        points="160,50 230,180 90,180"
                        fill="#262626"
                        variants={{
                            hover: {
                                scale: 1.3,
                                y: -10,
                            },
                        }}
                        transition={{
                            duration: 0.8,
                            ease: "easeInOut",
                            delay: index * 0.2,
                        }}
                    />
                );
            case "rhombus":
                return (
                    <motion.polygon
                        points="160,80 220,180 160,280 100,180"
                        fill="#262626"
                        variants={{
                            hover: {
                                scale: 1.2,
                                rotate: 15,
                                y: -10,
                            },
                        }}
                        transition={{
                            duration: 0.8,
                            ease: "easeInOut",
                            delay: index * 0.2,
                        }}
                    />
                );
            default:
                return null;
        }
    };

    return (
        <motion.svg
            width="320"
            height="384"
            viewBox="0 0 320 384"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-0 z-0"
            variants={{
                hover: {
                    scale: 1.05,
                },
            }}
            transition={{
                duration: 0.8,
                ease: "easeInOut",
            }}
        >
            {renderShape(shape1, 0)}
            {renderShape(shape2, 1)}
        </motion.svg>
    );
};

export default SquishyCard;
