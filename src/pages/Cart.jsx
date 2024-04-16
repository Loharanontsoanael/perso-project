import React from 'react'
import HorizontalCard from '../components/Cards/HorizontalCard'
import { Button } from '@nextui-org/react'

function Cart() {
  return (
    <>
      <div className='MainCartContainer'>

        <div className='CartItemsContainer'>

          <div className='CartItemsTitle dark'>
            <p>Items </p>
          </div>

          <div className='CartItems'>
            <HorizontalCard />
          </div>
          <div className='CartItems'>
            <HorizontalCard />
          </div>
          <div className='CartItems'>
            <HorizontalCard />
          </div>
          <div className='CartItems'>
            <HorizontalCard />
          </div>
          <div className='CartItems'>
            <HorizontalCard />
          </div>
          <div className='CartItems'>
            <HorizontalCard />
          </div>
          <div className='CartItems'>
            <HorizontalCard />
          </div>
          <div className='CartItems'>
            <HorizontalCard />
          </div>
          <div className='CartItems'>
            <HorizontalCard />
          </div>
          <div className='CartItems'>
            <HorizontalCard />
          </div>


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
                  <p className='SummaryValue'> JOJO BIzzare</p>
                </div>

                <div className='flex-spcbtwn'>
                  <p>Items </p>
                  <p className='SummaryValue'>23</p>
                </div>

                <div className='flex-spcbtwn'>
                  <p>Total</p>
                  <p className='SummaryValue'>123 400 450 AR</p>
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