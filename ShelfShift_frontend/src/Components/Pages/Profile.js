import React, { useState } from 'react';
import { AnimatePresence, motion } from "framer-motion";

const Profile = ({ activeModal, handleBack, handleClose, isOpen }) => {
  const [isModalOpen, setIsModalOpen] = useState(isOpen);
  const [selectedField, setSelectedField] = useState("");

  const handleOpen = (field) => {
    setSelectedField(field);
    setIsModalOpen(true);
  };

  return (
    <div className="p-4 mt-[720px]">
      <div className="relative inline-block text-left">
        {isModalOpen && (
          <div
            className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
          </div>
        )}
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
          >
            <motion.div
              initial={{ scale: 0, rotate: "12.5deg" }}
              animate={{ scale: 1, rotate: "0deg" }}
              exit={{ scale: 0, rotate: "0deg" }}
              className="bg-white text-indigo-600 p-6 rounded-lg w-full max-w-md shadow-xl cursor-default relative overflow-hidden"
            >
              <div className="relative z-10">
                {selectedField === "" && activeModal === "Profile" && (
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
                    <div className="mt-4">
                      <button
                        onClick={handleClose}
                        className="bg-red-200 hover:bg-red-300 text-red-800 py-2 px-4 rounded w-full"
                      >
                        Logout
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
                  </>
                )}
                {selectedField && (
                  <>
                    <h3 className="text-2xl font-bold text-center mb-4">{selectedField}</h3>
                    <p className="text-center mb-6">
                      {selectedField} content goes here.
                    </p>
                    <button
                      onClick={() => setSelectedField("")}
                      className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded w-full mb-4"
                    >
                      Back
                    </button>
                  </>
                )}
                {activeModal === "Settings" && (
                  <>
                    <h3 className="text-2xl font-bold text-center mb-4">Settings</h3>
                    <p className="text-center mb-6">
                      Settings content goes here.
                    </p>
                    <button
                      onClick={handleBack}
                      className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded w-full mb-4"
                    >
                      Back
                    </button>
                  </>
                )}
                {activeModal === "Password" && (
                  <>
                    <h3 className="text-2xl font-bold text-center mb-4">Password</h3>
                    <p className="text-center mb-6">
                      Password content goes here.
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
    </div>
  );
};

export default Profile;
