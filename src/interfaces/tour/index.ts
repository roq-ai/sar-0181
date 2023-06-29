import { BookingInterface } from 'interfaces/booking';
import { AgencyInterface } from 'interfaces/agency';
import { GetQueryInterface } from 'interfaces';

export interface TourInterface {
  id?: string;
  name: string;
  description?: string;
  image?: string;
  agency_id?: string;
  created_at?: any;
  updated_at?: any;
  booking?: BookingInterface[];
  agency?: AgencyInterface;
  _count?: {
    booking?: number;
  };
}

export interface TourGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  image?: string;
  agency_id?: string;
}
