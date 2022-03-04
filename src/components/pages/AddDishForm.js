import React from "react";
import { Field, formValueSelector, reduxForm } from "redux-form";
import { validate } from "../../functions/validate";
import durationFormatNormalize from "../../functions/durationFormatNormalize";
import { renderTextField } from "../common/Form/textField/renderTextField";
import renderRadioButtonsGroup from "../common/Form/radioButtonsGroup/renderRadioButtonsGroup";
import { connect } from "react-redux";
import renderSliderValues from "../common/Form/slider/renderSliderValues";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

let AddDishForm = (props) => {
  const { handleSubmit, pristine, reset, submitting, dishType } = props;

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

      {dishType === "pizza" ? (
        <>
          <Field
            name="no_of_slices"
            type="number"
            component={renderTextField}
            label="Number of slices"
          />
          <Field
            name="diameter"
            type="number"
            component={renderTextField}
            label="Diameter"
          />
        </>
      ) : (
        ""
      )}
      {dishType === "soup" ? (
        <Field
          name="spiciness_scale"
          component={renderSliderValues}
          label={"Spiciness scale"}
        />
      ) : (
        ""
      )}
      {dishType === "sandwich" ? (
        <Field
          name="slices_of_bread"
          type="number"
          component={renderTextField}
          label="Number of slices of bread"
        />
      ) : (
        ""
      )}
      <div className="form__buttons">
        <Button
          type="submit"
          variant="contained"
          disabled={submitting}
          className="form__button"
        >
          Add <SendIcon className="form__item" />
        </Button>
        <Button
          type="button"
          variant="outlined"
          disabled={pristine || submitting}
          onClick={reset}
          className="form__button"
        >
          Reset <DeleteOutlineIcon className="form__item" />
        </Button>
      </div>
    </form>
  );
};

const selector = formValueSelector("addDishForm");
AddDishForm = connect((state) => {
  const dishType = selector(state, "type");
  return {
    dishType,
  };
})(AddDishForm);

export default reduxForm({
  form: "addDishForm",
  validate,
})(AddDishForm);
