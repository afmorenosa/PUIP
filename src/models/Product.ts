import db from "../Database";

const Product = db.model("Product", {
  tableName: "product",
  hasTimestamps: true
});

export default Product;
