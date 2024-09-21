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
        navigate('/login');
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
                    initial={{ opacity: 0, x: 100 }} // Start off-screen to the right
                    animate={{ opacity: 1, x: 0 }}   // Animate into view from the right
                    exit={{ opacity: 0, x: 100 }}     // Animate out of view to the right
                    className="fixed inset-y-0 right-0 z-50 flex items-start justify-end p-4 w-full max-w-sm" 
                >
                    <motion.div
                        onClick={(e) => e.stopPropagation()} // Prevent close when clicking inside modal
                        className="bg-white text-indigo-600 p-6 rounded-lg shadow-xl cursor-default relative overflow-hidden w-full"
                    >
                        <div className="relative z-10">
                            {activeModal === "All" ? (
                                <>
                                    <h3 className="text-2xl font-bold text-center mb-4">Options</h3>
                                    <div className="grid gap-4">
                                        {/* Profile Option */}
                                        <button
                                            onClick={() => setActiveSection("Profile")}
                                            className="bg-blue-200 hover:bg-blue-300 text-blue-800 py-2 px-4 rounded"
                                        >
                                            Profile
                                        </button>

                                        {/* Logout Option */}
                                        <button
                                            onClick={logout}
                                            className="bg-red-200 hover:bg-red-300 text-red-800 py-2 px-4 rounded"
                                        >
                                            Logout
                                        </button>
                                    </div>
                                </>
                            ) : (
                                <>
                                    {/* Profile Section */}
                                    <h3 className="text-2xl font-bold text-center mb-4">Profile</h3>
                                    <p className="text-center text-sm mb-2">Username: {user.username}</p>
                                    <p className="text-center text-sm mb-6">Email: {user.email}</p>

                                    <div className="grid gap-4">
                                        {/* Back Option */}
                                        <button
                                            onClick={handleBack}
                                            className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded w-full"
                                        >
                                            Back
                                        </button>

                                        {/* Close Option */}
                                        <button
                                            onClick={handleClose}
                                            className="bg-red-200 hover:bg-red-300 text-red-800 py-2 px-4 rounded w-full"
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
