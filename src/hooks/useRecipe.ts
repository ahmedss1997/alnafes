
import { get } from '@/api/server';
import { IRecipe, IRecipeFilterRequest } from '@/types/types';
import { useQuery } from 'react-query';

export const useRecipeFilter = (params: IRecipeFilterRequest) => {
  return useQuery("recipesFilter", async () => {
    const response = await get(`api/Recipe/Filter`, false, params);
    return response.result as IRecipe[];
  });
};


