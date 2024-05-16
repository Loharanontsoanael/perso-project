import { Button } from '@nextui-org/react'
import React, { useState } from 'react'
import { MainData } from '../../context/MainContext'

function AddProducts() {

  const{
    PopUp,
    setIsPopUp,
    AddNewEngine
  } = MainData()

  const [EngineName , setEngineName]=useState('')
  const [EnginePrice , setEnginePrice]=useState(0)
  const [EngineQuantity,setEngineQantity]=useState(0)

  const handleSubmit = (e)=>{
    e.preventDefault()
    AddNewEngine(EngineName,EnginePrice,EngineQuantity)
    setIsPopUp(false)
  }

  return (
    <>
      <div className='PopUpContainer AddEngineWrapper'>

        <h1>
          {PopUp}
        </h1>

        <form onSubmit={handleSubmit} >

          <div>
            <label >Engine Name :</label>
            <input type="text" onChange={(e)=>{setEngineName(e.target.value)}} />
          </div>

          <div>
            <label >Price (/Day) :</label>
            <input type="text" onChange={(e)=>{setEnginePrice(e.target.value)}} />
          </div>

          <div>
            <label >Quantity :</label>
            <input type="text" onChange={(e)=>{setEngineQantity(e.target.value)}} />
          </div>

          <div>
            <Button type='Button' onClick={()=>{setIsPopUp(false)}} >Cancel</Button>
            <Button type='submit'>Validate</Button>
          </div>

          <div>
            haha test git
          </div>

        </form>

      </div>
    </>
  )
}

export default AddProducts