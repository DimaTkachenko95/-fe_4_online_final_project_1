import { REGISTER_USER } from '../../endpoints/index';
import axios from 'axios';
import { NEW_CUSTOMER } from '../actions/registration.actions';

const createCustomerServer = (payload) => (dispatch) => {
  axios
    .post(REGISTER_USER, payload)
    .then((savedCustomer) => {
      // eslint-disable-next-line no-restricted-globals
      if (status === '200') {
        return savedCustomer;
      }
      dispatch({ type: NEW_CUSTOMER, payload: payload });
    })
    .catch((err) => {
      throw new Error('SERVER ERROR');
    });
};

export default createCustomerServer;
