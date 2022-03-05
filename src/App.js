import AddDishForm from "./components/form/AddDishForm";
import { Container } from "@mui/material";
import FixedBottomNavigation from "./components/footer/FixedBottomNavigation";
import handleSubmit from "./functions/handleSubmit";
import { AlertSuccesSend } from "./components/form/AlertSuccesSend";

function App() {
  return (
    <div className="App">
      <Container maxWidth="sm" id="formContainer">
        <AddDishForm onSubmit={handleSubmit} />
        <AlertSuccesSend
          onClick={() => {
            window.location.reload();
          }}
        />
      </Container>
      <FixedBottomNavigation />
    </div>
  );
}

export default App;
