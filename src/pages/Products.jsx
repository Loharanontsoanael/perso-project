import React, { useState } from 'react';
import Card from '../components/Cards/Card';
import Search from '../components/search/Search';
import { MainData } from '../context/MainContext';

function Products() {

  // const {tests} =MainData()

  const{CurrentPage , CurrentUser}=MainData()
  
  const [test, setTest] = useState([
    {
      Name:"Camion",
      Price:"1200",
      Stock:"4",
      Statut:"Avalaible"
    },
    {
      Name:"Grue",
      Price:"1500",
      Stock:"9",
      Statut:"Disabled"
    },
    {
      Name:"Elevator",
      Price:"1700",
      Stock:"6",
      Statut:"Disabled"
    },
    {
      Name:"Tracteur",
      Price:"1900",
      Stock:"12",
      Statut:"Avalaible"
    },    {
      Name:"Grue",
      Price:"1500",
      Stock:"9",
      Statut:"Avalaible"
    },
    {
      Name:"Elevator g500 adsd",
      Price:"1700",
      Stock:"6",
      Statut:"Disabled"
    },
    {
      Name:"Tracteur",
      Price:"1900",
      Stock:"12",
      Statut:"Disabled"
    },    {
      Name:"Grue",
      Price:"1500",
      Stock:"9",
      Statut:"Disabled"
    },
    {
      Name:"Elevator",
      Price:"1700",
      Stock:"6",
      Statut:"Avalaible"
    },
    {
      Name:"Tracteur",
      Price:"1900",
      Stock:"12",
      Statut:"Avalaible"
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
              (CurrentPage=="ProductsAdmin" || CurrentUser=='Admin')?
                <div className='card ml-20'>
                  <p className='Content' id='CardMainAdd'>
                    +
                  </p>
                </div>
              :
                <></>
            }
            {
              test.map((items , i)=>(
              <div className='Product' key={i}>
                <Card Name={items.Name} Price={items.Price} Stock={items.Stock} Statut={items.Statut} CurrentPage={CurrentPage} CurrentUser={CurrentUser} />
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