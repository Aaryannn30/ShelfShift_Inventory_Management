import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import pic1 from "./img/pic1-min.jpg";
import pic2 from "./img/pic2-min.jpg";
import pic3 from "./img/pic3-min.jpg";
import pic4 from "./img/pic4-min.jpg";
import pic5 from "./img/pic5-min.jpg";
import pic6 from "./img/pic6-min.jpg";
import pic7 from "./img/pic7-min.jpg";
import pic8 from "./img/pic8-min.jpg";
import pic9 from "./img/pic9-min.jpg";
import pic10 from "./img/pic10-min.jpg";
import pic11 from "./img/pic11-min.jpg";
import pic12 from "./img/pic12-min.jpg";
import pic13 from "./img/pic13-min.jpg";
import pic14 from "./img/pic14-min.jpg";
import pic15 from "./img/pic15-min.jpg";
import pic16 from "./img/pic16-min.jpg";

const ShuffleHero = () => {
    return (
        <section className="px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 w-full mx-auto bg-[#DDE6ED] text-[#364F6B] dark:bg-[#030637] dark:text-[#EEEDEB]">
            <div>
                <span className="block mb-4 text-xs md:text-sm text-[#526D82] font-medium dark:text-[#720455]">
                    Better every day
                </span>
                <h3 className="text-4xl md:text-6xl font-semibold">
                    Let's make your Inventory journey easy and seamless.
                </h3>
                <p className="text-base md:text-lg text-[#364F6B] dark:text-[#EEEDEB] my-4 md:my-6">
                    In the journey of business, inventory management is your compass, guiding you toward profitability and sustainability. Inventory management is a continuous cycle of learning, adapting, and optimizing, leading to smarter business practices.
                </p>
            </div>
            <ShuffleGrid />
        </section>
    );
};

const shuffle = (array) => {
    let currentIndex = array.length,randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
};

const squareData = [
    { id: 1, src: pic1 },
    { id: 2, src: pic2 },
    { id: 3, src: pic3 },
    { id: 4, src: pic4 },
    { id: 5, src: pic5 },
    { id: 6, src: pic6 },
    { id: 7, src: pic7 },
    { id: 8, src: pic8 },
    { id: 9, src: pic9 },
    { id: 10, src: pic10 },
    { id: 11, src: pic11 },
    { id: 12, src: pic12 },
    { id: 13, src: pic13 },
    { id: 14, src: pic14 },
    { id: 15, src: pic15 },
    { id: 16, src: pic16 },
];

const generateSquares = () => {
    return shuffle(squareData).map((sq) => (
        <motion.div
            key={sq.id}
            layout
            transition={{ duration: 1.5, type: "spring" }}
            className="w-full h-full"
            style={{
                backgroundImage: `url(${sq.src})`,
                backgroundSize: "cover",
            }}
        ></motion.div>
    ));
};

const ShuffleGrid = () => {
    const timeoutRef = useRef(null);
    const [squares, setSquares] = useState(generateSquares());

    useEffect(() => {
        shuffleSquares();

        return () => clearTimeout(timeoutRef.current);
    }, []);

    const shuffleSquares = () => {
        setSquares(generateSquares());
        timeoutRef.current = setTimeout(shuffleSquares, 3000);
    };

    return (
        <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
            {squares.map((sq) => sq)}
        </div>
    );
};

export default ShuffleHero;
