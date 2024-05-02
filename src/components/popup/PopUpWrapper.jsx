import React from 'react'
import Login from './Login'
// import Register from './Register'
import AddProducts from './AddProducts'
import EditProducts from './EditProducts'
import EditChart from './EditChart'
import EditRentals from './EditRentals'
import { MainData } from '../../context/MainContext'
import AddToChart from './AddToChart'

function PopUpWrapper({refPopUp}) {
  const {
    PopUp,
  }=MainData()
  return (
    <>
        <div className="PopUpWrapper" ref={refPopUp}>
          {
            (PopUp=="Login"||PopUp=="Register") && <Login /> ||
            // PopUp=="Register" && <Register />
            PopUp=="AddToChart" && <AddToChart/> ||
            PopUp=="AddProducts" && <AddProducts /> ||
            PopUp=="EditProducts" && <EditProducts /> ||
            PopUp=="EditChart" && <EditChart /> ||
            PopUp=="EditRentals" && <EditRentals />
          }
        </div>
    </>
  )
}

export default PopUpWrapper