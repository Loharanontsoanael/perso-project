import React, { useEffect, useState } from 'react'
import HorizontalCard from '../components/Cards/HorizontalCard'
import { Button } from '@nextui-org/react'
import { MainData } from '../context/MainContext'

function Cart() {

  const{CurrentPage ,CurrentUser , cartItems  }=MainData()

  const [renter , setRenter] = useState(CurrentUser.UserName==""? null : CurrentUser.UserName)
  const totalItems = cartItems.reduce((total,item)=>total+ parseInt(item.quantity , 10) , 0)
  const totalPrice = cartItems.reduce((total,item)=>total+parseInt(item.price) , 0)


  return (
    <>
      <div className='MainCartContainer'>

        <div className='CartItemsContainer'>

          { cartItems.length > 0 ?
                cartItems.map((item , i)=>(
                  <div className='CartItems' key={i}>
                    <HorizontalCard CurrentPage={CurrentPage} CurrentUser={CurrentUser} item={item} />
                  </div>
                ))
              :
                <p>
                  No item Yet
                </p>
          }

        </div>



        <div className='CartSummaryContainer' >

          <div className="SummaryContent">

            <div className='CartItemsTitle'>
              <p>
                Summary
              </p>
            </div>

            <div className='SummaryCorpse'>
              <div className="SummaryInfo">

                <div className='flex-spcbtwn'>
                  <p>Renter </p>
                  <p className='SummaryValue'> 
                    {
                      renter? 
                       renter
                      :
                       "----"
                    }
                  </p>
                </div>

                <div className='flex-spcbtwn'>
                  <p>Items </p>
                  <p className='SummaryValue'>{totalItems}</p>
                </div>

                <div className='flex-spcbtwn'>
                  <p>Total</p>
                  <p className='SummaryValue'>{totalPrice} AR</p>
                </div>

              </div>

              <div className="SummaryButtons">
              <Button className='SummaryValidate primary '>
                Purchase
              </Button>
              </div>
            </div>

          </div>
          
        </div>

      </div>
    </>
  )
}

export default Cart