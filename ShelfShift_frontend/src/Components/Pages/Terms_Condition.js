import React, { useEffect, useState } from 'react';
import Navbar from '../Home/Navbar';
import Footer from '../Home/Footer';
import { Link } from 'react-router-dom';
export default function Terms_Condition() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const termsData = [
        {
            title: "1. Agreement to Terms",
            content: "By accessing and using ShelfShift Inventory, you agree to be bound by these Terms. If you do not agree to these Terms, please discontinue use of our platform."
        },
        {
            title: "2. Eligibility",
            content: "You must be at least 18 years old to use our platform. By using ShelfShift Inventory, you represent and warrant that you have the legal capacity to enter into this agreement."
        },
        {
            title: "3. User Responsibilities",
            content: "Users must provide accurate information when registering an account and ensure that their use of ShelfShift Inventory complies with applicable laws and regulations. Misuse of the platform may result in termination of services."
        },
        {
            title: "4. Privacy Policy",
            content: "Our Privacy Policy governs how we collect, use, and disclose information about you. By using ShelfShift Inventory, you agree to our Privacy Policy, which is available on our website."
        },
        {
            title: "5. Content Ownership",
            content: "All content and materials on ShelfShift Inventory, including text, images, and software, are the property of ShelfShift Inventory or its licensors. Users are not permitted to copy, modify, or distribute any content without prior written consent."
        },
        {
            title: "6. Limitation of Liability",
            content: "ShelfShift Inventory will not be held liable for any damages that arise from the use or inability to use our platform. Users acknowledge that they use the platform at their own risk."
        },
        {
            title: "7. Modifications to Terms",
            content: "We reserve the right to modify these Terms at any time. Users will be notified of significant changes, and continued use of the platform after modifications constitutes acceptance of the new Terms."
        },
        {
            title: "8. Governing Law",
            content: "These Terms are governed by the laws of [Your Country], without regard to conflict of law principles. Any legal disputes arising out of these Terms will be resolved in the courts of [Your City]."
        }
    ];

    return (
        <div>
            <Navbar scroll="true" />
            <div className="bg-[#DDE6ED] dark:bg-[#030637] pt-16 pb-12">
                <div className="container mx-auto px-6">
                    <h1 className="text-4xl font-bold text-center text-[#424874] dark:text-[#EEEDEB] mb-6">Terms & Conditions</h1>
                    <div className="bg-white dark:bg-[#3C0753] shadow-lg rounded-lg p-8">
                        <p className="text-lg text-[#526D82] dark:text-[#EEEDEB]">
                            <strong>Effective Date: September 2024</strong>
                        </p>
                        <p className="mt-4 text-[#526D82] dark:text-[#EEEDEB]">
                            Welcome to ShelfShift Inventory. These Terms & Conditions outline the rules and regulations for the use of our platform.
                        </p>

                        {termsData.map((term, index) => (
                            <div key={index} className="mt-4">
                                <button
                                    className={`w-full text-left text-lg text-[#424874] dark:text-[#EEEDEB] font-semibold py-3 px-4 rounded-lg transition duration-300 ease-in-out transform ${activeIndex === index ? 'bg-[#FEFBF6] dark:bg-[#720455]' : 'hover:bg-[#E2E8F0] dark:hover:bg-[#3C0753]'}`}
                                    onClick={() => toggleAccordion(index)}
                                >
                                    {term.title}
                                </button>
                                <div
                                    className={`overflow-hidden transition-max-height duration-500 ease-in-out ${activeIndex === index ? 'max-h-40' : 'max-h-0'}`}
                                >
                                    {activeIndex === index && (
                                        <div className="mt-2 text-[#526D82] dark:text-[#EEEDEB] border-l-4 border-[#526D82] dark:border-[#720455] pl-4">
                                            <p className="text-base">{term.content}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}

                        <p className="mt-6 text-[#526D82] dark:text-[#EEEDEB]">
                            For further information or questions about these Terms, please contact us at support
                            <Link to='/contact'>
                                &nbsp;shelfshift@gmail.com
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
