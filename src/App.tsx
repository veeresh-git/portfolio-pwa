import { ThemeProvider } from "@emotion/react";
import "./index.scss";
import theme from "./theme";
import NavBar from "./Navbar";
import AppRoutes from "./AppRoutes";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const client = new QueryClient();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={client}>
        <BrowserRouter>
          <div className="App">
            <NavBar />
            <AppRoutes />
          </div>
        </BrowserRouter>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
