import React from "react";

function ServiceCard({ service }) {
  if (!service) return null;

  return (
    <div className="col-md-4 col-sm-6 mb-4">
      <div className="card h-100 shadow-sm">
        {service.image && <img src={service.image} className="card-img-top" alt={service.name} />}
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{service.name}</h5>
          <p className="card-text flex-grow-1">{service.description}</p>
          <span className="badge bg-secondary">{service.category}</span>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
