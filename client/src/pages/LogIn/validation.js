import * as yup from "yup";

export const validationSchema = yup.object({
    email: yup
        .string("Enter your email or phone number")
        .required("Please fill this field")
        .min(5, "Too short"),

        password: yup
        .string("Enter your password")
        .required("Please fill this field")
        .min(3, "Too short")
        .max(15, 'Too long'),
})
