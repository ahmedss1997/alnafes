

import { useMutation } from 'react-query';
import { get, post } from '@/api/server';
import { ILoginRequest, IRegisterRequest } from '@/types/types';

// Hook for login uselogin(aa)
export const useLogin = () =>
  useMutation((request: ILoginRequest) => post(`api/Auth/Login`, request, false));

// Hook for registration
export const useRegister = () =>
  useMutation((request: IRegisterRequest) => post(`api/Auth/SignUp`, request, false));

export const useVerfication = () =>
  useMutation(({ email, code }: { email: string; code: string }) => post(`api/Auth/VerificationEmail?Email=${email}&Code=${code}`, false));

export const useForgetPassword = () =>
  useMutation((request: ILoginRequest) => post(`api/Auth/ForeGetPassword?Email=${request.email}&Password=${request.password}`, false));

export const useGenerateCode = () =>
  useMutation(({ email }: { email: string }) => post(`api/Auth/GenerateCode?Email=${email}`, false));

export const useVerifyCode = () =>
  useMutation(({ email, code }: { email: string, code: string }) => get(`api/Auth/GetUserByEmailAndCode?Email=${email}&Code=${code}`, false));

// // Hook for fetching user profile
// export const useUserProfile = () =>
//   useQuery('userProfile', AuthenticationAPI.getUserProfile);

