const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('actividadTuristica', {
    ID: {
      type: DataTypes.UUID,
      allowNull: false,
      unique: true,
      primaryKey: true,
      defaultValue: DataTypes.INTEGER,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    dificultad: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    duracion: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    temporada: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    },{
        timestamps: false,
        createdAt: false,
        updatedAt: false
      });
}