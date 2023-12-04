import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "./App.css";
import Main from "./components/main";
import { Routes, Route } from "react-router-dom"
import ExportComponent from "./components/export-component";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Main />
      <Routes>
        <Route path="/export" element={ExportComponent} />
      </Routes>
    </DndProvider>
  );
}

export default App;
