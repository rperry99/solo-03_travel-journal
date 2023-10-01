function Card(props) {
  return (
    <div className="card-and-divider">
      <div className="card">
        <div
          className="photo"
          style={{ backgroundImage: `url("./assets/${props.imageURL}")` }}
        ></div>
        <div className="card-content">
          <div className="map-section">
            <i className="fa-solid fa-location-dot"></i>
            <h2 className="location">{props.location}</h2>
            <a href={props.mapURL} target="_blank">
              View on Google Maps
            </a>
          </div>
          <h1 className="destination">{props.destination}</h1>
          <p className="dates">{props.travelDate}</p>
          <p className="description">{props.description}</p>
        </div>
      </div>
      <div className="divider"></div>
    </div>
  );
}

export default Card;
