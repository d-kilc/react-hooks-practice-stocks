import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [allStocks, setAllStocks] = useState([]) 
  const [stocks, setStocks] = useState([]) 
  const [portStocks, setPortStocks] = useState([])
  const [sort, setSort] = useState('alpha')
  const [filter, setFilter] = useState('')

  const API = 'http://localhost:3001/stocks'



  useEffect(() => {
    fetch(API)
    .then(res => res.json())
    .then(data => {
      //used for filtering against--we will NOT modify this
      setAllStocks(data)
      if (sort === 'alpha') {
        setStocks( data.sort((a, b) => {
          return a.name > b.name ? 1 : -1
        }) )
      } else {
        setStocks( data.sort((a, b) => {
          return a.price > b.price ? 1 : -1
        }) )
      }
    })
  }, [sort])

  useEffect(() => {
    //update the visible stocks to the filtered list of allStocks
    setStocks( allStocks.filter((stock) => stock.type === filter) )
  }, [filter])

  function handleAddStock(stock) {
    setPortStocks([...portStocks, stock])
  }

  function handleRemoveStock(stock) {
    const portStocksCopy = [...portStocks]
    const startIndex = portStocksCopy.findIndex((portStock) => {
      return portStock.id === stock.id
    })
    portStocksCopy.splice( startIndex, 1 )
    setPortStocks(portStocksCopy)
  }

  function handleSort(sortType) {
    console.log(`changed sort to ${sortType}`)
    setSort( sortType )
  }

  function handleFilter(filterType) {
    console.log(`changed filter to ${filterType}`)
    setFilter( filterType )
  }

  return (
    <div>
      <SearchBar selectedSort={sort} handleSort={handleSort} handleFilter={handleFilter}/>
      <div className="row" >
        <div className="col-8">
          <StockContainer stocks={stocks}
            handleAddStock={handleAddStock}
          />
        </div>
        <div className="col-4">
          <PortfolioContainer portStocks={portStocks}
            handleRemoveStock={handleRemoveStock}
          />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
