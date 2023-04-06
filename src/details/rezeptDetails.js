import details from "./detailsMockdata";
import "./details.css" 

export default function RezeptDetails() {
  return (
    <section
      id="rezeptSection"
      className="flex-grow-1 contentSection contentSectionRezept Aus"
    >
      <div className="container-fluid">
        <div className="row p-5">
          <div className="col">
            <h3 className="pb-3">{details[0].dish_name}</h3>
            <p>{details[0].description_short}</p>
            <p>{details[0].description_long}</p>
          </div>
          <div className="col d-flex justify-content-center">
          <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={`${process.env.PUBLIC_URL}/essen/vegan1.jpg`} className="carousselWidth" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={`${process.env.PUBLIC_URL}/essen/vegan2.jpg`} className="carousselWidth" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={`${process.env.PUBLIC_URL}/essen/vegan3.jpg`} className="carousselWidth"  alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
          </div>
        </div>
        <div className="row p-5">
          <div className="col">
            <h3>Zutatenliste für {details[0].numberOfPeople} Personen</h3>
            <table className="table table-striped">
              <tbody>
                {details[0].ingredients.map((ingredient) =>
                <tr scope="row">
                  <td>{(ingredient.quantity > 0)?ingredient.quantity: ""}</td>
                  <td>{ingredient.unit}</td>
                  <td>{ingredient.name}</td>
                </tr> )}
              </tbody>
            </table>
          </div>
          <div className="col">
            <h3>Zubereitung</h3>
            <table className="table">
              <tbody>
                {details[0].preparation_steps.map((step) => 
                <tr scope="row">
                  <th scope="col">{step.step}</th>
                  <td>{step.descr}</td>
                </tr> )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
