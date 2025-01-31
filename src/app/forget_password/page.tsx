"use client";

import { useState } from "react";
import authPhoto from "../../../public/assets/authPhoto.png"
import { useGenerateCode } from '../../hooks/useAuthentication';
// import { setAuthData } from '../../store/slices/authSlice';
import { IAPIResult, ICurrentUser } from "@/types/types";
import { isValidEmail } from "@/code/validation";
import { useRouter } from 'next/navigation'


const GenerateCodePage = () => {
  const [credentialsForgetPassword, setCredentialsForgetPassword] = useState({ emailOrPhone: "" });
  const GenerateCode = useGenerateCode();
  const router = useRouter();

  const handleSubmitForgetPassword = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const params = {email: credentialsForgetPassword.emailOrPhone};
      if (isValidEmail(credentialsForgetPassword.emailOrPhone)) {
    }
    GenerateCode.mutate(params, {
      onSuccess: (data: IAPIResult<ICurrentUser>) => {
        if (data.code === 200) {
          console.log('Login successful!', data);
          router.push(`/reset_password?email=${credentialsForgetPassword.emailOrPhone}`);
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
            <div className=" bg-borderLine-10 backdrop-blur-[50px] rounded-2xl p-9">
              <h1 className="text-2xl font-semibold text-onSurface my-3 text-center">It’s okay! Reset your password</h1>
              <p className="text-bgGrayText50 text-xs font-medium text-center">Enter your email or phone number so we can send you the code</p>
              <form onSubmit={handleSubmitForgetPassword} className="mt-6">
                <div className="mb-4">
                  <label className="block text-bgGrayText50 font-medium mb-2">
                    Email/Phone
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-bgGrayText300"
                    placeholder="Enter your Email or Phone"
                    value={credentialsForgetPassword.emailOrPhone}
                    onChange={(e) => setCredentialsForgetPassword({ ...credentialsForgetPassword, emailOrPhone: e.target.value })}
                    required
                  />
                </div>
                <div className="text-center my-8">
                  <button onClick={handleSubmitForgetPassword} className="bg-primary text-white py-3 inline-block rounded-md w-full">
                    Send reset code
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GenerateCodePage;