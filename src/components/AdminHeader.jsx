import { Link } from 'react-router-dom';

function AdminHeader() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        {' '}
        <div className="container">
          <Link className="navbar-brand fw-semibold text-primary" to="/">
            TableTop
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default AdminHeader;
