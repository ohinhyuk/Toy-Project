import Router from "./Components/Router";
import ThemeProvider from "./theme";
function App() {
  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  );
}

export default App;
