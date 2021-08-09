import * as yup from 'yup';

export const loginValidation = yup.object().shape({
  email: yup
    .string()
    .email("Please enter valid email")
    .required('Email Address is Required'),
  password: yup
    .string()
    .required('Password is required'),
});

