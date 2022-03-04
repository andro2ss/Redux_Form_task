import AddDishForm from "./components/pages/AddDishForm";
import { Container } from "@mui/material";
import FixedBottomNavigation from "./components/footer/FixedBottomNavigation";

function App() {
  return (
    <div className="App">
      <Container maxWidth="sm">
        <AddDishForm />
      </Container>
      <FixedBottomNavigation />
    </div>
  );
}

export default App;
