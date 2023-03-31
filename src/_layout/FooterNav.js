import Emotion from "./images/emotion.png"; 

export default function FooterNav() {
	return (
		<>
      <nav className="navbar navbar-expand-lg position-relative">
        <img src={Emotion} className="emotion" />
        <div className="container-fluid pe-5">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown2" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown2">
            <ul className="navbar-nav ms-auto me-5">
              <li className="nav-item ms-3 ms-3">
                <a className="nav-link" href="/">Kontakt/Impressum</a>
              </li>
              <li className="nav-item ms-3 ms-3">
                <a className="nav-link" href="/">Cookies</a>
              </li>
              <li className="nav-item ms-3 ms-3">
                <a className="nav-link" href="/">Datenschutz</a>
              </li>
              <li className="nav-item ms-3 ms-3">
                <a className="nav-link" href="/">Neues Rezept eintragen</a>
              </li>
            </ul>
          </div>
          <span className="fw-lighter">&copy; 2023 Known Vegan GmbH</span>
        </div>
      </nav>			
		</>); 
}