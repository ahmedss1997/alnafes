
import { get } from '@/api/server';
import { IRecipe, IRecipeFilterRequest } from '@/types/types';
import { useQuery } from '@tanstack/react-query';

export const useRecipeFilter = (params: IRecipeFilterRequest) => {
  return useQuery<IRecipe[], Error>({
    queryKey: ['recipesFilter', params], // Include params in the query key
    queryFn: async () => {
      const response = await get(`api/Recipe/Filter`, false, params);
      return response.result as IRecipe[];
    },
    // Optional: Add additional options like staleTime, retry, etc.
    staleTime: 1000 * 60 * 5, // Cache data for 5 minutes
  });
};


