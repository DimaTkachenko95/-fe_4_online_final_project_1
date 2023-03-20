import * as yup from 'yup';

const validationSchemaForOrder = yup.object().shape({
  firstName: yup
    .string()
    .min(3, 'Min 3 symbols')
    .max(20, 'Max 20 symbols')
 /*    .required('First name field is requierd') */
    .matches(/[a-zA-z\s]/g, 'Should contain only characters and space'),
  lastName: yup
    .string()
    .min(2, 'Min 2 symbols')
    .max(20, 'Max 20 symbols')
   /*  .required('Last name field is requierd') */
    .matches(/[a-zA-z\s]/g, 'Should contain only characters and space'),

  email: yup
  .string()
  .email('Not valid email')
  .required('Email field is requierd'),

  
  telephone: yup
    .number()
    .typeError("That doesn't look like a phone number")
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point")
    .min(13, 'Telephone is too short - should be 13 chars minimum')
    .required('A phone number is required'),
    
    country: yup
    .string()
    .min(3, 'Min 3 symbols')
    .max(20, 'Max 20 symbols'),
   
    city: yup
    .string()
    .min(3, 'Min 3 symbols')
    .max(20, 'Max 20 symbols')
    .required('A city is required'),

    address: yup
    .string()
    .min(3, 'Min 3 symbols')
    .max(20, 'Max 20 symbols')
    .required('A address is required'),

    postalCode: yup
    .number()
    .min(2, 'Min 2 symbols')
    .max(20, 'Max 20 symbols')

})


export default  validationSchemaForOrder;