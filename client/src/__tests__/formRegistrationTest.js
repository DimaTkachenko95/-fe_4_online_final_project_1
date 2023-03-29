// // describe('Should check test for eslint', () => {
// //   test('sss', () => {
// //     expect(123).toBe(123);
// //   });
// // });
//
// import React from 'react';
// import { mount, shallow } from 'enzyme';
// import { Formik } from 'formik';
// import FormRegistration from './../components/FormRegistration';
// import * as yup from 'yup';
//
//
// describe('FormRegistration', () => {
//   const initialValues = {
//     firstName: '',
//     lastName: '',
//     login: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     telephone: '',
//     city: '',
//     country: '',
//   };
//   const onSubmit = jest.fn();
//   const validationSchema = null;
//
//   it('should render the component without errors', () => {
//     const wrapper = mount(
//         <FormRegistration
//             onSubmit={onSubmit}
//             initialValues={initialValues}
//             validationSchema={validationSchema}
//             btnEdit
//             inputsEditName={['firstName']}
//             withPassword
//         />
//     );
//     expect(wrapper.exists()).toBeTruthy();
//   });
//
//   it('should submit the form when the submit button is clicked', () => {
//     const wrapper = mount (
//         <FormRegistration
//             onSubmit={onSubmit}
//             initialValues={initialValues}
//             validationSchema={validationSchema}
//             btnEdit
//             inputsEditName={['firstName']}
//             withPassword
//         />
//     );
//     wrapper.find(Formik).simulate('submit');
//     expect(onSubmit).toHaveBeenCalled();
//   });
//
//   it('should not allow the form to be submitted when there are validation errors', () => {
//     const validationSchema = {
//       firstName: yup.string().required('Required'),
//       lastName: yup.string().required('Required'),
//       login: yup.string().required('Required'),
//       email: yup.string().email('Invalid email').required('Required'),
//       password: yup.string().required('Required'),
//       confirmPassword: yup.string().oneOf([yup.ref('password')], 'Passwords do not match').required('Required'),
//       telephone: yup.string().required('Required'),
//       city: yup.string().required('Required'),
//       country: yup.string().required('Required'),
//     };
//     const wrapper = mount (
//         <FormRegistration
//             onSubmit={onSubmit}
//             initialValues={initialValues}
//             validationSchema={validationSchema}
//             btnEdit
//             inputsEditName={['firstName']}
//             withPassword
//         />
//     );
//     wrapper.find(Formik).simulate('submit');
//     expect(onSubmit).not.toHaveBeenCalled();
//   });
// });