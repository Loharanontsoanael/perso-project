import axios from 'axios'


export const LoginFunc =(UserName , PassWord)=>{
    const Values = {
        UserName: UserName ,
        PassWord: PassWord ,
    }

    axios.post('http://localhost:8081/log' , Values)
    .then((res)=>{
        // console.log(res);
    }).catch((err)=>{
        console.log(err);
    })

}

export const RegisterFunc= async (UserName , PassWord)=>{
    const values = {
        UserName: UserName ,
        PassWord: PassWord
    }
    
    axios.post('http://localhost:8081/reg' , values)
    .then((res)=>{
        // console.log(res);
    }).catch((err)=>{
        console.log(values);
    })
}


// export const setCookie =()=>{
//     axios.get('http://localhost:8081/logCookie')
//     .then((res)=>{
//         console.log(res);
//     }).catch((err)=>{
//         console.log(err);
//     })

// }


