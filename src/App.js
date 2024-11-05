import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';
import Home from './HomePage/home';
import LoginUser from './Login/user';
function App() {
  return (
    <div>
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login/user" element={<LoginUser />} />
        {/* <Route path="/" element={<BlurredBackdrop />} /> */}
      </Routes>
    </Router>
    </div>
  );
}

export default App;
