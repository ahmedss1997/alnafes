
import { get } from '@/api/server';
import { iProductFilterRequest } from '@/types/types';
import { useMutation } from '@tanstack/react-query';

export const useProducts = () =>
  useMutation({mutationFn:() => get(`api/ItemOrder/GetAll`, false)});

export const useProductsFilter = () =>
  useMutation({mutationFn:(params: iProductFilterRequest) => get(`api/ItemOrder/Filter`, false, params)});

export const useSingleProduct = () =>
  useMutation({mutationFn:(params: iProductFilterRequest) => get(`api/ItemOrder/Filter`, false, params)});
