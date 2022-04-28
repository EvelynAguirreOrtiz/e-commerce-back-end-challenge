const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

// --------HAS MANY PRODUCT MODELS--------

Category.init(
  {
    // define columns
  //   * `id`
  //   * Integer
  //   * Doesn't allow null values
  //   * Set as primary key
  //   * Uses auto increment

  // * `category_name`
  //   * String
  //   * Doesn't allow null values
    
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
