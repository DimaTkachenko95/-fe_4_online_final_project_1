import * as yup from "yup";

export const validationSchema = yup.object({
    email: yup
        .string("Enter your email or login")
        .required("E-mail/phone is required")
        .min(5, "Min 5 symbols"),

        password: yup
        .string("Enter your password")
        .required("Password is required")
        .min(3, "Min 3 symbols")
        .max(20, 'Max 20 symbols')
        .matches(/^[a-zA-Z0-9]+$/, 'Allowed characters for password is a-z, A-Z, 0-9'),
})
