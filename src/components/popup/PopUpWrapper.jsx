import React from 'react'
import Login from './Login'
import Register from './Register'
import AddProducts from './AddProducts'
import EditProducts from './EditProducts'
import EditChart from './EditChart'
import EditRentals from './EditRentals'

function PopUpWrapper() {
  return (
    <>
        <div className="PopUpWrapper">
            <Login />
            <Register />
            <AddProducts />
            <EditProducts />
            <EditChart />
            <EditRentals />
        </div>
    </>
  )
}

export default PopUpWrapper