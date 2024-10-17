import { AnimatePresence, motion } from "framer-motion";
import { useState, useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { useNavigate } from "react-router-dom"; 

const Profile = ({ isOpen, handleClose }) => {
    const [activeSection, setActiveSection] = useState("All");
    const { user, logoutUser } = useContext(AuthContext);
    const navigate = useNavigate(); 

    const handleBack = () => {
        setActiveSection("All");
    };

    const handleLogout = () => {
        logoutUser();
        navigate('/signin');
    };

    return (
        <div className="relative">
            <SpringModal
                isOpen={isOpen}
                activeModal={activeSection}
                setActiveSection={setActiveSection}
                handleBack={handleBack}
                handleClose={handleClose}
                logout={handleLogout}
            />
        </div>
    );
};

const SpringModal = ({ isOpen, activeModal, setActiveSection, handleBack, handleClose, logout }) => {
    const { user } = useContext(AuthContext);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }} // Start slightly smaller
                    animate={{ opacity: 1, scale: 1 }}    // Animate to full size
                    exit={{ opacity: 0, scale: 0.9 }}      // Animate out to slightly smaller
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" 
                >
                    <motion.div
                        onClick={(e) => e.stopPropagation()} // Prevent close when clicking inside modal
                        className="bg-white text-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md"
                    >
                        <div className="relative z-10">
                            {activeModal === "All" ? (
                                <>
                                    <h3 className="text-2xl font-bold text-center mb-4">User Options</h3>
                                    <div className="grid gap-4">
                                        {/* Profile Option */}
                                        <button
                                            onClick={() => setActiveSection("Profile")}
                                            className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded transition duration-200"
                                        >
                                            View Profile
                                        </button>

                                        {/* Logout Option */}
                                        <button
                                            onClick={logout}
                                            className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded transition duration-200"
                                        >
                                            Logout
                                        </button>
                                    </div>
                                </>
                            ) : (
                                <>
                                    {/* Profile Section */}
                                    <h3 className="text-2xl font-bold text-center mb-4">Profile Details</h3>
                                    <p className="text-center text-sm mb-2">Username: <strong>{user.username}</strong></p>
                                    <p className="text-center text-sm mb-6">Email: <strong>{user.email}</strong></p>

                                    <div className="grid gap-4">
                                        {/* Back Option */}
                                        <button
                                            onClick={handleBack}
                                            className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded transition duration-200 w-full"
                                        >
                                            Back
                                        </button>

                                        {/* Close Option */}
                                        <button
                                            onClick={handleClose}
                                            className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded transition duration-200 w-full"
                                        >
                                            Close
                                        </button>
                                    </div>
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
