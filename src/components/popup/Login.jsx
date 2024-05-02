import { Button } from '@nextui-org/react'
import React, { useRef, useState } from 'react'
import { MainData } from '../../context/MainContext'
import axios from 'axios'

function Login() {

  const{
    ShowRegister,
    ShowLogin,
    PopUp,
    Login,
    Register,
    setIsPopUp,
  }=MainData()

  const [UserName, setUserName] = useState('');
  const [PassWord, setPassWord] = useState('');

  const HandleSubmit =(e)=>{
    e.preventDefault()
    const values={
      UserName:UserName ,
      PassWord:PassWord
    }
    if(PopUp=='Login'){
      Login(UserName,PassWord)
    } else if(PopUp=='Register'){
      Register(UserName,PassWord)
    }
    setUserName('')
    setPassWord('')
    setIsPopUp(false)
  }

  return (
    <>
      <div className='LoginWrapper PopUpContainer'>
        <h1 className='LogInTitle'>{PopUp}</h1>
        <form action="" className='LoginForm' onSubmit={HandleSubmit}>
          {/* {
            PopUp=="Register" &&
              <>
                <div className="disp-flex-col">
                  <label htmlFor="">Name</label>
                  <input type="text" className='LoginInputs' />
                </div>
                <div className="disp-flex-col">
                  <label htmlFor="">Address</label>
                  <input type="text" className='LoginInputs' />
                </div>
              </>
          } */}

          <div className="LogUserName disp-flex-col">
            <label htmlFor="">UserName</label>
            <input type="text" className='LoginInputs' onChange={(e)=>{setUserName(e.target.value)}} />
          </div>
          <div className="LogPasswd disp-flex-col">
            <label htmlFor="">Password</label>
            <input type="password" className='LoginInputs' onChange={(e)=>{setPassWord(e.target.value)}} />
          </div>
          {/* {
            PopUp=="Register" &&
            <div className="disp-flex-col">
              <label htmlFor="">Password Confirmation</label>
              <input type="password" className='LoginInputs' />
            </div>
          } */}


          <Button className='bg-btn col-white btnLogRegister' type='submit' >{PopUp}</Button>
        </form>

        {
          PopUp=="Login" &&
            <div className='LoginRegister'>
              <p>No Account yet ? </p>
              <p className='cursor-pointer RegisterText' onClick={()=>{ ShowRegister()}}> Register </p>
            </div> ||
          PopUp=="Register" &&
            <div className='LoginRegister'>
              <p>Already got an Account ? </p>
              <p className='cursor-pointer RegisterText' onClick={()=>{ ShowLogin()}}> Login </p>
            </div>
        }
      </div>
    </>
  )
}

export default Login