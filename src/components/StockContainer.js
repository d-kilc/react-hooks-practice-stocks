import React from "react";
import Stock from "./Stock";

function StockContainer({stocks, handleAddStock}) {
  return (
    <div>
      <h2>Stocks</h2>
      {stocks.map(stock => <Stock key={stock.id} stock={stock} handler={handleAddStock}/>)}
    </div>
  );
}

export default StockContainer;
