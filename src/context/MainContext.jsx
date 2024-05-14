import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { Socket , io } from 'socket.io-client'

const MainContext = createContext({
  CurrentUser: "",
  CurrentPage: "",
  IsPopUp: false,
  PopUp: "",
  isLogged: false,
  engine: {},
  PopUpWrapper: () => {},
  ShowLogin: () => {},
  ShowRegister: () => {},
  ShowAddProduct: () => {},
  setCurrentPage: () => {},
  setCurrentUser: () => {},
  setIsPopUp: () => {},
  setPopUp: () => {},
  Login: () => {},
  Register: () => {},
  Logout: () => {},
  AddNewEngine: () => {},
  getEngine: () => {},
});

export const MainProvider = ({ children }) => {
  const socket = io("http://localhost:8081/");

  const [CurrentUser, setCurrentUser] = useState("");
  const [CurrentPage, setCurrentPage] = useState("");
  const [IsPopUp, setIsPopUp] = useState(false);
  const [PopUp, setPopUp] = useState("");
  const [isLogged, setIsLogged] = useState(false);
  const [engine, setEngine] = useState({});

  const PopUpWrapper = () => {
    setIsPopUp(true);
    console.log(PopUp, IsPopUp);
  };

  const ShowLogin = () => {
    PopUpWrapper();
    setPopUp("Login");
  };

  const ShowRegister = () => {
    PopUpWrapper();
    setPopUp("Register");
  };

  const ShowAddProduct = () => {
    PopUpWrapper();
    setPopUp("New Engine");
  };

  const Login = async (UserName, PassWord) => {
    const Values = {
      UserName: UserName,
      PassWord: PassWord,
    };

    axios
      .post("http://localhost:8081/log", Values)
      .then((res) => {
        if (res.data.UserName) {
          setCurrentUser(res.data.UserName);
          setIsLogged(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const Register = async (UserName, PassWord) => {
    const values = {
      UserName: UserName,
      PassWord: PassWord,
    };

    axios
      .post("http://localhost:8081/reg", values)
      .then((res) => {
        if (res.data.UserName) {
          setCurrentUser(res.data.UserName);
          setIsLogged(true);
        }
      })
      .catch((err) => {
        console.log(values);
      });
  };

  const Logout = async () => {
    axios
      .post("http://localhost:8081/logout")
      .then((res) => {
        console.log(res);
        setIsLogged(false);
        setCurrentUser("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const cookieHandling = () => {
    axios
      .get("http://localhost:8081/logCookie")
      .then((res) => {
        setCurrentUser(res.data.user.username);
        setIsLogged(res.data.LogStatus);
      })
      .catch((err) => {
        console.log(err);
        setIsLogged(false);
      });
  };

  const AddNewEngine = (name, price, quantity) => {
    const value = {
      name: name,
      price: price,
      quantity: quantity,
    };

    axios
      .post("http://localhost:8081/NewEngine", value)
      .then((res) => {
        alert(res.data.Message);
      })
      .catch((err) => {
        console.log(res.data.Message);
        alert("Error");
      });
  };

  const getEngine = () => {
    axios
      .get("http://localhost:8081/getEngine")
      .then((res) => {
        setEngine(res.data.engine);
      })
      .catch((err) => {
        console.log("error");
      });
  };

  const getEngineOnRealTime = () => {
    socket.on('newEngine' , (newEngine)=>{
        // console.log(newEngine);
        // setEngine((prevEngine)=>[...prevEngine,newEngine])
        getEngine()
    })
  };

  useEffect(() => {
    cookieHandling();
    getEngine();
    getEngineOnRealTime()
    console.log(isLogged);
    return ()=>{
        socket.off();
    }
}, []);


  return (
    <MainContext.Provider
      value={{
        CurrentUser,
        setCurrentUser,
        CurrentPage,
        setCurrentPage,
        IsPopUp,
        setIsPopUp,
        PopUp,
        setPopUp,
        PopUpWrapper,
        ShowLogin,
        ShowRegister,
        ShowAddProduct,
        Login,
        Register,
        isLogged,
        Logout,
        AddNewEngine,
        getEngine,
        engine,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export const MainData = () => {
  return useContext(MainContext);
};
