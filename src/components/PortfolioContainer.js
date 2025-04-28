import React, { useState } from "react";
import Stock from "./Stock";

function PortfolioContainer() {
  const [portfolio, setPortfolio] = useState([]);

  function handleSellStock(stockToSell) {
    setPortfolio(portfolio.filter((stock) => stock.id !== stockToSell.id));
  }

  return (
    <div>
      <h2>My Portfolio</h2>
      {portfolio.map((stock) => (
        <Stock key={stock.id} stock={stock} onClick={() => handleSellStock(stock)} />
      ))}
    </div>
  );
}

export default PortfolioContainer;
