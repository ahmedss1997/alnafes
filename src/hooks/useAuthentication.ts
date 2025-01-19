

import { useMutation } from 'react-query';
import { post, get } from '@/api/server';

// Hook for login uselogin(aa)
export const useLogin = () =>
  useMutation((request:any) => post(`api/Auth/Login`, request, false));

// Hook for registration
export const useRegister = () =>
  useMutation((request:any) => post(`api/Auth/SignUp`, request, false));

// Hook for resetting password
// export const useResetPassword = () =>
//   useMutation((email) => AuthenticationAPI.resetPassword(email));

// // Hook for fetching user profile
// export const useUserProfile = () =>
//   useQuery('userProfile', AuthenticationAPI.getUserProfile);

