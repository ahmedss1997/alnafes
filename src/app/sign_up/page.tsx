"use client";

import { useState } from "react";
import authPhoto from "../../../public/assets/authPhoto.png"
import { useRegister } from '../../hooks/useAuthentication';
import { PiEye, PiEyeClosed } from "react-icons/pi";
import Link from "next/link";
import { useRouter } from 'next/navigation'

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [credentialsRegister, setCredentialsRegister] = useState({ firstName: '', lastName: '', phoneNumber: '', email: '', password: '',  });
  const registerMutation = useRegister();
  const router = useRouter();

  const handleSubmitRegister = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const formattedRegisterData = {
      ...credentialsRegister,
    };
    registerMutation.mutate(formattedRegisterData, {
      onSuccess: (data) => {
        console.log('Register successful!', data);
        localStorage.setItem('accessToken', data.token);
        router.push('/verfication_account');
      },
      onError: (error: any) => {
        console.error('Register failed:', error.response);
      },
    });
  };
  return (
    <div className="register flex items-center justify-center pt-12"
      style={{
        backgroundImage: `url(${authPhoto.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      <div className="container mx-auto px-4 py-5 sm:px-6 lg:px-8 ">
        <div className="row-all w-full flex flex-wrap items-center"> 
          <div className="col-item lg:max-w-[50%] lg:basis-1/2 max-w-full basis-full p-3">
            <div className=" bg-borderLine rounded-2xl p-9">
              <h1 className="text-2xl font-normal text-onSurface my-3 text-center">Create an account</h1>
              <form onSubmit={handleSubmitRegister}>
                <div className="mb-4">
                  <label className="block text-bgGrayText50 font-medium mb-2">
                    First name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="w-full p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
                    placeholder="Enter your first name"
                    value={credentialsRegister.firstName}
                    onChange={(e) => setCredentialsRegister({ ...credentialsRegister, firstName: e.target.value })}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-bgGrayText50 font-medium mb-2">
                    Last name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Enter your last name"
                    value={credentialsRegister.lastName}
                    onChange={(e) => setCredentialsRegister({ ...credentialsRegister, lastName: e.target.value })}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-bgGrayText50 font-medium mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Enter your email"
                    value={credentialsRegister.email}
                    onChange={(e) => setCredentialsRegister({ ...credentialsRegister, email: e.target.value })}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-bgGrayText50 font-medium mb-2">
                    Phone number
                  </label>
                  <input
                    id="phone"
                    type="number"
                    className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="--------"
                    value={credentialsRegister.phoneNumber}
                    onChange={(e) => setCredentialsRegister({ ...credentialsRegister, phoneNumber: e.target.value })}
                    required
                  />
                </div>
                <div className="mb-4 relative">
                  <label className="block text-bgGrayText50 font-medium mb-2" >
                    Password
                  </label>
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Enter your password"
                    value={credentialsRegister.password}
                    onChange={(e) => setCredentialsRegister({ ...credentialsRegister, password: e.target.value })}
                    required
                  />
                  <div role="button" onClick={() => setShowPassword(!showPassword)} className="absolute bottom-0 end-0 flex items-center p-3.5 z-10">
                    {
                      showPassword ? <PiEye /> : <PiEyeClosed />
                    }
                  </div>
                </div>
                <div className="mb-4 relative">
                  <label className="block text-bgGrayText50 font-medium mb-2" >
                    Confirm Password
                  </label>
                  <input
                    id="password"
                    type={showConfirmPassword ? "text" : "password"}
                    className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Rewrite your password"
                    required
                  />
                  <div role="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute bottom-0 end-0 flex items-center p-3.5 z-10">
                    {
                      showConfirmPassword ? <PiEye /> : <PiEyeClosed />
                    }
                  </div>
                </div>
                <div className="text-center mt-12 mb-8">
                <Link
                  onClick={handleSubmitRegister}
                  href={"./verfication_account"}
                  className="bg-primary text-white py-3 inline-block rounded-md w-full"
                >
                  <button>Sign up</button>
                </Link>
                </div>
                <div className="text-center">
                  <span className="text-base font-medium text-bgGrayText300 mb-6">Already have an account ?</span>
                  <span>
                    <Link
                      href={"./sign_in"}
                      className="text-bgGrayText50 px-3 py-2 cursor-pointer"
                    >
                      Log in
                    </Link>
                  </span>
                </div>
              </form>
            </div>
          </div>
          <div className="col-item hidden lg:block lg:max-w-[50%] lg:basis-1/2 max-w-full basis-full p-3">
            <div className="text-center text-onSurface">
              <h1 className="text-2xl font-normal">IBN AL-NAFIS Bakery</h1>
              <hr className="my-5" />
              <p className="text-2xl font-semibold">Who has never tasted IBN Al-nafis, knows not what is bakeries.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUpPage;