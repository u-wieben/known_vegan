import Card from './Card';
import bild from './images/buch.png';
import './rezept.css';

export default function ListSection() {
    return (
      <section id="listSection" className="flex-grow-1 contentSection contentSectionListe Aus">
        <div className="container-fluid">
          <div className="row">
            <div className="col-3 d-flex justify-content-center align-items-center flex-column ohneBlocker">
              <div className="fixieren">
                <h5 className="text-center">Jetzt im Shop</h5>
                <img src={bild} alt="buch" className="buch" />
              </div>
            </div>
            <div className="col-9">
              <div className="row pt-5">
                <div className="col d-flex flex-wrap justify-content-around align-items-start gap-5">
                  <Card />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }