import React from "react";
import Stock from "./Stock";

function PortfolioContainer({portStocks, handleRemoveStock}) {
  return (
    <div>
      <h2>My Portfolio</h2>
      {portStocks.map((stock) => <Stock key={stock.id} stock={stock} handler={handleRemoveStock}/>)}
    </div>
  );
}

export default PortfolioContainer;
