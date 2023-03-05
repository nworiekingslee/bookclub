// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Explore from "./Explore";
import MyShelf from "./my-shelf";
import { Routes, Route, Navigate } from "react-router-dom";
import { setupWorker } from "msw";

// if (process.env.NODE_ENV === "development") {
  const { handlers } = require("./common/mocks/handlers");
  const worker = setupWorker(...handlers);
  worker.start();
// }

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Explore />} />
        <Route path="/explore" element={<Navigate to="/" replace={true} />} />
        <Route path="/shelf" element={<MyShelf />} />
        <Route path="*" element={<div>Not found</div>} />
      </Routes>
    </div>
  );
}

export default App;
