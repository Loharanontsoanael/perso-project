import React from 'react'
import HorizontalCard from '../components/Cards/HorizontalCard'
import { MainData } from '../context/MainContext'

function Rentals() {

  const {CurrentPage,CurrentUser}=MainData()

  return (
    <>
      <div className='RentalsMainContainer'>
        <div className='RentalsContentContainer'>
          {/* <div className='RentalContent'>
          </div> */}
          <p>
            {CurrentUser}
          </p>
          <div className='CartItems'>
            <HorizontalCard CurrentPage={CurrentPage} CurrentUser={CurrentUser} />
          </div>
          <div className='CartItems'>
            <HorizontalCard CurrentPage={CurrentPage} CurrentUser={CurrentUser} />
          </div>
          <div className='CartItems'>
            <HorizontalCard CurrentPage={CurrentPage} CurrentUser={CurrentUser} />
          </div>
          <div className='CartItems'>
            <HorizontalCard CurrentPage={CurrentPage} CurrentUser={CurrentUser} />
          </div>
          <div className='CartItems'>
            <HorizontalCard CurrentPage={CurrentPage} CurrentUser={CurrentUser} />
          </div>
          <div className='CartItems'>
            <HorizontalCard CurrentPage={CurrentPage} CurrentUser={CurrentUser} />
          </div>
          <div className='CartItems'>
            <HorizontalCard CurrentPage={CurrentPage} CurrentUser={CurrentUser} />
          </div>
          <div className='CartItems'>
            <HorizontalCard CurrentPage={CurrentPage} CurrentUser={CurrentUser} />
          </div>
          
        </div>
      </div>
    </>
  )
}

export default Rentals