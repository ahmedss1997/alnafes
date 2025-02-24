"use client";

import { useState } from "react";
import authPhoto from "../../../public/assets/authPhoto.png"
import { useVerfication } from '../../hooks/useAuthentication';
import Link from "next/link";
import { useRouter } from 'next/navigation'

const VerficationAccount = () => {
  const [credentialsVerfication, setCredentialsVerfication] = useState({  Email: '', Code: '' });
  const VerficationMutation = useVerfication();
  const router = useRouter();

  const handleSubmitVerfication = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    VerficationMutation.mutate({ email: credentialsVerfication.Email, code: credentialsVerfication.Code }, {
      onSuccess: (data) => {
        console.log('Verfication successful!', data);
        localStorage?.setItem('accessToken', data.token);
        router.push('/sign_in');
      },
      onError: (error) => {
        console.error('Verfication failed:', error);
      },
    });
  };
  return (
    <div className="login flex items-center justify-center pt-12"
      style={{
        backgroundImage: `url(${authPhoto.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      <div className="container mx-auto px-4 py-5 sm:px-6 lg:px-8 ">
        <div className="row-all w-full flex flex-wrap items-center">
          <div className="col-item hidden lg:block lg:max-w-[50%] lg:basis-1/2 max-w-full basis-full p-3">
            <div className="text-center text-onSurface">
              <h1 className="text-2xl font-normal">IBN AL-NAFIS Bakery</h1>
              <hr className="my-5" />
              <p className="text-2xl font-semibold">Who has never tasted IBN Al-nafis, knows not what is bakeries.</p>
            </div>
          </div>
          <div className="col-item lg:max-w-[50%] lg:basis-1/2 max-w-full basis-full p-3">
            <div className=" bg-borderLine rounded-2xl p-9">
              <h1 className="text-2xl font-normal text-onSurface my-3 text-center">Enter Verfication Code</h1>
              <form onSubmit={handleSubmitVerfication}>
                <div className="mb-4">
                  <label className="block text-bgGrayText50 font-medium mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Enter your email"
                    value={credentialsVerfication.Email}
                    onChange={(e) => setCredentialsVerfication({ ...credentialsVerfication, Email: e.target.value })}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-bgGrayText50 font-medium mb-2">
                    Verfication Code
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="w-full p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
                    placeholder="Enter your verfication code"
                    value={credentialsVerfication.Code}
                    onChange={(e) => setCredentialsVerfication({ ...credentialsVerfication, Code: e.target.value })}
                    required
                  />
                </div>
                <div className="text-center mt-12 mb-8">
                  <Link
                    onClick={handleSubmitVerfication}
                    href={"./sign_in"}
                    className="bg-primary text-white py-3 inline-block rounded-md w-full"
                  >
                    <button>Send Code</button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VerficationAccount;