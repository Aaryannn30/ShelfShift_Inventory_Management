import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const PricingCard = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <section className="px-4 py-12">
                <div className="mx-auto w-fit">
                    <Card bgcolor='dark:bg-[#3C0753] bg-[#8785A2] ' price='69' type='Individual' plan='Basic' />
                </div>
            </section>
            <section className="px-4 py-12">
                <div className="mx-auto w-fit">
                    <Card bgcolor='dark:bg-[#720455] bg-[#526D82]' price='599' type='Team' plan='Standard' />
                </div>
            </section>
            <section className="px-4 py-12">
                <div className="mx-auto w-fit">
                    <Card bgcolor='dark:bg-[#0F4C75] bg-[#364F6B]' price='899' type='Enterprise' plan='Advance' />
                </div>
            </section>
        </div>
    );
};

const Card = ({ bgcolor, price, type ,plan }) => {
    return (
        <motion.div
            whileHover="hover"
            transition={{
                duration: 1,
                ease: "backInOut",
            }}
            variants={{
                hover: {
                    scale: 1.05,
                },
            }}
            className={`relative h-96 w-80 shrink-0 overflow-hidden rounded-xl ${bgcolor} p-8 text-white dark:text-black`}
        >
            <div className="relative z-10">
                <span className="mb-3 block w-fit rounded-full bg-[#EEEDEB]/30 px-3 py-0.5 text-sm font-light">
                    {type}
                </span>
                <motion.span
                    initial={{ scale: 0.85 }}
                    variants={{
                        hover: {
                            scale: 1,
                        },
                    }}
                    transition={{
                        duration: 1,
                        ease: "backInOut",
                    }}
                    className="my-2 block origin-top-left font-mono text-6xl text-white dark:text-white font-black leading-[1.2]"
                >
                    ₹{price}/
                    <br />
                    Month
                </motion.span>
                <p className="text-white dark:text-white">
                    Get started with our {plan} plan, perfect for {type}.
                </p>
            </div>
            <Link to='/pricing'>
                <button className="absolute bottom-4 left-4 right-4 z-20 rounded border-2 border-[#EEEDEB] bg-[#EEEDEB] py-2 text-center font-mono font-black uppercase text-neutral-800 backdrop-blur transition-colors hover:bg-[#EEEDEB]/30 hover:text-white">
                    Get it now
                </button>
            </Link>
            <Background />
        </motion.div>
    );
};

const Background = () => {
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
                    scale: 1.5,
                },
            }}
            transition={{
                duration: 1,
                ease: "backInOut",
            }}
        >
            <motion.circle
                variants={{
                    hover: {
                        scaleY: 0.5,
                        y: -25,
                    },
                }}
                transition={{
                    duration: 1,
                    ease: "backInOut",
                    delay: 0.2,
                }}
                cx="160.5"
                cy="114.5"
                r="101.5"
                fill="#262626" // You may want to change this color based on theme
            />
            <motion.ellipse
                variants={{
                    hover: {
                        scaleY: 2.25,
                        y: -25,
                    },
                }}
                transition={{
                    duration: 1,
                    ease: "backInOut",
                    delay: 0.2,
                }}
                cx="160.5"
                cy="265.5"
                rx="101.5"
                ry="43.5"
                fill="#262626" // You may want to change this color based on theme
            />
        </motion.svg>
    );
};

export default PricingCard;
