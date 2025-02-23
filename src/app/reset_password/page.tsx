"use client";

import { useState } from "react";
import authPhoto from "../../../public/assets/authPhoto.png"
import { useGenerateCode, useVerifyCode, useForgetPassword } from '../../hooks/useAuthentication';
import { IAPIResult, ICurrentUser } from "@/types/types";
import OTPComponent from "@/components/OTPComponent ";
import { useRouter } from 'next/navigation'
import { PiEye, PiEyeClosed } from "react-icons/pi";


const VerifyCodeResetPassword = () => {
  const router = useRouter();
  const GenerateCode = useGenerateCode();
  const verifyCode = useVerifyCode();
  const ForgetPassword = useForgetPassword();
  const [code, setCode] = useState('');
  const [isCodeVerified, setIsCodeVerified] = useState(false);
  const [resetPasswordRequest, setResetPasswordRequest] = useState({
    password: '',
    confirmPassword: '',
    showPassword: false,
    showConfirmPassword: false
  });

  const handleResendCode = () => {
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const email = params.get('email');
  
    GenerateCode.mutate({email: email || ''}, {
      onSuccess: (data: IAPIResult<ICurrentUser>) => {
        if (data.code === 200) {
          console.log('Login successful!', data);
        }
      },
      onError: (error: unknown) => {
        console.error('Login failed:', error);
      },
    });
  };

  const handleVerifyCode = () => {

    if (!code) {
      alert('Please enter a code');
      return;
    }
    
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const email = params.get('email');

    verifyCode.mutate({email: email || '', code: code}, {
      onSuccess: (data: IAPIResult<ICurrentUser>) => {
        if (data.code === 200) {
          setIsCodeVerified(true);
        }
      },
      onError: (error: unknown) => {
        console.error('Login failed:', error);
      },
    });
  };

  const handleSubmitResetPassword = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const email = params.get('email');
    
    if (resetPasswordRequest.password !== resetPasswordRequest.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    ForgetPassword.mutate({email: email || '', password: resetPasswordRequest.password}, {
      onSuccess: (data: IAPIResult<ICurrentUser>) => {
        if (data.code === 200) {
          console.log('Login successful!', data);
          router.push(`/sign_in`);
        }
      },
      onError: (error: unknown) => {
        console.error('Login failed:', error);
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
            <div className="bg-borderLine-10 backdrop-blur-[50px] rounded-2xl p-9">
                {
                  !isCodeVerified ? (
                    // verify code
                    <div className="text-center">
                      <h1 className="text-2xl font-semibold text-onSurface my-3">Write reset code</h1>
                      <p className="text-bgGrayText50 text-xs font-medium">We have sent a 4 digit code on your phone/Email</p>
                      <OTPComponent length={6} onComplete={(OTP: string) => setCode(OTP)} />
                      <button onClick={handleVerifyCode} className="bg-primary text-white py-3 inline-block rounded-md w-full">Continue</button>
                      <button onClick={() => handleResendCode()}  className="font-semibold text-onSurface mt-3">Resend</button>
                    </div>
                  )
                  : (
                    // reset password
                    <div>
                      <h1 className="text-2xl font-semibold text-onSurface my-3 text-center"> Reset your password </h1>
                      <p className="text-bgGrayText50 text-xs font-medium text-center"> We recommend choosing a strong and unique password </p>

                      <form onSubmit={handleSubmitResetPassword} className="mt-6">
                        <div className="mb-4 relative">
                          <label className="block text-bgGrayText50 font-medium mb-2">
                            New Password
                          </label>
                          <input
                            id="password"
                            type={resetPasswordRequest.showPassword ? "text" : "password"}
                            className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-bgGrayText300"
                            placeholder="Enter your Email or Phone"
                            value={resetPasswordRequest.password}
                            onChange={(e) => setResetPasswordRequest({ ...resetPasswordRequest, password: e.target.value })}
                            required
                          />
                          <div role="button" onClick={() => setResetPasswordRequest({ ...resetPasswordRequest, showPassword: !resetPasswordRequest.showPassword })} className="absolute bottom-0 end-0 flex items-center p-3.5 z-10">
                            {
                              resetPasswordRequest.showPassword ? <PiEye /> : <PiEyeClosed />
                            }
                          </div>
                        </div>
                        <div className="mb-4 relative">
                          <label className="block text-bgGrayText50 font-medium mb-2">
                            Confirm Password
                          </label>
                          <input
                            id="password"
                            type={resetPasswordRequest.confirmPassword ? "text" : "password"}
                            className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-bgGrayText300"
                            placeholder="Enter your Email or Phone"
                            value={resetPasswordRequest.confirmPassword}
                            onChange={(e) => setResetPasswordRequest({ ...resetPasswordRequest, confirmPassword: e.target.value })}
                            required
                          />
                          <div role="button" onClick={() => setResetPasswordRequest({ ...resetPasswordRequest, showConfirmPassword: !resetPasswordRequest.showConfirmPassword })} className="absolute bottom-0 end-0 flex items-center p-3.5 z-10">
                            {
                              resetPasswordRequest.showConfirmPassword ? <PiEye /> : <PiEyeClosed />
                            }
                          </div>
                        </div>
                        <div className="text-center my-8">
                          <button onClick={handleSubmitResetPassword} className="bg-primary text-white py-3 inline-block rounded-md w-full">
                            Send reset code
                          </button>
                        </div>
                      </form>
                    </div>
                  )
                }
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VerifyCodeResetPassword;