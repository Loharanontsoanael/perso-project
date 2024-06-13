const { DataTypes, ForeignKeyConstraintError } = require("sequelize");
const { sequelize  } = require(".");

module.exports = (sequelize,DataTypes)=>{
    const Engine = sequelize.define('Engine', {
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

    Engine.associate = function(models){
        Engine.hasMany(models.Rental , {
            foreignKey: 'engine_id',
            as:'rental',
        })
    }

    return Engine
}