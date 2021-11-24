import "./App.css";
import Main from "./container/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="example">
      <Router>
        <Routes>
          <Route exact path="/" element={<Main />}></Route>
          <Route exact path="/FTL" element={<Main />}></Route>
          <Route exact path="/LCL" element={<Main />}></Route>
          <Route exact path="/Container" element={<Main />}></Route>
          <Route exact path="/Inbound" element={<Main />}></Route>
          <Route exact path="/Outbound" element={<Main />}></Route>
          <Route exact path="/Dashboard" element={<Main />}></Route>
          <Route exact path="/Trips" element={<Main />}></Route>
          <Route exact path="/Tracking" element={<Main />}></Route>
          <Route exact path="/Transporters" element={<Main />}></Route>
          <Route exact path="/Analytics" element={<Main />}></Route>
          <Route exact path="/Settings" element={<Main />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
