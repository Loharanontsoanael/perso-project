import React from 'react'
import HorizontalCard from '../components/Cards/HorizontalCard'

function Rentals() {
  return (
    <>
      <div className='RentalsMainContainer'>
        <div className='RentalsContentContainer'>
          {/* <div className='RentalContent'>

          </div> */}
          <div className='CartItems'>
            <HorizontalCard/>
          </div>
          <div className='CartItems'>
            <HorizontalCard/>
          </div>
          <div className='CartItems'>
            <HorizontalCard/>
          </div>
          <div className='CartItems'>
            <HorizontalCard/>
          </div>
          <div className='CartItems'>
            <HorizontalCard/>
          </div>
          <div className='CartItems'>
            <HorizontalCard/>
          </div>
          <div className='CartItems'>
            <HorizontalCard/>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default Rentals