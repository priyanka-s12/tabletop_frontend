import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    if (formData.email === 'admin@test.com') {
      navigate('/admin-dashboard');
    } else {
      navigate('/menu');
    }
  };
  return (
    <>
      <div className="container p-3 border mt-5" style={{ width: '50%' }}>
        <h2 className="text-center text-primary mb-3">TableTop</h2>
        <form onSubmit={handleSubmit}>
          <h3 className="mb-3">Login</h3>
          <div className="mb-3">
            <label className="form-label">Email: </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              className="form-control"
              required
              onChange={handleInput}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password: </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              className="form-control"
              placeholder="********"
              required
              onChange={handleInput}
            />
          </div>
          <div className="d-grid gap-2 mb-3">
            <button className="btn btn-primary" type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
