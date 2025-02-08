
import { get, post } from '@/api/server';
import { iReviewFilterRequest, IReviewRequest } from '@/types/types';
import { useMutation } from '@tanstack/react-query';


export const useReviewsFilter = () =>
  useMutation({mutationFn:(params: iReviewFilterRequest) => get(`api/Rate/Filter`, false, params)});

export const useAddReview = () =>
  useMutation({
    mutationFn: (request: IReviewRequest) => post(`api/Rate/Add`, request, false),
  });