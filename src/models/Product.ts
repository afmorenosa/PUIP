import db from "../Database";

const Product = db.model('Product', {
  tableName: "products"
});

export default Product;
