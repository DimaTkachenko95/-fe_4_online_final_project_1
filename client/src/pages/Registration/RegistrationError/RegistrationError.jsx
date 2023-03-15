import React from 'react';

import './RegistrationError.scss';

const RegistrationError = () => {
  return (
    <section className="notification__wrapper">
      <p className="notification__description">You entered non-unique data; please try again. </p>
    </section>
  );
};

export default RegistrationError;
