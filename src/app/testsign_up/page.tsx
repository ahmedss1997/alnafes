"use client";

import { useState } from 'react';
import { PiEye, PiEyeClosed } from 'react-icons/pi';
import { useLogin, useRegister } from '../../hooks/useAuthentication';

const AuthPage = () => {
  const [activeTab, setActiveTab] = useState('login');
  const [showPassword, setShowPassword] = useState(false);
  const [credentialsLogin, setCredentialsLogin] = useState({ email: '', password: '' });
  const [credentialsRegister, setCredentialsRegister] = useState({ firstName: '', lastName: '', phoneNumber: '0100415245', email: '', password: '', gender: 0, birthday: { year: 0, month: 0, day: 0, } });
  const loginMutation = useLogin();
  const registerMutation = useRegister();

  const handleForgetPassword = () => {
    setActiveTab('resetPassword');
  };

  const handleResetPassword = () => {
    setActiveTab('login');
  };

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    loginMutation.mutate(credentialsLogin, {
      onSuccess: (data) => {
        // alert('Login successful!');
        console.error('Login successful!', data);
        localStorage.setItem('accessToken', data.token);
      },
      onError: (error) => {
        // alert('Login failed: ' + error.response.data.message);
        console.error('Login failed:', error.response);
      },
    });
  };

  const handleSubmitRegister = (e) => {
    e.preventDefault();
  
    // Parse the birthday into the required format
    // const [year, month, day] = credentialsRegister.birthday.split('-').map(Number);
    const formattedRegisterData = {
      ...credentialsRegister,
      // birthday: new Date(year, month - 1, day).toJSON(),
      gender: Number(credentialsRegister.gender), // Ensure gender is numeric
    };
  
    registerMutation.mutate(formattedRegisterData, {
      onSuccess: (data) => {
        console.log('Register successful!', data);
        localStorage.setItem('accessToken', data.token);
      },
      onError: (error) => {
        console.error('Register failed:', error.response);
      },
    });
  };
  

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-[712px] bg-white shadow-lg rounded-lg p-8">
        {/* Tabs */}
        {activeTab !== 'forgotPassword' && activeTab !== 'resetPassword' && (
          <div className="w-1/2 mb-3 mx-auto">
            <div className="flex justify-between border-b mb-6">
              <button
                className={`w-1/2 py-2 text-center text-2xl font-bold ${
                  activeTab === 'login' ? 'text-primary border-b-2 border-primary' : 'text-grayColor'
                }`}
                onClick={() => setActiveTab('login')}
              >
                Login
              </button>
              <button
                className={`w-1/2 py-2 text-center text-2xl font-bold ${
                  activeTab === 'Sign_up' ? 'text-primary border-b-2 border-primary' : 'text-grayColor'
                }`}
                onClick={() => setActiveTab('Sign_up')}
              >
                Sign up
              </button>
            </div>
          </div>
        )}

        {/* Forms */}
        {activeTab === 'login' && (
          <form onSubmit={handleSubmitLogin}> 
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Email"
                value={credentialsLogin.email}
                onChange={(e) => setCredentialsLogin({ ...credentialsLogin, email: e.target.value })}
                required
              />
            </div>
            <div className="mb-4 relative">
              <label className="block text-gray-700 font-medium mb-2" >
                Password
              </label>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Password"
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
            <div className="">
              <div onClick={() => setActiveTab('forgotPassword')} className="flex items-center justify-end">
                <button className='text-grayColor'>
                  Forget Password ?
                </button>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white py-2 px-4 mt-4 rounded-lg"
            >
              {loginMutation.isLoading ? 'Logging in...' : 'Login'}
            </button>
          </form>
        )}

        {activeTab === 'Sign_up' && (
          <form  onSubmit={handleSubmitRegister}>
            <div className='flex flex-wrap'>
              <div className='col-item lg:basis-1/2 basis-full'>
                <div className="mb-4 mr-2">
                  <label className="block text-gray-700 font-medium mb-2">
                    First Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="First Name"
                    value={credentialsRegister.firstName}
                    onChange={(e) => setCredentialsRegister({ ...credentialsRegister, firstName: e.target.value })}
                    required
                  />
                </div>
              </div>
              <div className='col-item lg:basis-1/2 basis-full'>
                <div className="mb-4 ml-2">
                  <label className="block text-gray-700 font-medium mb-2">
                    Last Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Last Name"
                    value={credentialsRegister.lastName}
                    onChange={(e) => setCredentialsRegister({ ...credentialsRegister, lastName: e.target.value })}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                E-mail *
              </label>
              <input
                id="email"
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Email"
                value={credentialsRegister.email}
                onChange={(e) => setCredentialsRegister({ ...credentialsRegister, email: e.target.value })}
                required
              />
            </div>
            <div className="mb-4 relative">
              <label className="block text-gray-700 font-medium mb-2" >
                Password
              </label>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Password"
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
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2" >
                Gender
              </label>
              <select
                id="gender"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                value={credentialsRegister.gender}
                onChange={(e) => setCredentialsRegister({ ...credentialsRegister, gender: e.target.value })}
                required
              >
                <option value="">Gender</option>
                <option value="0">Male</option>
                <option value="1">Female</option>
                <option value="2">Other</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2" >
                Birthday
              </label>
              <input
                id="password"
                type="date"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="DD/MM/YYYY"
                value={credentialsRegister.birthday}
                onChange={(e) => setCredentialsRegister({ ...credentialsRegister, birthday: e.target.value })}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white py-2 px-4 mt-4 rounded-lg"
            >
              Sign Up
            </button>
          </form>
        )}

        {activeTab === 'forgotPassword' && (
          <div>
            <div className='mb-3'>
              <h3 className='text-2xl font-semibold text-blackText mb-2'>Forgot Password</h3>
              <p className='text-graySubText'>Enter the email address or mobile phone number associated with your Smart Cell  account.</p>
            </div>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Email"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white py-2 px-4 mt-2 rounded-lg"
                onClick={() => handleForgetPassword()}
              >
                Send
              </button>
              <div className="mt-4">
                <div className="flex items-center mb-2">
                  <span className='mx-2 text-grayColor'>Already have account?</span>
                  <button onClick={() => setActiveTab('login')} className='text-primary font-medium'>
                    Sign in
                  </button>
                </div>
                <div className="flex items-center mb-1">
                  <span className='mx-2 text-grayColor'>Don’t have account?</span>
                  <button onClick={() => setActiveTab('Sign_up')} className='text-primary font-medium'>
                    Sign Up
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}

        {activeTab === 'resetPassword' && (
          <div>
            <div className='mb-3'>
              <h3 className='text-2xl font-semibold text-blackText mb-2'>Reset Password</h3>
            </div>
            <form>
              <div className="mb-4 relative">
                <label className="block text-gray-700 font-medium mb-2">
                  New Password
                </label>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Password"
                />
                <div role="button" onClick={() => setShowPassword(!showPassword)} className="absolute bottom-0 end-0 flex items-center p-3.5 z-10">
                  {
                    showPassword ? <PiEye /> : <PiEyeClosed />
                  }
                </div>
              </div>
              <div className="mb-4 relative">
                <label className="block text-gray-700 font-medium mb-2" >
                  Confirm Password
                </label>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Password"
                />
                <div role="button" onClick={() => setShowPassword(!showPassword)} className="absolute bottom-0 end-0 flex items-center p-3.5 z-10">
                  {
                    showPassword ? <PiEye /> : <PiEyeClosed />
                  }
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white py-2 px-4 mt-2 rounded-lg"
                onClick={() => handleResetPassword()}
              >
                Reset Password
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default AuthPage
