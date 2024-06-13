import React, { useState } from 'react';
import Card from '../components/Cards/Card';
import Search from '../components/search/Search';
import { MainData } from '../context/MainContext';

function Products() {

  // const {tests} =MainData()

  const{
    CurrentPage ,
    CurrentUser ,
    ShowAddProduct,
    engine
  }=MainData()
  

  return (
    <>
      <div className='MainProdContainer'>
        {/* <div className='SearchContainer dark'>
          <Search/>
          <p>
            {CurrentPage.UserName}
          </p>
        </div> */}
        <div className=' dark ProductsTitle'>
          Engines :
        </div>

        <div className='ProdContentContainer'>
          <div className='ProdContent'>
            {
              (CurrentPage=="ProductsAdmin" || CurrentUser.Type=='Admin')?
                <div className='Product' onClick={ShowAddProduct}>
                  <p className='card' id='CardMainAdd'>
                    +
                  </p>
                </div>
              :
                <></>
            }
            {
              engine.length >0 ?engine.map((items , i)=>(
              <div className='Product' key={i}>
                <Card
                  id={items.id}
                  Name={items.EngineName}
                  Price={items.Price}
                  Stock={items.Quantity}
                  Statut={items.Quantity<=0?'Unavailable':'Available'}
                  CurrentPage={CurrentPage}
                  CurrentUser={CurrentUser}
                />
              </div>
              ))
               
              : (
                <p>
                  Loading ...
                </p>
              )
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Products