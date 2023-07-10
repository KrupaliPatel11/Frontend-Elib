
import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Signup from './components/Signup'
import AdminLogin from './components/AdminLogin';
import UserDashboard from './components/UserDashboard';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/admin/login" element={<AdminLogin />}></Route>
          <Route path="/user/dashboard" element={<UserDashboard />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
