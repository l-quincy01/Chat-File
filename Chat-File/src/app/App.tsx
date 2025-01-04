import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./pages/Home/Home";
import Layout from "./pages/_layout";
import ChatPage from "./pages/Chat/ChatPage";
import SummaryPage from "./pages/Summary/SummaryPage";
import MindmapPage from "./pages/Mindmap/MindmapPage";
import SummaryView from "./pages/Summary/SummaryView";
import MindmapView from "./pages/Mindmap/MindmapView";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/summary" element={<SummaryPage />} />
          <Route path="/mind-map" element={<MindmapPage />} />
          <Route path="/summary/:id" element={<SummaryView />} />
          <Route path="/mindmap/:id" element={<MindmapView />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
