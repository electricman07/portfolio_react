import { Routes, Route } from "react-router-dom";
import Navigation from "./components/navigation/Navigation.component";
import "./App.scss";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}></Route>
    </Routes>
  );
}

export default App;
