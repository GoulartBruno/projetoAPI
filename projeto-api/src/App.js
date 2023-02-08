import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Router } from "./routes/Router";
import Homepage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <ChakraProvider resetCSS>
        <Router>
          <Homepage />
        </Router>
      </ChakraProvider>
    </div>
  );
}

export default App;
