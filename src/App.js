import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/Navigation.component";
import Header from "./routes/header/header.component";
import Services from "./routes/services/services.component";
import "./App.scss";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path="/" element={<Header />} />
        <Route path="/#services" element={<Services />} />
      </Route>
    </Routes>
  );
}

export default App;
