import logo from "./logo.svg";
import { createUseStyles, ThemeProvider, useTheme } from "react-jss";
import "./App.css";

import CardDetails from "./CardDetails";
import Battle from "./Battle"

const theme = {
  background: "#f7df1e",
  color: "#24292e",
  primary: "#583101",
  secondary: "#F28602"
};

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Battle />
      </ThemeProvider>
    </div>
  );
}

export default App;
