import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/Navigation.component";
import Header from "./routes/main-header/Main-header.component.jsx";
import Services from "./routes/services/Services.component";
import "./App.scss";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path="/" element={<Header />}>
          <Route path="/#services" element={<Services />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
