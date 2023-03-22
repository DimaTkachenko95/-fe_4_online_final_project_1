import axios from 'axios';
import { REGISTER_USER } from '../endpoints';

export const createCustomerServerApi = (value) => {
    return axios
        .post(REGISTER_USER, value)
        .then((savedCustomer) => {
            return savedCustomer;
        })
        .catch(() => false);
};