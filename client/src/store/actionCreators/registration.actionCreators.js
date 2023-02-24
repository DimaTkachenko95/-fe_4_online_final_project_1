import { REGISTER_USER } from '../../endpoints/index';
import axios from 'axios';

const createCustomerServer = (payload) =>
  axios
    .post(REGISTER_USER, payload)
    .then((savedCustomer) => {
      // eslint-disable-next-line no-restricted-globals
      if (status === '200') {
        return savedCustomer;
      }
    })
    .catch((err) => {
      throw new Error('SERVER ERROR');
    });

export default createCustomerServer;
