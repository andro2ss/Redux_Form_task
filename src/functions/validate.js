export const validate = (values) => {
  const errors = {};
  const requiredFields = ["name", "preparation_time", "type"];
  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = "Required " + field.replace(/_/g, " ");
    }
  });

  if (!!values["preparation_time"]) {
    if (values["preparation_time"].length < 8) {
      errors["preparation_time"] = "Required full time xx:xx:xx";
    }
  }

  if (values["type"] === "pizza") {
    if (!values["no_of_slices"]) {
      errors["no_of_slices"] = "Required number of slices";
    }
    if (!values["diameter"]) {
      errors["diameter"] = "Required diameter";
    }
  } else if (values["type"] === "soup") {
    if (!values["spiciness_scale"]) {
      errors["spiciness_scale"] = "Required Spiciness scale";
    }
  } else if (values["type"] === "sandwich") {
    if (!values["slices_of_bread"]) {
      errors["slices_of_bread"] = "Required slices of bread";
    }
  }

  return errors;
};
