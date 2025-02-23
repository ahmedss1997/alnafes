"use client";
import avatar from "../../../../public/assets/avatart.png";
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { useState } from "react";
import EditUserDialog from "../../../components/user/EditUserDialog";
import { IAddress } from "../../../types/types";
import AddressDialog from "../../../components/user/AddressDialog";
import { CiMenuKebab } from "react-icons/ci";
import { FaPen, FaTrashAlt } from "react-icons/fa";

export default function GeneralContent() {
  const { currentUser } = useSelector((state: RootState) => state.auth);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isAddressDialogOpen, setIsAddressDialogOpen] = useState(false);
  const [addresses, setAddresses] = useState<IAddress[]>([]);
  const [editingAddress, setEditingAddress] = useState<IAddress | null>(null);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  const handleSaveAddress = (address: IAddress) => {
    if (editingAddress) {
      // Update existing address
      setAddresses((prev) =>
        prev.map((a) => (a.id === address.id ? address : a))
      );
    } else {
      // Add new address
      setAddresses((prev) => [...prev, address]);
    }
    setEditingAddress(null);
  };

  const handleDeleteAddress = (id: number) => {
    setAddresses((prev) => prev.filter((a) => a.id !== id));
  };

  const toggleDropdown = (adressId: number) => {
    setActiveDropdown((prev) => (prev === adressId ? null : adressId));
  };

  return (
    <div className="container px-0">
      <div className="bg-bgGrayText50 p-8 rounded-md mb-8">
        <div className="flex justify-between items-center border-b border-bgGrayText300 pb-4">
          <h3 className="text-2xl font-semibold text-bgGrayText700">Personal Info</h3>
          <button onClick={() => setIsEditDialogOpen(true)}>Edit</button>
        </div>
        <div className="row-all w-full flex items-center justify-between flex-wrap">
          <div className="col-item lg:max-w-[33%] lg:basis-1/3 max-w-full basis-full p-3">
            <div className="w-full h-full">
              <img src={avatar.src} alt="" className="w-[150px] h-[150px]" />
            </div>
          </div>
          <div className="col-item lg:max-w-[33%] lg:basis-1/3 max-w-full basis-full p-3">
            <div className="w-full h-full my-8">
              <h4 className="text-lg text-bgGrayText400 font-medium">First Name</h4>
              <p className="text-lg text-bgGrayText800">{currentUser?.firstName}</p>
            </div>
            <div className="w-full h-full my-8">
              <h4 className="text-lg text-bgGrayText400 font-medium">Mobile number</h4>
              <p className="text-lg text-bgGrayText800">{currentUser?.phoneNumber}</p>
            </div>
          </div>
          <div className="col-item lg:max-w-[33%] lg:basis-1/3 max-w-full basis-full p-3">
            <div className="w-full h-full my-8">
              <h4 className="text-lg text-bgGrayText400 font-medium">Last Name</h4>
              <p className="text-lg text-bgGrayText800">{currentUser?.lastName}</p>
            </div>
            <div className="w-full h-full my-8">
              <h4 className="text-lg text-bgGrayText400 font-medium">Email</h4>
              <p className="text-lg text-bgGrayText800">{currentUser?.email}</p>
            </div>
          </div>
        </div>
      </div>
      {/* Address Section */}
      <div className="bg-bgGrayText50 p-8 rounded-md mb-8">
        <div className="flex justify-between items-center border-b border-bgGrayText300 pb-4">
          <h3 className="text-2xl font-semibold text-bgGrayText700">Address</h3>
          <button onClick={() => setIsAddressDialogOpen(true)}>Add</button>
        </div>
        {addresses.map((address) => (
          <div key={address.id} className="flex justify-between items-center border-b border-bgGrayText300 py-4">
            <div>
              <p className="text-lg text-bgGrayText800">{address.name}</p>
              <p className="text-sm text-bgGrayText600">{address.buildingNumber}, {address.street}, {address.city}, {address.country}</p>
            </div>
            <div className="relative">
              <button
                className={`px-2 py-1 rounded-md `}
                onClick={() => toggleDropdown(address.id)}
              >
                <CiMenuKebab />
              </button>
              {activeDropdown === address.id && (
                <ul className="absolute top-8 right-0 z-10 w-40 bg-white border rounded-md shadow-lg">
                  <li className="px-4 py-2">
                    <button
                      className="w-full flex items-center gap-3"
                      onClick={() => {
                        setEditingAddress(address);
                        setIsAddressDialogOpen(true);
                      }}
                    >
                      <FaPen />
                      <span>Edit</span>
                    </button>
                  </li>
                  <li className="px-4 py-2">
                    <button className="flex items-center gap-3" onClick={() => handleDeleteAddress(address.id)}>
                      <FaTrashAlt />
                      <span>Delete</span>
                    </button>
                  </li>
                </ul>
              )}
            </div>
            {/* <div className="flex gap-2">
              <button
                onClick={() => {
                  setEditingAddress(address);
                  setIsAddressDialogOpen(true);
                }}
              >
                Edit
              </button>
              <button onClick={() => handleDeleteAddress(address.id)}>Delete</button>
            </div> */}
          </div>
        ))}
      </div>

      {/* Dialogs */}
      {isEditDialogOpen && (
        <EditUserDialog onClose={() => setIsEditDialogOpen(false)} />
      )}
      {isAddressDialogOpen && (
        <AddressDialog
          initialData={editingAddress}
          onSave={handleSaveAddress}
          onClose={() => {
            setIsAddressDialogOpen(false);
            setEditingAddress(null);
          }}
        />
      )}
    </div>
  );
}
