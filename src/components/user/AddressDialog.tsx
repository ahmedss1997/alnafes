"use client";
import { IAddress } from "@/types/types";
import { useState } from "react";
import { FaBriefcase, FaEllipsisH, FaHome } from "react-icons/fa";

interface AddressDialogProps {
  initialData?: IAddress | null;
  onSave: (address: IAddress) => void;
  onClose: () => void;
}

const AddressDialog = ({ initialData, onSave, onClose }: AddressDialogProps) => {
  const [type, setType] = useState<"Home" | "Work" | "Other">(initialData?.type || "Home");
  const [name, setName] = useState(initialData?.name || "Home");
  const [country, setCountry] = useState(initialData?.country || "");
  const [city, setCity] = useState(initialData?.city || "");
  const [street, setStreet] = useState(initialData?.street || "");
  const [buildingNumber, setBuildingNumber] = useState(initialData?.buildingNumber || "");

  const handleTypeChange = (newType: "Home" | "Work" | "Other") => {
    setType(newType);
    // Automatically fill the "Address Name" field based on the selected type
    if (newType === "Home") {
      setName("Home");
    } else if (newType === "Work") {
      setName("Work");
    } else {
      setName(""); // Clear the name for "Other"
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const address: IAddress = {
      id: initialData?.id || Date.now(), // Use existing ID or generate a new one
      type,
      name,
      country,
      city,
      street,
      buildingNumber,
    };
    onSave(address);
    onClose();
  };



  return (
    <div className="fixed z-20 inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white px-8 rounded-lg w-full max-w-xl lg:max-w-3xl">
        <div className="flex justify-between items-center border-b border-gray-300 py-4">
          <h2 className="text-2xl font-semibold mb-6">{initialData ? "Edit Address" : "Add Address"}</h2>
          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-500 text-white rounded-md"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-primary text-white rounded-md"
              onClick={handleSubmit}
            >
              Save
            </button>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="px-8 py-4">
          {/* Address Type Selection */}
          <div className="mb-4">
            <div className="flex gap-4">
              {/* Home Box */}
              <div
                className={`flex flex-col items-center justify-center w-28 h-28 p-4 border rounded-md cursor-pointer transition-all ${
                  type === "Home" ? "border-primary bg-primary/10" : "border-gray-300"
                }`}
                onClick={() => handleTypeChange("Home")}
              >
                <FaHome className={`text-2xl ${type === "Home" ? "text-primary" : "text-gray-500"}`} />
                <span className="mt-2 text-sm font-medium">Home</span>
              </div>
              {/* Work Box */}
              <div
                className={`flex flex-col items-center justify-center w-28 h-28 p-4 border rounded-md cursor-pointer transition-all ${
                  type === "Work" ? "border-primary bg-primary/10" : "border-gray-300"
                }`}
                onClick={() => handleTypeChange("Work")}
              >
                <FaBriefcase className={`text-2xl ${type === "Work" ? "text-primary" : "text-gray-500"}`} />
                <span className="mt-2 text-sm font-medium">Work</span>
              </div>
              {/* Other Box */}
              <div
                className={`flex flex-col items-center justify-center w-28 h-28 p-4 border rounded-md cursor-pointer transition-all ${
                  type === "Other" ? "border-primary bg-primary/10" : "border-gray-300"
                }`}
                onClick={() => handleTypeChange("Other")}
              >
                <FaEllipsisH className={`text-2xl ${type === "Other" ? "text-primary" : "text-gray-500"}`} />
                <span className="mt-2 text-sm font-medium">Other</span>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Address Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 peer focus:outline-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Country</label>
            <input
              type="text"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 peer focus:outline-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">City</label>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 peer focus:outline-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Street</label>
            <input
              type="text"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 peer focus:outline-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Building Number</label>
            <input
              type="text"
              value={buildingNumber}
              onChange={(e) => setBuildingNumber(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 peer focus:outline-gray-300 rounded-md"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddressDialog;