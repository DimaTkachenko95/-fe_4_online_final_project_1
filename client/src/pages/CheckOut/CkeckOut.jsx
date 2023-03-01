import './CheckOut.scss';
import {Box, Container, TextField, Button} from '@mui/material';
import {useFormik} from 'formik';
import BreadCrumbs from "../../components/BreadCrumbs";
import {useDispatch, useSelector} from "react-redux";
import {selectorBasketProduct} from "../../selectors";
import * as Yup from 'yup';
import {actionFetchCreateOrder} from "../../reducers/basket.reducer";

const CheckOut = () => {

    const productBasket = useSelector(selectorBasketProduct);
    const dispatch = useDispatch();

    const validationSchema = Yup.object({
        firstName: Yup.string().required('Please, enter your first name'),
        lastName: Yup.string().required('Please, enter your last name'),
        phone: Yup.string()
            .matches(/^\+?\d{10,12}$/, 'Please, enter correct phone number')
            .required('Please, enter correct phone number'),
        email: Yup.string()
            .email('Please, enter correct email')
            .required('Please, enter correct email'),
        country: Yup.string().required('Please, enter your country'),
        city: Yup.string().required('Please, enter your city'),
        address: Yup.string().required('Please, enter your address'),
        postalCode: Yup.string().required('Please, enter your postal code'),
        comments: Yup.string(),
    });

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            country: '',
            city: '',
            address: '',
            postalCode: '',
            comments: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            const products = productBasket.map(product => {
                return {
                    product,
                    _id: product.itemNo,
                    cartQuantity: product.cartQuantity,
                }
            });
            const newOrder = {
                products: products,
                deliveryAddress: {
                    country: values.country,
                    city: values.city,
                    address: values.address,
                    postal: values.postalCode,
                },
                email: values.email,
                mobile: values.phone,

                letterSubject: "Thank you for order! You are welcome!",
                letterHtml:
                    "<h1>Your order is placed. OrderNo is 0000001.</h1><p>{Other details about order in your HTML}</p>"
            }

            dispatch(actionFetchCreateOrder(newOrder));
        },
    });

    return (
        <>
            <Box className="checkout">
                <Container maxWidth="lg" className="checkout__container">
                    <BreadCrumbs linksArray={[{link: "/basket", text: "Cart"}]}/>
                    <h3 className="checkout__title">Checkout</h3>
                    <form onSubmit={formik.handleSubmit} className="checkout__form">

                        <TextField
                            className="checkout__input"
                            label="First Name"
                            id="firstName"
                            name="firstName"
                            type="text"
                            variant="outlined"
                            fullWidth
                            onChange={formik.handleChange}
                            value={formik.values.firstName}
                            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                            helperText={formik.touched.firstName && formik.errors.firstName}
                        />

                        <TextField
                            className="checkout__input"
                            label="Last Name"
                            id="lastName"
                            name="lastName"
                            type="text"
                            variant="outlined"
                            fullWidth
                            onChange={formik.handleChange}
                            value={formik.values.lastName}
                            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                            helperText={formik.touched.lastName && formik.errors.lastName}
                        />

                        <TextField
                            className="checkout__input"
                            label="Phone"
                            id="phone"
                            name="phone"
                            type="text"
                            variant="outlined"
                            fullWidth
                            onChange={formik.handleChange}
                            value={formik.values.phone}
                            error={formik.touched.phone && Boolean(formik.errors.phone)}
                            helperText={formik.touched.phone && formik.errors.phone}
                        />

                        <TextField
                            className="checkout__input"
                            label="Email"
                            id="email"
                            name="email"
                            type="email"
                            variant="outlined"
                            fullWidth
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                        />

                        <TextField
                            className="checkout__input"
                            label="Country"
                            id="country"
                            name="country"
                            type="text"
                            variant="outlined"
                            fullWidth
                            onChange={formik.handleChange}
                            value={formik.values.country}
                            error={formik.touched.country && Boolean(formik.errors.country)}
                            helperText={formik.touched.country && formik.errors.country}
                        />

                        <TextField
                            className="checkout__input"
                            label="City"
                            id="city"
                            name="city"
                            type="text"
                            variant="outlined"
                            fullWidth
                            onChange={formik.handleChange}
                            value={formik.values.city}
                            error={formik.touched.city && Boolean(formik.errors.city)}
                            helperText={formik.touched.city && formik.errors.city}
                        />

                        <TextField
                            className="checkout__input"
                            label="Address"
                            id="address"
                            name="address"
                            type="text"
                            variant="outlined"
                            fullWidth
                            onChange={formik.handleChange}
                            value={formik.values.address}
                            error={formik.touched.address && Boolean(formik.errors.address)}
                            helperText={formik.touched.address && formik.errors.address}
                        />


                        <TextField
                            className="checkout__input"
                            label="Postal code"
                            id="postalCode"
                            name="postalCode"
                            type="text"
                            variant="outlined"
                            fullWidth
                            onChange={formik.handleChange}
                            value={formik.values.postalCode}
                            error={formik.touched.postalCode && Boolean(formik.errors.postalCode)}
                            helperText={formik.touched.postalCode && formik.errors.postalCode}
                        />


                        <Button type="submit" variant="contained" color="primary" className="checkout__submit-btn">
                            Create order
                        </Button>
                    </form>
                </Container>
            </Box>

        </>
    )
};

export default CheckOut;
