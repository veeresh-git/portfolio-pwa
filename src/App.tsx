import { ThemeProvider } from "@emotion/react";
import "./index.scss";
import theme from "./theme";
import NavBar from "./Navbar";
import AppRoutes from "./AppRoutes"
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <AppRoutes />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
