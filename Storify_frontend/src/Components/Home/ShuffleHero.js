import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const ShuffleHero = () => {
    return (
        <section className="px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 w-full mx-auto dark:bg-slate-900 dark:text-white">
            <div>
                <span className="block mb-4 text-xs md:text-sm text-indigo-500 font-medium">
                    Better every day
                </span>
                <h3 className="text-4xl md:text-6xl font-semibold">
                    Let's make your Inventory journey easy and seamless.
                </h3>
                <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">
                In the journey of business, inventory management
                 is your compass, guiding you toward profitability and sustainability.
                 Inventory management is a continuous cycle of learning, adapting, and optimizing,
                  leading to smarter business practices.
                </p>
                
            </div>
            <ShuffleGrid />
        </section>
    );
};

const shuffle = (array) => {
    let currentIndex = array.length,
        randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ];
    }

    return array;
};

const squareData = [
    {
        id: 1,
        src: "https://static.vecteezy.com/system/resources/thumbnails/024/078/611/small_2x/inventory-management-concept-business-woman-hand-touching-inventory-management-icon-on-virtual-screen-photo.jpg",
    },
    {
        id: 2,
        src: "https://www.stallionglobal.com/uploads/links/Title_62.JPG",
    },
    {
        id: 3,
        src: "https://www.retaildogma.com/wp-content/uploads/2020/11/Inventory-Management.png",
    },
    {
        id: 4,
        src: "https://www.unleashedsoftware.com/wp-content/uploads/2024/02/retail-inventory-management-process-1.png",
    },
    {
        id: 5,
        src: "https://koronapos.com/wp-content/uploads/2018/09/840701_5-New-Blog-Image-5_092320-1.png",
    },
    {
        id: 6,
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7WCYnJjornei-iv_3WpSS-w5DAr0cuUdjgQ&s",
    },
    {
        id: 7,
        src: "https://blog.lio.io/wp-content/uploads/2023/05/Blogs-Images-2023-05-24T182840.513.jpg"
    },
    {
        id: 8,
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6bHF1HJnMbS1kSAs7VOWcVMwg1EiJL7COeg&s",
    },
    {
        id: 9,
        src: "https://i0.wp.com/www.globaltrademag.com/wp-content/uploads/2022/04/shutterstock_585073000-scaled.jpg?fit=2560%2C1706&ssl=1"
    },
    {
        id: 10,
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsUVpjzFleLjF0fRMb2K3XCi7Pm0rgVUmTSw&s",
    },
    {
        id: 11,
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7BYJOjg1gOmBfN6WA_sONQ_C7xE4-vJDf1A&s",
    },
    {
        id: 12,
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJF2bTunp-Se6zNG5t0EIf3WQLNoDP5F3WaA&s",
    },
    {
        id: 13,
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZJGmP8K0Pz9XZlSzTW7EEh-BYCnNTBif3sQ&s",
    },
    {
        id: 14,
        src: "https://media.sortly.com/wp-content/uploads/2021/10/20040652/Warehouse-management-team.jpg",
    },
    {
        id: 15,
        src: "https://cdn.prod.website-files.com/63a40b5d0bd7064cf2860235/653b7e99b582ab2c24d5fbb2_5%20Advantages%20of%20Inventory%20Management%20for%20eCommerce%20and%20More!.jpg",
    },
    {
        id: 16,
        src: "https://5.imimg.com/data5/LJ/ZJ/CG/SELLER-1605138/inventory-management-solutions-offline.jpg",
    },
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