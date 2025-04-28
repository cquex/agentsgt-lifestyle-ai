import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300 ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <div
        className="bg-white p-6 rounded-lg max-w-2xl w-full relative max-h-[90vh] overflow-hidden transform transition-all duration-300"
        style={{
          transform: isOpen ? "scale(1)" : "scale(0.95)"
        }}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-black"
        >
          ✖️
        </button>
        <div className="overflow-y-auto max-h-[75vh] pr-2">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
