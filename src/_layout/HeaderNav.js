import { Link } from '../../node_modules/react-router-dom/dist/index';
import { ReactComponent as Logo } from './images/logo.svg';

export default function HeaderNav() {
	return (
		<>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <Logo className="d-inline-block align-text-top" alt="Grekreuzte Messer und Gabel als Logo" />
          </Link>
          <Link to="/" className="navbar-brand KVSlogan"><h1>Known Vegan</h1></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto me-5">
              <li className="nav-item ms-3 ms-3">
                <Link to="/filter" className="nav-link">Was darf es sein?</Link>
              </li>
            </ul>
          </div>

        </div>
      </nav>			
		</>
  );
}