import React, { useEffect, useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import pic from "./FAQ.jpg"
import Navbar from '../Home/Navbar';
import Footer from '../Home/Footer';

const AccordionItem = ({ title, children, isOpen, onToggle }) => (
  <div className={`border rounded-lg shadow-md mb-4 ${isOpen ? 'bg-[#EEEDEB] dark:bg-[#3C0753]' : 'bg-white dark:bg-[#030637]'}`}>
    <button
      className={`flex justify-between items-center w-full p-4 text-left transition duration-300 ${isOpen ? 'text-[#720455]' : 'text-gray-600 dark:text-[#EEEDEB]'}`}
      onClick={onToggle}
    >
      <h5 className="text-lg font-semibold">{title}</h5>
      <FiChevronDown
        className={`transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`}
        size={22}
      />
    </button>
    {isOpen && (
      <div className="p-4 border-t border-gray-200">
        <p className="text-base text-gray-600 dark:text-[#EEEDEB]">{children}</p>
      </div>
    )}
  </div>
);

export default function FAQ() {
  const [openSection, setOpenSection] = useState(null);

  const handleToggle = (section) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <Navbar scroll='true'/>
    <div className="bg-[#DDE6ED] dark:bg-[#030637] text-[#424874] dark:text-[#EEEDEB] min-h-screen pt-28">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 mt-20">
        <div className="flex flex-col justify-center items-center gap-x-16 gap-y-5 xl:gap-28 lg:flex-row lg:justify-between max-lg:max-w-2xl mx-auto max-w-full">
          <div className="w-full lg:w-1/2">
            <h1 className='mx-auto text-[#526D82] dark:text-[#720455] text-3xl pb-8'>FAQ (Frequently Asked Questions)</h1>
            <img
              src={pic}
              alt="FAQ tailwind section"
              className="w-full rounded-xl object-cover"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-xl">
              <div className="mb-6 lg:mb-16">
                <h6 className="text-lg text-center font-medium text-[#526D82] dark:text-[#720455] mb-2 lg:text-left">FAQs</h6>
                <h2 className="text-4xl text-center font-bold leading-[3.25rem] mb-5 lg:text-left">
                  Looking for answers?
                </h2>
              </div>
              <div className="accordion-group">
                <AccordionItem title="How to create an account?" isOpen={openSection === 'account'} onToggle={() => handleToggle('account')}>
                  To create an account, find the 'Sign up' or 'Create account' button, fill out the registration form with your personal information, and click 'Create account' or 'Sign up.' Verify your email address if needed, and then log in to start using the platform.
                </AccordionItem>

                <AccordionItem title="Have any trust issue?" isOpen={openSection === 'trust'} onToggle={() => handleToggle('trust')}>
                  Our focus on providing robust and user-friendly content management capabilities ensures that you can manage your content with confidence and achieve your content marketing goals with ease.
                </AccordionItem>

                <AccordionItem title="How can I reset my password?" isOpen={openSection === 'password'} onToggle={() => handleToggle('password')}>
                  You can reset your password by clicking on the 'Forgot Password?' link on the login page, entering your registered email address, and following the instructions sent to your email.
                </AccordionItem>

                <AccordionItem title="What is the payment process?" isOpen={openSection === 'payment'} onToggle={() => handleToggle('payment')}>
                  The payment process is simple. After choosing a subscription plan, enter your payment details on the secure checkout page and confirm your purchase.
                </AccordionItem>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}
