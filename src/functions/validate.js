export const validate = (values) => {
  const errors = {};
  const requiredFields = ["name", "preparation_time", "type"];
  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = "Required";
    }
  });

  return errors;
};
