import React from 'react'
import HorizontalCard from '../components/Cards/HorizontalCard'
import { MainData } from '../context/MainContext'

function Rentals() {

  const {CurrentPage,CurrentUser , ShowLogin}=MainData()

  return (
    <>
      <div className='RentalsMainContainer'>
        <div className='RentalsContentContainer'>

          {CurrentUser.Type == 'Guest' ?
              <div>
                <h3>Log In</h3> to show your current rentals
              </div>
          :CurrentUser.Type == 'Client' ?
              <div>
                Rentals Client
              </div>
          :
            (
              CurrentPage=='Request'?
                <p>
                  RequestAdmin
                </p>
              :
                <p>
                  REntal Admin
                </p>
            )
          }
          <div className='CartItems'>
            <HorizontalCard CurrentPage={CurrentPage} CurrentUser={CurrentUser} />
          </div>
          
        </div>
      </div>
    </>
  )
}

export default Rentals