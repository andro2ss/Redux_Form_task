import { TextField } from "@mui/material";
import "./TextField.scss";

export const renderTextField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => {
  let tempLabel = null;
  if (!(touched && error)) {
    tempLabel = label;
  } else {
    tempLabel = error;
  }
  return (
    <TextField
      className="input__textField"
      label={tempLabel}
      error={!!(touched && error)}
      {...input}
      {...custom}
    />
  );
};
