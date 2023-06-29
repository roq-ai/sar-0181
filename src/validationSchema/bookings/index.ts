import * as yup from 'yup';

export const bookingValidationSchema = yup.object().shape({
  booking_date: yup.date().required(),
  status: yup.string().required(),
  user_id: yup.string().nullable(),
  tour_id: yup.string().nullable(),
});
