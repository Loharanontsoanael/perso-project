import React from 'react'

function Card({Name , Price , Stock}) {
  return (
    <>
        <div className='CardMain'>
            <div className='CardPicContainer'>
                sary
            </div>

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

        </div>
    </>
  )
}

export default Card