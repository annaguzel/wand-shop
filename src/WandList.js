import React from "react";
import WandCard from "./WandCard";
function WandList(props) {
  const wandList = props.wands.map(wand => (
    <WandCard key={wand.wood} wand={wand} />
  ));
  return (
    <div className="wands">
      <h2>Wands</h2>
      <div className="row">{wandList}</div>
    </div>
  );
}
export default WandList;