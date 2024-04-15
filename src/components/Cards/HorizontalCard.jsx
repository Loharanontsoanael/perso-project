import { Button } from '@nextui-org/react'
import React, { useState } from 'react'

function HorizontalCard() {
  
  
    return (
        <>
            <div className='HzCardMain'>
                <div className='hzCardDescri'>
                    <div className='HzCardItemInfo'>
                        <p  className='HzCardEngName'>EngineName </p>
                    </div>

                    <div className='HzCardDetails'>
                        <p>Qantity: 4</p>
                        <p>Duration : 4 months</p>
                    </div>
                </div>

                <p className='HzCardPrice'>1200050 Ar</p>

                <div className='HzCardButtons'>
                    <Button>
                        edit
                    </Button>

                    <Button>
                        Delete
                    </Button>
                </div>
                
            </div>
        </>
    )
}

export default HorizontalCard