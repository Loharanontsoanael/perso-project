import { Button } from '@nextui-org/react';
import React, { useState } from 'react';
import { MainData } from '../../context/MainContext';
import { FaTimes } from 'react-icons/fa'; // Import de l'icône de fermeture

function Login() {
  const { ShowRegister, ShowLogin, PopUp, Login, Register, setIsPopUp } = MainData();

  const [UserName, setUserName] = useState('');
  const [PassWord, setPassWord] = useState('');
  const [error, setError] = useState('');

  const HandleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (PopUp === 'Login') {
        await Login(UserName, PassWord);
      } else if (PopUp === 'Register') {
        await Register(UserName, PassWord);
      }
      setUserName('');
      setPassWord('');
      setIsPopUp(false);
    } catch (err) {
      if (err.message === "Invalid username or password") {
        setError("Invalid username or password. Please try again.");
      } else {
        setError("An error occurred. Please try again later.");
      }
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70">
      <div className="bg-gray-800 p-6 rounded shadow-lg w-1/3 text-white relative">
        <button
          className="absolute top-2 right-2 text-white"
          onClick={() => setIsPopUp(false)}
        >
          <FaTimes className="w-6 h-6" />
        </button>
        <h1 className="text-2xl font-semibold mb-4">{PopUp}</h1>
        <form className="space-y-4" onSubmit={HandleSubmit}>
          <div className="flex flex-col">
            <label htmlFor="username" className="mb-1">UserName</label>
            <input
              id="username"
              type="text"
              className="p-2 border border-gray-600 bg-gray-700 rounded text-white"
              value={UserName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="mb-1">Password</label>
            <input
              id="password"
              type="password"
              className="p-2 border border-gray-600 bg-gray-700 rounded text-white"
              value={PassWord}
              onChange={(e) => setPassWord(e.target.value)}
              required
            />
          </div>
          {error && <div className="text-red-500 text-sm">{error}</div>}
          <Button
            className="w-full bg-blue-600 text-white py-2 rounded"
            type="submit"
          >
            {PopUp}
          </Button>
        </form>
        {PopUp === 'Login' && (
          <div className="mt-2 text-right">
            <span className="cursor-pointer text-blue-500">Forgot Password?</span>
          </div>
        )}
        {PopUp === 'Login' ? (
          <div className="mt-4 text-center">
            <p>No account yet? <span className="cursor-pointer text-blue-500" onClick={ShowRegister}>Register</span></p>
          </div>
        ) : (
          <div className="mt-4 text-center">
            <p>Already have an account? <span className="cursor-pointer text-blue-500" onClick={ShowLogin}>Login</span></p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
