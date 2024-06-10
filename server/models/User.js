const { DataTypes, ForeignKeyConstraintError } = require("sequelize");
const { sequelize } = require(".");

module.exports = (sequelize , DataTypes)=>{
    const User = sequelize.define('User' , {
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

    User.associate = (models)=>{
        User.hasMany(models.Rental,{
            foreignKey:'user_id',
            as:'rental',
            onDelete:'CASCADE',
            onUpdate:'CASCADE',
        })
    }

    return User
}