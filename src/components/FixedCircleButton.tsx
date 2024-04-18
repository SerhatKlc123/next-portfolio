"use client"
import React, { useState } from 'react';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

const FixedCircleButton: React.FC = () => {
  const [isTop, setIsTop] = useState<boolean>(false);

  const handleClick = () => {
    if (isTop) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }
    setIsTop(!isTop);
  };

  return (
    <button
      className="fixed bottom-6 right-6 text-white p-3 rounded-full shadow-lg transition duration-300 focus:outline-none bg-gradient-to-br from-[#eae6ff] via-red-500 to-orange-600 z-40"
      onClick={handleClick}
    >
      {!isTop ? <FaArrowDown /> : <FaArrowUp />}
    </button>
  );
};

export default FixedCircleButton;
