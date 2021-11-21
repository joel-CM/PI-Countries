const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Activity",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      nombre: {
        type: DataTypes.STRING,
      },
      dificultad: {
        type: DataTypes.INTEGER,
      },
      duracion: {
        type: DataTypes.INTEGER,
      },
      temporada: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
    }
  );
};
