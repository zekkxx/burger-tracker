module.exports = function(sequelize, DataTypes){
    let model = sequelize.define("Burger", {
        name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        devoured:{
            type:DataTypes.BOOLEAN,
            defaultValue:false
        }
    });
    return model;
}