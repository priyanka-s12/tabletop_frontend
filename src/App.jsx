import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './pages/Login';
import Menu from './pages/Menu';
import { MenuProvider } from './context/MenuContext';
import OrderPage from './pages/OrderPage';
import AdminDashbard from './pages/AdminDashbard';

function App() {
  return (
    <>
      <MenuProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/menu" element={<Menu />}></Route>
            <Route path="/order" element={<OrderPage />}></Route>
            <Route path="/admin-dashboard" element={<AdminDashbard />}></Route>
          </Routes>
        </Router>
      </MenuProvider>
    </>
  );
}

export default App;
