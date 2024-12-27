import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./pages/Home/Home";
import Layout from "./pages/_layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
