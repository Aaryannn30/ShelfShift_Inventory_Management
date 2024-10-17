import React, { useState, useContext } from 'react';
import { FiEdit, FiChevronDown, FiTrash } from "react-icons/fi";
import { motion } from "framer-motion";
import { FaRegUserCircle } from "react-icons/fa";
import Profile from '../Dashboard/Profile';
import AuthContext from '../../context/AuthContext';

const PDropdown = () => {
  const [open, setOpen] = useState(false);
  const [activeModal, setActiveModal] = useState(null);
  const { logoutUser } = useContext(AuthContext);

  const handleOpen = (field) => {
    setActiveModal(field);
    setIsOpen(true);
  };

  const handleClose = () => {
    setActiveModal(null);
    setIsOpen(false);
  };

  const handleBack = () => {
    setActiveModal(null);
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block">
      <motion.button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition-colors"
      >
        <FaRegUserCircle className="w-5 h-5" />
        <FiChevronDown className={`ml-2 transition-transform ${open ? 'rotate-180' : 'rotate-0'}`} />
      </motion.button>

      {open && (
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg overflow-hidden z-10"
        >
          <DropdownOption Icon={FiEdit} text="Profile" onClick={() => handleOpen("Profile")} />
          <DropdownOption Icon={FiTrash} text="Logout" onClick={logoutUser} />
        </motion.ul>
      )}

      {activeModal && (
        <Profile activeModal={activeModal} handleBack={handleBack} handleClose={handleClose} isOpen={isOpen} />
      )}
    </div>
  );
};

const DropdownOption = ({ text, Icon, onClick }) => {
  return (
    <motion.li
      onClick={onClick}
      className="flex items-center p-3 text-sm text-gray-700 hover:bg-indigo-100 cursor-pointer transition-colors"
      whileHover={{ backgroundColor: "#e5e7eb" }} // Tailwind's gray-200
    >
      <Icon className="w-4 h-4 mr-2" />
      <span>{text}</span>
    </motion.li>
  );
};

export default PDropdown;
