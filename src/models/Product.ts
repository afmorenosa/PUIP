import db from "../Database";

const Product = db.model('Product', {
  tableName: "products",
  hasTimestamps: true
});

export default Product;
