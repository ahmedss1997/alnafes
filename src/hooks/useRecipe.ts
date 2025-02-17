
import { get } from '@/api/server';
import { IRecipeFilterRequest } from '@/types/types';
import { useMutation } from '@tanstack/react-query';

export const useRecipeFilter = () =>
  useMutation({mutationFn:(params: IRecipeFilterRequest) => get(`api/Recipe/Filter`, false, params)});

export const useSingleRecipe = () =>
  useMutation({mutationFn:(params: IRecipeFilterRequest) => get(`api/Recipe/Get`, false, params)});
