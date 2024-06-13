const { DataTypes } = require("sequelize");
const { sequelize  } = require(".");

module.exports = (sequelize,DataTypes)=>{
    const Rental = sequelize.define('Rental' , {

        total_price: {
            type:DataTypes.INTEGER ,
            allowNull: false,
            validate:{
                notEmpty: true ,
            }
        },

        choosen_quantity: {
            type:DataTypes.INTEGER ,
            allowNull: false,
            validate:{
                notEmpty: true ,
            }
        },
        dateLimit :{
            type: DataTypes.DATE,
            allowNull: false ,
            validate:{
                notEmpty:true
            }
        },
        status:{
            type:DataTypes.STRING,
            allowNull:false,
            defaultValue: "Pending",
            validate:{
                notEmpty:true,
            }
        },
        reporting:{
            type: DataTypes.BOOLEAN,
            defaultValue:false,
            allowNull:false,
            validate:{
                notEmpty: true ,
            }
        },
        isBack:{
            type: DataTypes.BOOLEAN,
            defaultValue:false,
            allowNull:false,
            validate:{
                notEmpty: true ,
            }
        }
    })


    Rental.associate = (models)=>{
        Rental.belongsTo(models.User , {
            foreignKey : 'user_id',
            as: 'user',
        })

        Rental.belongsTo(models.Engine , {
            foreignKey: 'engine_id',
            as: 'engine',
        })
    }

    return Rental
}