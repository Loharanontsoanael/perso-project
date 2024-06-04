const { DataTypes } = require("sequelize");
const { sequelize  } = require(".");

module.exports = (sequelize,DataTypes)=>{
    const ProductTest = sequelize.define('ProductTest', {
        EngineName: {
            type:DataTypes.STRING ,
            allowNull: false,
            validate:{
                notEmpty: true ,
            }
        },

        Price: {
            type:DataTypes.INTEGER ,
            allowNull: false,
            validate:{
                notEmpty: true ,
            }
        },

        Quantity: {
            type:DataTypes.INTEGER ,
            allowNull: false,
            validate:{
                notEmpty: true ,
            }
        }
    })

    return ProductTest
}