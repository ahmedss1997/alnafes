"use client";
import avatar from "../../../../public/assets/avatart.png";
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';

export default function GeneralContent() {
  const { currentUser } = useSelector((state: RootState) => state.auth);
  return (
    <div className="container px-0">
      <div className="bg-bgGrayText50 p-8 rounded-md mb-8">
        <div className="flex justify-between items-center border-b border-bgGrayText300 pb-4">
          <h3 className="text-2xl font-semibold text-bgGrayText700">Personal Info</h3>
          <button>Edit</button>
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
    </div>
  );
}
