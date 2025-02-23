

import { useMutation } from '@tanstack/react-query';
import { get, post } from '../api/server';
import { ILoginRequest, IRegisterRequest } from '../types/types';

export const useLogin = () =>
  useMutation({
    mutationFn: (request: ILoginRequest) => post(`api/Auth/Login`, request, false),
  });

// Hook for registration
export const useRegister = () =>
  useMutation({mutationFn: (request: IRegisterRequest) => post(`api/Auth/SignUp`, request, false) });

export const useVerfication = () =>
  useMutation({mutationFn: ({ email, code }: { email: string; code: string }) => post(`api/Auth/VerificationEmail?Email=${email}&Code=${code}`, false)});

export const useForgetPassword = () =>
  useMutation({mutationFn:(request: ILoginRequest) => post(`api/Auth/ForeGetPassword?Email=${request.email}&Password=${request.password}`, false)});

export const useGenerateCode = () =>
  useMutation({mutationFn:({ email }: { email: string }) => post(`api/Auth/GenerateCode?Email=${email}`, false)});

export const useVerifyCode = () =>
  useMutation({mutationFn: ({ email, code }: { email: string, code: string }) => get(`api/Auth/GetUserByEmailAndCode?Email=${email}&Code=${code}`, false)});

// // Hook for fetching user profile
// export const useUserProfile = () =>
//   useQuery('userProfile', AuthenticationAPI.getUserProfile);

