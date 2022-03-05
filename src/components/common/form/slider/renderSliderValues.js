import "./SliderValues.scss";
import { Slider } from "@mui/material";

export default function renderSliderValues({ input, label, ...rest }) {
  const marks = [
    {
      value: 1,
      label: "1",
    },
    {
      value: 2,
      label: "2",
    },
    {
      value: 3,
      label: "3",
    },
    {
      value: 4,
      label: "4",
    },
    {
      value: 5,
      label: "5",
    },
    {
      value: 6,
      label: "6",
    },
    {
      value: 7,
      label: "7",
    },
    {
      value: 8,
      label: "8",
    },
    {
      value: 9,
      label: "9",
    },
    {
      value: 10,
      label: "10",
    },
  ];

  function valuetext(value) {
    return `${value}`;
  }
  return (
    <div className="slider__container">
      <label>{label}:</label>
      <Slider
        className="slider__item"
        aria-label={label}
        getAriaValueText={valuetext}
        step={1}
        marks={marks}
        min={1}
        max={10}
        {...input}
      />
    </div>
  );
}
