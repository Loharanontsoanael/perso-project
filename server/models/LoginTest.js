const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

module.exports = (sequelize , DataTypes)=>{
    const LoginTest = sequelize.define('LoginTest' , {
        UserName :{
            type : DataTypes.STRING ,
            allowNull: false ,
            validate:{
                notEmpty: true,
            }
        },
        PassWord :{
            type : DataTypes.STRING ,
            allowNull: false ,
            validate:{
                notEmpty: true,
            }
        }
    })

    return LoginTest
}