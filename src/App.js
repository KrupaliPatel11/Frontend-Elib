
import '../src/';
import Login from './components/Login';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Signup from './components/Signup'
import AdminLogin from './components/AdminLogin';
import UserDashboard from './components/UserDashboard';
import AdminDashboard from './components/AdminDashboard';
import Home from './components/Home';
import PrivateRoutes from './components/ProtectedRoutes';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />

          <Route element={<PrivateRoutes />}>
            <Route path="/user/dashboard" element={<UserDashboard />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
          </Route>

          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/admin/login" element={<AdminLogin />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
