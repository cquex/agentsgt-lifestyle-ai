import React from "react";
import Button from "components/Button";

interface ModalConfirmProps {
  isOpen: boolean;
  title: string;
  description: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const ModalConfirm: React.FC<ModalConfirmProps> = ({
  isOpen,
  title,
  description,
  onConfirm,
  onCancel
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300">
      <div className="bg-white p-6 rounded-lg max-w-md w-full relative max-h-[90vh] overflow-hidden">
        <button
          onClick={onCancel}
          className="absolute top-2 right-2 text-gray-500 hover:text-black"
        >
          ✖️
        </button>

        <div className="flex flex-col items-center text-center">
          <h2 className="text-xl font-bold mb-4">{title}</h2>
          <p className="text-gray-600 mb-6">{description}</p>
        </div>

        <div className="flex justify-end gap-2">
          <Button variant="outline" onClick={onCancel}>
            No
          </Button>
          <Button onClick={onConfirm}>Si</Button>
        </div>
      </div>
    </div>
  );
};

export default ModalConfirm;
