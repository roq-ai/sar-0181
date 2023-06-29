import axios from 'axios';
import queryString from 'query-string';
import { TourInterface, TourGetQueryInterface } from 'interfaces/tour';
import { GetQueryInterface } from '../../interfaces';

export const getTours = async (query?: TourGetQueryInterface) => {
  const response = await axios.get(`/api/tours${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createTour = async (tour: TourInterface) => {
  const response = await axios.post('/api/tours', tour);
  return response.data;
};

export const updateTourById = async (id: string, tour: TourInterface) => {
  const response = await axios.put(`/api/tours/${id}`, tour);
  return response.data;
};

export const getTourById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/tours/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteTourById = async (id: string) => {
  const response = await axios.delete(`/api/tours/${id}`);
  return response.data;
};
