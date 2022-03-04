import React from "react";
import { Field, reduxForm } from "redux-form";
import { validate } from "../../functions/validate";
import durationFormatNormalize from "../../functions/durationFormatNormalize";
import { renderTextField } from "../common/Form/TextField/renderTextField";
import renderRadioButtonsGroup from "../common/Form/radioButtonsGroup/renderRadioButtonsGroup";

const AddDishForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props;

  return (
    <form onSubmit={handleSubmit} className="form__container">
      <h2>Add a dish</h2>
      <Field name="name" type="text" component={renderTextField} label="Name" />
      <Field
        name="preparation_time"
        type="text"
        component={renderTextField}
        label="Preparation time"
        normalize={durationFormatNormalize}
      />
      <Field
        name="type"
        component={renderRadioButtonsGroup}
        label="Dish type"
        types={["pizza", "soup", "sandwich"]}
      />

      <div>
        <button type="submit" disabled={submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "addDishForm",
  validate,
})(AddDishForm);
