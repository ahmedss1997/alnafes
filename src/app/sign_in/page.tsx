"use client";

import { useState } from "react";
import authPhoto from "../../../public/assets/authPhoto.png"
import { useLogin } from '../../hooks/useAuthentication';
import { PiEye, PiEyeClosed } from "react-icons/pi";
import Link from "next/link";
import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux';
import { setAuthData } from '../../store/slices/authSlice';
import { IAPIResult, ICurrentUser } from "@/types/types";


const SignInPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [credentialsLogin, setCredentialsLogin] = useState({ email: '', password: '' });
  const loginMutation = useLogin();
  const router = useRouter();
  const dispatch = useDispatch();

  const handleSubmitLogin = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    loginMutation.mutate(credentialsLogin, {
      onSuccess: async (data: IAPIResult<ICurrentUser>) => {
        if (data.code === 200) {
          dispatch(setAuthData(data.result));
          localStorage?.setItem('accessToken', data.result.token);
          localStorage?.setItem('currentUser', JSON.stringify(data.result));
          console.log('Login successful!', data);
          router.push('/');
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
            <div className=" bg-borderLine rounded-2xl p-9">
              <h1 className="text-2xl font-normal text-onSurface my-3 text-center">Log in</h1>
              <form onSubmit={handleSubmitLogin}>
                <div className="mb-4">
                  <label className="block text-bgGrayText50 font-medium mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Enter your email"
                    value={credentialsLogin.email}
                    onChange={(e) => setCredentialsLogin({ ...credentialsLogin, email: e.target.value })}
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
                    value={credentialsLogin.password}
                    onChange={(e) => setCredentialsLogin({ ...credentialsLogin, password: e.target.value })}
                    required
                  />
                  <div role="button" onClick={() => setShowPassword(!showPassword)} className="absolute bottom-0 end-0 flex items-center p-3.5 z-10">
                    {
                      showPassword ? <PiEye /> : <PiEyeClosed />
                    }
                  </div>
                </div>
                <div className="text-right">
                  <Link className="text-bgGrayText50 font-semibold" href={"./forget_password"}>Forget password ?</Link>
                </div>
                <div className="text-center my-8">
                  <button className="bg-primary text-white py-3 inline-block rounded-md w-full">log in</button>
                </div>
                <div className="text-center">
                  <span className="text-base font-medium text-bgGrayText300 mb-6">Don’t have an account ?</span>
                  <span>
                    <Link
                      onClick={handleSubmitLogin}
                      href={"./sign_up"}
                      className="text-bgGrayText50 px-3 py-2 cursor-pointer"
                    >
                      Sign up
                    </Link>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignInPage;