import { Button } from '@nextui-org/react'
import React, { useState } from 'react'

function Card({Name , Price , Stock , CurrentUser ,CurrentPage}) {

  return (
    <>
        <div className='CardMain'>
            {/* <div className='CardPicContainer'>
                sary
            </div> */}

            <div className='CardName'>
                <p>
                    {Name} 
                </p>
            </div>

            <div className='CardDetailsContainer'>
                <div className='CardPrice'>
                    Price:
                    <div className='Price'>
                        <p>
                            {Price} AR/Day
                        </p>
                    </div>
                </div>

                <div className='CardStock'>
                    Quantity:
                    <div className='Stock'>
                        <p className='StockNumber'>
                            {Stock}
                        </p>
                    </div>
                </div>
            </div>

            {
                (CurrentPage=='ProductsAdmin' || CurrentUser=='Admin')?
                    <div className='CardButtons'>
                        <Button>Edit</Button>
                        <Button>Delete</Button>
                    </div>
                :
                    <></>
            }

        </div>
    </>
  )
}

export default Card