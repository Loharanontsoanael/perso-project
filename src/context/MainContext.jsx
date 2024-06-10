import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";

const MainContext = createContext({
  CurrentUser: {},
  CurrentPage: "",
  IsPopUp: false,
  PopUp: "",
  isLogged: false,
  engine: {},
  CurrentEngine: {},
  setCurrentEngine: () => {},
  PopUpWrapper: () => {},
  ShowLogin: () => {},
  ShowRegister: () => {},
  ShowAddProduct: () => {},
  ShowEditEngine: () => {},
  setCurrentPage: () => {},
  setCurrentUser: () => {},
  setIsPopUp: () => {},
  setPopUp: () => {},
  Login: () => {},
  Register: () => {},
  Logout: () => {},
  AddNewEngine: () => {},
  getEngine: () => {},
  deleteEngine: () => {},
  editEngine: () => {},
  ShowAddToCart: () => {},
  formatDate: () => {},
  formatedDateToday: "",
  itemsToCart: {},
  cartItems: [],
  addToCart: () => {},
  deletToCart: () => {},
  ShowEditToCart:()=>{},
  editItemCart:{},
  editCart:()=>{},
  ShowRentNow:()=>{},
});

export const MainProvider = ({ children }) => {
  const socket = io("http://localhost:8081/");

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const [CurrentUser, setCurrentUser] = useState({
    id:'',
    UserName: "",
    Type: "Guest",
  });
  const [CurrentPage, setCurrentPage] = useState("");
  const [CurrentEngine, setCurrentEngine] = useState({});
  const [IsPopUp, setIsPopUp] = useState(false);
  const [PopUp, setPopUp] = useState("");
  const [isLogged, setIsLogged] = useState(false);
  const [engine, setEngine] = useState({});
  const today = new Date();
  const formatedDateToday = formatDate(today);
  const nextMonth = new Date(today.setMonth(today.getMonth() + 1));
  const [itemsToCart, setItemsTocart] = useState({});
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [editItemCart,setEditItemCart]=useState({})

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

  const ShowEditEngine = (item) => {
    PopUpWrapper();
    setCurrentEngine(item);
    setPopUp("EditProducts");
  };

  const ShowAddToCart = (item) => {
    PopUpWrapper();
    setItemsTocart(item);
    setPopUp("AddToChart");
  };

  const ShowEditToCart = (item) => {
    PopUpWrapper()
    setEditItemCart(item)
    setPopUp('EditChart')
  };

  const ShowRentNow = (item)=>{
    PopUpWrapper()
    if(CurrentUser.UserName!==""&&CurrentUser.Type!=="Guest"){
      setItemsTocart(item)
      setPopUp('RentNow')
    }
    else{
      ShowLogin()
    }
  }

  const Login = async (UserName, PassWord) => {
    const Values = {
      UserName: UserName,
      PassWord: PassWord,
    };

    axios
      .post("http://localhost:8081/log", Values)
      .then((res) => {
        if (res.data.UserName) {
          setCurrentUser({
            id: res.data.id ,
            UserName: res.data.UserName,
            Type: res.data.UserName !== "Admin" ? "Client" : "Admin",
          });
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
          setCurrentUser({
            id: res.data.id , 
            UserName: res.data.UserName,
            Type: res.data.UserName !== "Admin" ? "Client" : "Admin",
          });
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
        setCurrentUser({
          id:'',
          UserName: "",
          Type: "Guest",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const cookieHandling = () => {
    axios
      .get("http://localhost:8081/logCookie")
      .then((res) => {
        setCurrentUser({
          id: res.data.id,
          UserName: res.data.user.username,
          Type: res.data.user.username !== "Admin" ? "Client" : "Admin",
        });
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
        // alert(res.data.Message);
      })
      .catch((err) => {
        console.log(res.data.Message);
        alert("Error");
      });
  };

  const editEngine = (id, values) => {
    axios
      .put("http://localhost:8081/editEngine/" + id, values)
      .then((result) => {
        console.log("good");
      })
      .catch((err) => {
        console.log("Error");
      });
  };

  const deleteEngine = (id) => {
    axios
      .delete("http://localhost:8081/deleteEngine/" + id)
      .then((result) => {
        console.log(result.data.message);
      })
      .catch((error) => {
        console.log(error);
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

  const getRentals = ()=>{
    // console.log('fory');
    axios
    .get("http://localhost:8081/getRental")
    .then((res) => {
      // setEngine(res.data.engine);
      console.log(res);
    })
    .catch((err) => {
      console.log("error");
    });
  }

  const getEngineOnRealTime = () => {
    socket.on("newEngine", (newEngine) => {
      console.log(newEngine);
      setEngine((prevEngine) => [...prevEngine, newEngine]);
    });

    socket.on("updatedEngine", async () => {
      await getEngine();
    });
  };

  const addToCart = (newItems) => {
    const existIndex = cartItems.findIndex((item) => {
      return item.id == newItems.id && item.datelimit == newItems.datelimit;
    });

    console.log(existIndex);
    if (existIndex !== -1) {
      const currentcartItems = [...cartItems];
      currentcartItems[existIndex] = {
        ...currentcartItems[existIndex],
        quantity:
          parseInt(currentcartItems[existIndex].quantity) +
          parseInt(newItems.quantity),
        price:
          parseInt(currentcartItems[existIndex].price) +
          parseInt(newItems.price),
      };
      setCartItems(currentcartItems);
    } else {
      setCartItems([...cartItems, newItems]);
    }
  };

  const editCart = (id,updatedItems) => {
    const updateCart=cartItems.map(item=>{
      if(item.id == id){
        return {...item,...updatedItems}
      }
      return item
    })
    setCartItems(updateCart)
  }

  const deletToCart = (id) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems);
  };

  useEffect(() => {
    getEngine();
    getRentals()
    getEngineOnRealTime();
    cookieHandling();
    console.log(isLogged);
    return () => {
      socket.off();
    };
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

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
        ShowEditEngine,
        Login,
        Register,
        isLogged,
        Logout,
        AddNewEngine,
        getEngine,
        engine,
        deleteEngine,
        CurrentEngine,
        setCurrentEngine,
        editEngine,
        ShowAddToCart,
        formatDate,
        formatedDateToday,
        itemsToCart,
        cartItems,
        addToCart,
        deletToCart,
        ShowEditToCart,
        editItemCart,
        editCart,
        ShowRentNow,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export const MainData = () => {
  return useContext(MainContext);
};
