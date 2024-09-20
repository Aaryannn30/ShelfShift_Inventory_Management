import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect , useContext } from "react";
import AuthContext from "../../context/AuthContext";


const Profile = () => {
    const [activeSection, setActiveSection] = useState("All");
    const [isOpen, setIsOpen] = useState(true);
    const { user, logoutUser } = useContext(AuthContext);

    useEffect(() => {
        setIsOpen(true); // Automatically open the modal when activeSection changes
    }, [activeSection]);

    const handleBack = () => {
        setActiveSection("All"); // Return to main options when clicking back
    };

    const handleClose = () => {
        setIsOpen(false); // Close modal when "Close" is clicked
        setActiveSection(null);
         // Reset the active section
    };

    return (
        <div className="px-4 py-64 grid place-content-center">
            <SpringModal
                isOpen={isOpen}
                activeModal={activeSection}
                setActiveSection={setActiveSection}
                handleBack={handleBack}
                handleClose={handleClose}
                logout={logoutUser}
            />
        </div>
    );
};

const SpringModal = ({ isOpen, activeModal, setActiveSection, handleBack, handleClose , logout }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={handleClose} // Close modal on outside click
                    className="fixed inset-0 z-50 flex items-center justify-center"
                >
                    <motion.div
                        initial={{ scale: 0, rotate: "12.5deg" }}
                        animate={{ scale: 1, rotate: "0deg" }}
                        exit={{ scale: 0, rotate: "0deg" }}
                        onClick={(e) => e.stopPropagation()} // Prevent close when clicking inside modal
                        className="bg-white text-indigo-600 p-6 rounded-lg w-full max-w-md shadow-xl cursor-default relative overflow-hidden"
                    >
                        <div className="relative z-10">
                            {activeModal === "All" ? (
                                <>
                                    <h3 className="text-2xl font-bold text-center mb-4">Profile</h3>
                                    <div className="grid gap-4">
                                        <button
                                            onClick={() => setActiveSection("Personal Info")}
                                            className="bg-blue-200 hover:bg-blue-300 text-blue-800 py-2 px-4 rounded"
                                        >
                                            Personal Info
                                        </button>
                                        <button
                                            onClick={() => setActiveSection("Notifications")}
                                            className="bg-green-200 hover:bg-green-300 text-green-800 py-2 px-4 rounded"
                                        >
                                            Notifications
                                        </button>
                                        <button
                                            onClick={() => setActiveSection("Password")}
                                            className="bg-purple-200 hover:bg-purple-300 text-purple-800 py-2 px-4 rounded"
                                        >
                                            Password
                                        </button>
                                        <button
                                            onClick={() => setActiveSection("Theme")}
                                            className="bg-yellow-200 hover:bg-yellow-300 text-yellow-800 py-2 px-4 rounded"
                                        >
                                            Theme
                                        </button>
                                    </div>
                                    <div className="mt-4">
                                        <button
                                            onClick={handleClose}
                                            className="bg-red-200 hover:bg-red-300 text-red-800 py-2 px-4 rounded w-full"
                                        >
                                            Close
                                        </button>
                                    </div>
                                    <div className="mt-4">
                                        <button
                                            onClick={logout}
                                            className="bg-red-200 hover:bg-red-300 text-red-800 py-2 px-4 rounded w-full"
                                        >
                                            Logout
                                        </button>
                                        
                                    </div>
                                </>
                            ) : (
                                <>
                                    <h3 className="text-2xl font-bold text-center mb-4">{activeModal}</h3>
                                    <p className="text-center mb-6">
                                        {activeModal} content goes here.
                                    </p>
                                    <button
                                        onClick={handleBack}
                                        className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded w-full mb-4"
                                    >
                                        Back
                                    </button>
                                </>
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Profile;
