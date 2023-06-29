import { UserInterface } from 'interfaces/user';
import { TourInterface } from 'interfaces/tour';
import { GetQueryInterface } from 'interfaces';

export interface BookingInterface {
  id?: string;
  user_id?: string;
  tour_id?: string;
  booking_date: any;
  status: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  tour?: TourInterface;
  _count?: {};
}

export interface BookingGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  tour_id?: string;
  status?: string;
}
