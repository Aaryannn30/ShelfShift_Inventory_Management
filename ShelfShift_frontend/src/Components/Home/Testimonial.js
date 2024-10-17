import React from 'react';

const testimonials = [
    {
        name: "Ravi Sharma",
        title: "Small Business Owner",
        text: "ShelfShift has transformed the way I manage my inventory. It's intuitive and efficient! I can now track my stock in real-time, which has significantly reduced losses.",
        img: "https://randomuser.me/api/portraits/men/1.jpg",
        twitter: "https://twitter.com/ravi_sharma_01"
    },
    {
        name: "Priya Patel",
        title: "Retail Manager",
        text: "The features offered by ShelfShift are exactly what I needed to streamline my operations. The automated alerts help me keep everything organized and timely.",
        img: "https://randomuser.me/api/portraits/women/1.jpg",
        twitter: "https://twitter.com/priya_patel_01"
    },
    {
        name: "Amit Verma",
        title: "E-commerce Entrepreneur",
        text: "I love the user-friendly interface and powerful analytics. ShelfShift is a game-changer! It has made managing my online store's inventory a breeze.",
        img: "https://randomuser.me/api/portraits/men/2.jpg",
        twitter: "https://twitter.com/amit_verma_01"
    },
    {
        name: "Neha Desai",
        title: "Warehouse Supervisor",
        text: "ShelfShift made tracking my stock levels so much easier. Highly recommend it! The dashboard gives me insights at a glance, helping me make quick decisions.",
        img: "https://randomuser.me/api/portraits/women/2.jpg",
        twitter: "https://twitter.com/neha_desai_01"
    },
    {
        name: "Vikram Iyer",
        title: "Inventory Analyst",
        text: "With ShelfShift, I can manage my inventory in real-time. It's a must-have tool! The reporting features help me analyze trends and optimize stock levels.",
        img: "https://randomuser.me/api/portraits/men/3.jpg",
        twitter: "https://twitter.com/vikram_iyer_01"
    },
    {
        name: "Sita Reddy",
        title: "Logistics Coordinator",
        text: "The efficiency of ShelfShift has improved our supply chain processes immensely. I can easily sync my inventory across multiple locations.",
        img: "https://randomuser.me/api/portraits/women/3.jpg",
        twitter: "https://twitter.com/sita_reddy_01"
    },
    {
        name: "Rajesh Mehta",
        title: "Franchise Owner",
        text: "I appreciate how ShelfShift simplifies complex inventory tasks. The software has helped me cut down on excess stock and improve cash flow.",
        img: "https://randomuser.me/api/portraits/men/4.jpg",
        twitter: "https://twitter.com/rajesh_mehta_01"
    },
    {
        name: "Aisha Khan",
        title: "Supply Chain Manager",
        text: "The integration capabilities of ShelfShift are outstanding. It connects seamlessly with our other systems, making data management a lot easier.",
        img: "https://randomuser.me/api/portraits/women/4.jpg",
        twitter: "https://twitter.com/aisha_khan_01"
    },
    {
        name: "Nitin Gupta",
        title: "Operations Director",
        text: "ShelfShift provides the analytics we need to make informed decisions. It's not just an inventory tool; it's a business partner.",
        img: "https://randomuser.me/api/portraits/men/5.jpg",
        twitter: "https://twitter.com/nitin_gupta_01"
    }
];


const TestimonialCard = ({ name, title, text, img, twitter, wide }) => (
    <li className={`text-sm leading-6 ${wide ? 'col-span-2' : 'col-span-1'}`}>
        <div className="relative group">
            <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
            <a href={twitter} className="cursor-pointer" target='_blank'>
                <div className="relative p-6 space-y-6 leading-none rounded-lg bg-[#526D82] dark:bg-[#720455] ring-1 ring-gray-900/5">
                    <div className="flex items-center space-x-4">
                        <img src={img} alt={name} className="w-12 h-12 bg-center bg-cover border rounded-full" />
                        <div>
                            <h3 className="text-lg font-semibold text-[#1B262C] dark:text-[#EEEDEB]">{name}</h3>
                            <p className="text-[#1B262C] dark:text-[#EEEDEB] text-md">{title}</p>
                        </div>
                    </div>
                    <p className="leading-normal text-[#1B262C] dark:text-[#FEFBF6] text-md">{text}</p>
                </div>
            </a>
        </div>
    </li>
);

function Testimonial() {
    return (
        <section id="testimonies" className="pb-5 bg-[#DDE6ED] dark:bg-[#030637] dark:text-[#EEEDEB]">
            <div className="max-w-6xl mx-8 md:mx-10 lg:mx-20 xl:mx-auto">
                <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
                    <div className="mb-12 space-y-5 md:mb-16 md:text-center">
                        <div className="inline-block px-3 py-1 text-sm font-semibold text-black dark:text-white rounded-lg md:text-center text-cn bg-[#526D82] bg-opacity-60 dark:bg-[#720455] dark:bg-opacity-60 hover:cursor-pointer hover:bg-opacity-40">
                            Words from Others
                        </div>
                        <h1 className="mb-5 text-3xl font-semibold text-[#364F6B] dark:text-[#EEEDEB] md:text-center md:text-5xl">
                            It's not just us.
                        </h1>
                        <p className="text-xl text-[#364F6B] dark:text-[#EEEDEB] md:text-center md:text-2xl">
                            Here's what others have to say about us.
                        </p>
                    </div>
                </div>

                {/* Testimonial Grid with varying card ratios */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                    <ul className="space-y-8">
                        <TestimonialCard {...testimonials[0]} />
                        <TestimonialCard {...testimonials[1]} wide />
                        <TestimonialCard {...testimonials[2]} />
                    </ul>
                    <ul className="space-y-8">
                        <TestimonialCard {...testimonials[4]} />
                        <TestimonialCard {...testimonials[3]} wide />
                        <TestimonialCard {...testimonials[8]} />
                    </ul>
                    <ul className="space-y-8">
                        <TestimonialCard {...testimonials[5]} />
                        <TestimonialCard {...testimonials[6]} />
                        <TestimonialCard {...testimonials[7]} />
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Testimonial;
