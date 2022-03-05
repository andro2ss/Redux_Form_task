import { Alert, AlertTitle, Button } from "@mui/material";

export function AlertSuccesSend(props) {
  return (
    <Alert severity="success" className="alert">
      <AlertTitle>Dish Added</AlertTitle>
      <Button variant="outlined" color="success" onClick={props.onClick}>
        Add new dish
      </Button>
    </Alert>
  );
}
