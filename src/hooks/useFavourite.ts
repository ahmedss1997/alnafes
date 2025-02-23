import { get, post } from '@/api/server';
import { iFavouriteFilterRequest } from '@/types/types';
import { useMutation } from '@tanstack/react-query';

export const useFavouriteFilter = () =>
  useMutation({mutationFn:(params: iFavouriteFilterRequest) => get(`api/ItemFavourite/Filter`, false, params)});

export const useToggleFavourite = () =>
  useMutation({mutationFn:(req: {UserId: number, ItemId: number}) => post(`api/ItemFavourite/Favourite?UserId=${req.UserId}&ItemId=${req.ItemId}`,{}, false)});