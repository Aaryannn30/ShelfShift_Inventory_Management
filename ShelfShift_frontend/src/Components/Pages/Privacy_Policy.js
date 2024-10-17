import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Home/Navbar';
import Footer from '../Home/Footer';

const AccordionItem = ({ title, children, isOpen, onToggle }) => (
  <div className="mb-4 border-b">
    <button
      className="flex justify-between w-full p-4 text-left bg-[#DDE6ED] dark:bg-[#3C0753] hover:bg-[#EEEDEB] dark:hover:bg-[#720455] focus:outline-none"
      onClick={onToggle}
    >
      <span className="text-lg font-semibold text-[#526D82] dark:text-[#DBA39A]">{title}</span>
      <span className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>
        ▼
      </span>
    </button>
    {isOpen && (
      <div className="p-4 bg-white dark:bg-[#3C0753]">
        {children}
      </div>
    )}
  </div>
);

export default function Privacy_Policy() {
  const [openSection, setOpenSection] = useState(null);  // Only one open section at a time

  const handleToggle = (section) => {
    setOpenSection((prev) => (prev === section ? null : section));  // Close if clicked again
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar scroll='true' />
      <div className="bg-[#DDE6ED] dark:bg-[#030637] text-[#424874] dark:text-[#EEEDEB] font-sans min-h-screen py-16">
        <div className="max-w-4xl mx-auto px-8 py-12 bg-white dark:bg-[#3C0753] shadow-lg rounded-lg">
          <h1 className="text-4xl font-extrabold mb-8 text-center text-[#526D82] dark:text-[#E84545]">Privacy Policy for Storify</h1>

          <AccordionItem title="Information Collection and Use" isOpen={openSection === 'info'} onToggle={() => handleToggle('info')}>
            <p className="mb-6 text-lg leading-relaxed">
              To enhance your experience with our Service, we may need you to provide specific personally identifiable
              information. Any information we ask for will be kept by us and utilized in accordance with this privacy
              policy.
            </p>
            <p className="mb-6 text-lg leading-relaxed">
              The application does use third-party services that might collect information used to identify you.
            </p>
          </AccordionItem>

          <AccordionItem title="Log Data" isOpen={openSection === 'logData'} onToggle={() => handleToggle('logData')}>
            <p className="mb-6 text-lg leading-relaxed">
              Whenever you utilize our Service and encounter an app error, we gather data and information (through
              third-party products) on your device, referred to as Log Data. This Log Data may encompass details such as
              your device's Internet Protocol ("IP") address, device name, operating system version, the setup of the app
              during your Service usage, the time and date of your Service usage, and additional statistics.
            </p>
          </AccordionItem>

          <AccordionItem title="Cookies" isOpen={openSection === 'cookies'} onToggle={() => handleToggle('cookies')}>
            <p className="mb-6 text-lg leading-relaxed">
              Cookies are small data files commonly utilized as anonymous unique identifiers. They are transmitted to your
              browser from the websites you visit and are stored in your device's internal memory.
            </p>
            <p className="mb-6 text-lg leading-relaxed">
              This Service doesn't directly employ these "cookies." Nevertheless, the app might utilize third-party code
              and libraries that utilize "cookies" to gather information and improve their services. You have the choice
              to accept or decline these cookies and receive notifications when a cookie is being sent to your device. If
              you opt to decline our cookies, some parts of this Service may not be accessible to you.
            </p>
          </AccordionItem>

          <AccordionItem title="Service Providers" isOpen={openSection === 'serviceProviders'} onToggle={() => handleToggle('serviceProviders')}>
            <p className="mb-6 text-lg leading-relaxed">
              We might enlist the help of third-party companies and individuals for the following purposes:
            </p>
            <ul className="list-disc list-inside mb-6 pl-8 text-lg leading-relaxed">
              <li>Facilitating our Service;</li>
              <li>Providing the Service on our behalf;</li>
              <li>Performing Service-related tasks;</li>
              <li>Assisting us in analyzing how our Service is utilized.</li>
            </ul>
          </AccordionItem>

          <AccordionItem title="Children's Privacy" isOpen={openSection === 'childrenPrivacy'} onToggle={() => handleToggle('childrenPrivacy')}>
            <p className="mb-6 text-lg leading-relaxed">
              These Services are not designed for individuals under the age of 13. We do not knowingly gather personally
              identifiable information from children under 13 years old. If we discover that a child under 13 has provided
              us with personal information, we will promptly remove it from our servers. If you are a parent or guardian
              and are aware that your child has provided us with personal information, please contact us so we can take
              appropriate action.
            </p>
          </AccordionItem>

          <h2 className="text-2xl font-semibold mb-4 mt-8 text-[#526D82] dark:text-[#E84545]">Contact Us</h2>
          <p className="mb-6 text-lg leading-relaxed">
            If you have any questions or suggestions regarding our Privacy Policy, feel free to contact us at
            <Link to="/contact" className="text-[#526D82] dark:text-[#FEFBF6] hover:underline">&nbsp;ShelfShift@gmail.com</Link>.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
