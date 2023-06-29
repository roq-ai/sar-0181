import * as yup from 'yup';

export const tourValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string(),
  image: yup.string(),
  agency_id: yup.string().nullable(),
});
