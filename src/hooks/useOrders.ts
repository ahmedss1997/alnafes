import { get, post } from '../api/server';
import { IAddOrderRequest, iOrderFilterRequest } from '../types/types';
import { useMutation } from '@tanstack/react-query';

export const useOrders = () =>
  useMutation({mutationFn:(params: iOrderFilterRequest) => get(`api/Order/Filter`, false, params)});

export const useAddOrder = () =>
  useMutation({
    mutationFn: (request: IAddOrderRequest) => post(`api/Order/Add`, request, false),
  });