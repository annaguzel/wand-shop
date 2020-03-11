import React from "react";
function WandCard(props) {
  const wand = props.wand;
  return (
    <div className="col-lg-4 col-md-6 col-12 mb-4">
      <div className="card">
        <div className="image">
          <img
            className="card-img-top img-fluid"
            src={wand.imageUrl}
            alt={wand.wood}
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">Wood:{wand.wood}</h5>
          <h5 className="card-title">Core:{wand.core}</h5>

          <small className="card-text">Length:{wand.length} in</small>
        </div>
      </div>
    </div>
  );
}
export default WandCard;