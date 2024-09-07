import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeModal, setActiveModal] = useState(null);

  const handleOpen = (field) => {
    setActiveModal(field);
  };

  const handleBack = () => {
    setActiveModal(null);
  };

  const handleClose = () => {
    setActiveModal(null);
    setIsOpen(false);  // Close the entire modal when "Close" is clicked
  };

  return (
    <div className="px-4 py-64 bg-gradient-to-r from-blue-100 to-purple-200 grid place-content-center">
      <button
        onClick={() => setIsOpen(true)}
        className="bg-gradient-to-r from-violet-500 to-indigo-500 text-white font-medium px-6 py-3 rounded-lg shadow-md hover:opacity-90 transition-opacity"
      >
        Profile
      </button>
      <SpringModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        activeModal={activeModal}
        handleOpen={handleOpen}
        handleBack={handleBack}
        handleClose={handleClose}  // Pass down handleClose
      />
    </div>
  );
};

const SpringModal = ({ isOpen, setIsOpen, activeModal, handleOpen, handleBack, handleClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-white/80 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white text-indigo-600 p-6 rounded-lg w-full max-w-md shadow-xl cursor-default relative overflow-hidden"
          >
            <div className="relative z-10">
              {activeModal === null ? (
                <>
                  <h3 className="text-2xl font-bold text-center mb-4">Profile</h3>
                  <div className="grid gap-4">
                    <button
                      onClick={() => handleOpen("Personal Info")}
                      className="bg-blue-200 hover:bg-blue-300 text-blue-800 py-2 px-4 rounded"
                    >
                      Personal Info
                    </button>
                    <button
                      onClick={() => handleOpen("Notifications")}
                      className="bg-green-200 hover:bg-green-300 text-green-800 py-2 px-4 rounded"
                    >
                      Notifications
                    </button>
                    <button
                      onClick={() => handleOpen("Password")}
                      className="bg-purple-200 hover:bg-purple-300 text-purple-800 py-2 px-4 rounded"
                    >
                      Password
                    </button>
                    <button
                      onClick={() => handleOpen("Theme")}
                      className="bg-yellow-200 hover:bg-yellow-300 text-yellow-800 py-2 px-4 rounded"
                    >
                      Theme
                    </button>
                  </div>
                  {/* Single Close button below the fields */}
                  <div className="mt-4">
                    <button
                      onClick={handleClose}  // Close the modal and return to Profile
                      className="bg-red-200 hover:bg-red-300 text-red-800 py-2 px-4 rounded w-full"
                    >
                      Close
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
