import { Link } from 'react-router-dom';
import Navbar from '../Home/Navbar';
import Footer from '../Home/Footer';
import { FaCheckCircle } from 'react-icons/fa';// Import a checkmark icon for success

const PaymentSuccessful = () => {
    return (
        <>
            <Navbar scroll='true' />
            <div className="bg-[#DDE6ED] dark:bg-[#030637] h-screen flex flex-col justify-center items-center">
                <div className="bg-[#FEFBF6] dark:bg-[#3C0753] shadow-lg rounded-lg p-10 text-center w-full max-w-lg">
                    <FaCheckCircle className="w-20 h-20 text-green-500 mx-auto" />
                    <h2 className="text-4xl font-bold text-[#424874] dark:text-[#EEEDEB] mt-5">Payment Successful</h2>
                    <p className="text-lg text-gray-700 dark:text-[#FEFBF6] mt-4">
                        Thank you for your purchase! Your payment has been successfully processed.
                    </p>
                    <p className="text-md text-gray-600 dark:text-gray-300 mt-2">
                        Enjoy our Service!
                    </p>
                    <div className="mt-8">
                        <Link to='/dashboard/dashboardmainview'

                            className="py-2 px-4 bg-black text-white font-semibold rounded-lg w-full transition-all duration-300 hover:bg-white hover:text-black border hover:border-black"
                        >
                            Return to Dashboard

                        </Link>

                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default PaymentSuccessful;
