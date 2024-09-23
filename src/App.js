import { ThemeProvider } from "@emotion/react";
import Home from "./Content/Home";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <Home />
    </div>
    </ThemeProvider>
  );
}

export default App;
