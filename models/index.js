// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");
const { belongsToMany } = require("./Product");

// Product belongsTo Category
Category.hasOne(Product, {
	foreignKey: "category_id",
	onDelete: "cascade",
});
Product.belongsTo(Category, {
	// foreignKey: "category_id",
});

// Categories have many Products
Category.hasMany(Product, {
	foreignKey: "category_id",
	onDelete: "cascade",
});
Product.belongsTo(Category, {
	foreignKey: "category_id",
	onDelete: "cascade",
});

// Product belongs to many Tags (through ProductTag)
Product.belongsToMany(Tag, {
	through: ProductTag,
	// as: "product-tag",
	foreignKey: "product_id",
	onDelete: "cascade",
});

Tag.belongsToMany(Product, {
	through: ProductTag,
	// as: "product_tag",
	foreignKey: "tag_id",
	onDelete: "cascade",
});

module.exports = {
	Product,
	Category,
	Tag,
	ProductTag,
};
