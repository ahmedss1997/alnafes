
import { get } from '@/api/server';
import { iProductFilterRequest } from '@/types/types';
import { useMutation } from '@tanstack/react-query';

export const useProducts = () =>
  useMutation({mutationFn:() => get(`api/Item/GetAll`, false)});

export const useProductsFilter = () =>
  useMutation({mutationFn:(params: iProductFilterRequest) => get(`api/Item/Filter`, false, params)});

export const useSingleProduct = () =>
  useMutation({mutationFn:(params: iProductFilterRequest) => get(`api/Item/Filter`, false, params)});
