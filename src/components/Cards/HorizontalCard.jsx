import { Button } from '@nextui-org/react'
import React, { useState } from 'react'
import { MainData } from '../../context/MainContext'

function HorizontalCard() {
  const {CurrentPage,CurrentUser}=MainData()
  
    return (
        <>
            <div className='HzCardMain'>
                <div className='hzCardDescri'>
                    <div className='HzCardItemInfo'>
                        <p  className='HzCardEngName'>EngineName </p>
                    </div>

                    <div className='HzCardDetails'>
                        {
                            CurrentUser=="Admin"?
                                <p>Renter: Jojo</p>
                            :
                                <></>
                        }
                        <p>Qantity: 4</p>
                        <p>Duration : 4 months</p>
                    </div>
                </div>
                
                {
                    (CurrentPage=="Cart"||CurrentPage=="Request")?
                        <p className='HzCardPrice'>1200050 Ar</p>
                    :
                        <p className='HzCardPrice'>Pending</p>
                }
                

                <div className='HzCardButtons'>
                    {
                        CurrentUser!=="Admin"?
                            <Button>
                                edit
                            </Button>
                        :
                            <></>
                    }
                    {
                        (CurrentUser=="Admin"&&CurrentPage=="Request")?
                            <div>
                                <Button>Accept </Button>
                                <Button>Deny </Button>
                            </div>
                        :(CurrentUser=="Admin"&&CurrentPage=="RentalsAdmin")?
                            <div>
                                <Button>Report</Button>
                                <Button>Done</Button>
                            </div>
                        :CurrentPage== "Cart" ?
                            <Button>
                                Delete
                            </Button>
                        :
                            <></>
                    }

                </div>
                
            </div>
        </>
    )
}

export default HorizontalCard