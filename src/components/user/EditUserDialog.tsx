"use client";
import { useState } from "react";
import { IAPIResult, ICurrentUser, IUserUpdateRequest } from '@/types/types';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { setAuthData } from '@/store/slices/authSlice';
import { useUserUpdate } from "@/hooks/useProfile";
import avatar from "../../../public/assets/avatart.png";

const EditUserDialog = ({ onClose }: { onClose: () => void }) => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: RootState) => state.auth);
  const [firstName, setFirstName] = useState(currentUser?.firstName || "");
  const [lastName, setLastName] = useState(currentUser?.lastName || "");
  const [email, setEmail] = useState(currentUser?.email || "");
  const [phoneNumber, setPhoneNumber] = useState(currentUser?.phoneNumber || 0);
  const [image, setImage] = useState<File | null>(null);
  const updateUser = useUserUpdate();

  const handleUpdateUser = (request: IUserUpdateRequest) => {
    updateUser.mutate(request, {
      onSuccess: async (data: IAPIResult<ICurrentUser>) => {
        if (data.code === 200) {
          const img = currentUser?.image || null;
          const img1 = image ? URL.createObjectURL(image) : null;
          const user = currentUser || {} as ICurrentUser;
          dispatch(setAuthData({
            ...user,
            firstName,
            lastName,
            email,
            phoneNumber,
            image: img1 || img,
          }));
          onClose();
          console.log('update successful!', data);
        }
      },
      onError: (error: unknown) => {
        console.error('Login failed:', error);
      },
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const request: IUserUpdateRequest = {
      FirstName: firstName,
      LastName: lastName,
      Email: email,
      PhoneNumber: phoneNumber,
      Id: currentUser?.id,
      Image: null
    };
    handleUpdateUser(request);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white px-8 rounded-lg w-full max-w-xl lg:max-w-3xl">
        <div className="flex justify-between items-center border-b border-gray-300 py-4">
          <h2 className="text-2xl font-semibold">Edit Personal Info</h2>
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
          <div className="mb-4 flex items-center">
            <div className="relative w-40 h-40 rounded-full overflow-hidden border-2 border-gray-300">
              <img
                src={currentUser?.image || avatar.src}
                alt="Profile"
                className="w-full h-full object-cover"
              />
              <label
                htmlFor="profile-image-upload"
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
              </label>
            </div>
            <input
              id="profile-image-upload"
              type="file"
              onChange={(e) => setImage(e.target.files?.[0] || null)}
              className="hidden"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">First Name</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 peer focus:outline-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Last Name</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 peer focus:outline-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 peer focus:outline-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 peer focus:outline-gray-300 rounded-md"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUserDialog;