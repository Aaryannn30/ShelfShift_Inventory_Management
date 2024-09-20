import React from 'react';
import { FiEdit, FiChevronDown, FiTrash, FiShare, FiPlusSquare } from "react-icons/fi";
import { motion } from "framer-motion";
import { useState } from "react";
import { IconType } from "react-icons";
import { FaRegUserCircle } from "react-icons/fa";
import Profile from '../Dashboard/Profile';

const PDropdown = () => {
  const [open, setOpen] = useState(false);
  const [activeModal, setActiveModal] = useState(null);

  const handleOpen = (field) => {
    setActiveModal(field);
    setIsOpen(true); // Add this line to open the modal directly
  };

  const handleClose = () => {
    setActiveModal(null);
    setIsOpen(false);
  };
  const handleBack = () => {
    setActiveModal(null);
  }

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center justify-center">
      <motion.div animate={open ? "open" : "closed"} className="relative">
        <button
          onClick={() => setOpen((pv) => !pv)}
          className="flex items-center gap-2 px-3 py-2 rounded-md text-indigo-50 bg-indigo-500 hover:bg-indigo-500 transition-colors"
        >
          <span className="font-medium text-sm">
            <FaRegUserCircle />
          </span>
          <motion.span variants={iconVariants}>
            <FiChevronDown />
          </motion.span>
        </button>

        <motion.ul
          initial={wrapperVariants.closed}
          variants={wrapperVariants}
          style={{ originY: "top", translateX: "-80%" }}
          className="flex flex-col gap-2 p-2 rounded-lg bg-white shadow-xl absolute top-[120%] left-[50%] w-48 overflow-hidden"
        >
          <Option setOpen={setOpen} Icon={FiEdit} text="Profile" handleOpen={handleOpen} />
          <Option setOpen={setOpen} Icon={FiPlusSquare} text="Settings" handleOpen={handleOpen} />
          <Option setOpen={setOpen} Icon={FiShare} text="Password" handleOpen={handleOpen} />
          <Option setOpen={setOpen} Icon={FiTrash} text="Logout" />
        </motion.ul>
      </motion.div>
      {activeModal && <Profile activeModal={activeModal} handleBack={handleBack} handleClose={handleClose} isOpen={isOpen} />}
    </div>
  );
};

const Option = ({ text, Icon, setOpen, handleOpen }) => {
  return (
    <motion.li
      variants={itemVariants}
      onClick={() => {
        setOpen(false);
        handleOpen(text);
      }}
      className="flex items-center gap-2 w-full p-2 text-xs font-medium whitespace-nowrap rounded-md hover:bg-indigo-100 text-slate-700 hover:text-indigo-500 transition-colors cursor-pointer"
    >
      <motion.span variants={actionIconVariants}>
        <Icon />
      </motion.span>
      <span>{text}</span>
    </motion.li>
  );
};

export default PDropdown;

// Animation variants remain the same
const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const iconVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: "afterChildren",
    },
  },
};

const actionIconVariants = {
  open: { scale: 1, y: 0 },
  closed: { scale: 0, y: -7 },
};
