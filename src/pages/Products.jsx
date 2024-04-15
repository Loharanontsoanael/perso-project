import React, { useState } from 'react';
import Card from '../components/Cards/Card';
import Search from '../components/search/Search';

function Products() {
  
  const [test, setTest] = useState([
    {
      Name:"Camion",
      Price:"1200",
      Stock:"4"
    },
    {
      Name:"Grue",
      Price:"1500",
      Stock:"9"
    },
    {
      Name:"Elevator",
      Price:"1700",
      Stock:"6"
    },
    {
      Name:"Tracteur",
      Price:"1900",
      Stock:"12"
    },
  ]);

  return (
    <>
      <div className='MainProdContainer'>
        <div className='SearchContainer dark'>
          <Search/>
        </div>

        <div className='ProdContentContainer'>
          <div className='ProdContent'>
            {
              test.map((items , i)=>(
              <div className='Product' key={i}>
                <Card Name={items.Name} Price={items.Price} Stock={items.Stock} />
              </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Products