import { Field, ErrorMessage } from "formik";
import cx from "classnames";
import PropTypes from "prop-types";

import "./LogIn.scss";

const InputForm = ({
  className,
  label,
  type,
  inputName,
  placeholder,
  error,
  ...restProps
}) => {
  return (
    <>
      <label
        className={cx("form-item", className, { "has-validation": error })}
      >
        <p className="form-label">{label}</p>
        <Field
          type={type}
          className="input"
          name={inputName}
          placeholder={placeholder}
          {...restProps}
        />
        <ErrorMessage
          className="error-messege"
          name={inputName}
          component={"p"}
        />
      </label>
    </>
  );
};

InputForm.defautProps = {
  type: "text",
};
InputForm.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  inputName: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
  error: PropTypes.object,
};

export default InputForm;
