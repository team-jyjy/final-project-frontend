import { Route, Routes } from "react-router-dom";
import Login from './pages/Login';
import Home from './pages/Home'
import Profile from './pages/Profile'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/login" element = {<Login />} />
      <Route path="/profiles/:username" element={<Profile />}/>
    </Routes>
  );
};

export default App;