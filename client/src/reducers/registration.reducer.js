import initialValues from '../components/Form/FormComponent';
import { NEW_CUSTOMER } from '../store/actions/registration.actions';

const registrationReducer = (state = initialValues, action) => {
  switch (action.type) {
    case NEW_CUSTOMER:
      return {
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        login: action.payload.login,
        email: action.payload.email,
        password: action.payload.password,
        telephone: action.payload.telephone,
        gender: action.payload.gender,
        avatarUrl: action.payload.avatarUrl,
      };
    default: {
      return state;
    }
  }
};

export default registrationReducer;
