import db from "../Database";

const Product = db.bsdb.model("Product", {
  tableName: "product",
  hasTimestamps: true
});

export default Product;
