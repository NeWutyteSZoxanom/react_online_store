import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/Navbar";
import Container from "@material-ui/core/Container";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Container fixed>
        <AppRouter />
      </Container>
    </BrowserRouter>
  );
}

export default App;
