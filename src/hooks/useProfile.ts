
import { post } from '@/api/server';
import { IUserUpdateRequest } from '@/types/types';
import { useMutation } from '@tanstack/react-query';

export const useUserUpdate = () =>
  useMutation({
    mutationFn: (request: IUserUpdateRequest) => post(`api/User/Update`, request, false),
  });