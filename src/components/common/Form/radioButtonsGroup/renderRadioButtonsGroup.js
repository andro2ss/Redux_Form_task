import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import "./RadioButtonsGroup.scss";

export default function renderRadioButtonsGroup({ input, types, ...rest }) {
  return (
    <FormControl className="radio__container">
      <FormLabel>{rest.label}</FormLabel>
      <RadioGroup
        {...input}
        {...rest}
        aria-labelledby="radio-buttons-group-label"
      >
        <div className="radio__box">
          {types.map((type) => {
            return (
              <FormControlLabel
                className="box__item"
                key={type}
                value={type}
                control={<Radio />}
                label={type.toUpperCase()}
              />
            );
          })}
        </div>
      </RadioGroup>
    </FormControl>
  );
}
