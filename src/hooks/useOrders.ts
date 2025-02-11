import { get } from '@/api/server';
import { iOrderFilterRequest } from '@/types/types';
import { useMutation } from '@tanstack/react-query';

export const useOrders = () =>
  useMutation({mutationFn:(params: iOrderFilterRequest) => get(`api/Order/Filter`, false, params)});