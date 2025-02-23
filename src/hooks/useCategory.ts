
import { get } from '../api/server';
import { ICategoryFilterRequest, ISubCategoryFilterRequest } from '../types/types';
import { useMutation } from '@tanstack/react-query';

export const useCategoryFilter = () =>
  useMutation({mutationFn:(params: ICategoryFilterRequest) => get(`api/Category/Filter`, false, params)});

export const useSubCategoryFilter = () =>
  useMutation({mutationFn:(params: ISubCategoryFilterRequest) => get(`api/SubCategory/Filter`, false, params)});


