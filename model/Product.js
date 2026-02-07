import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    productName: {
    type: String,
    required: true,
  },
  productPrice: {
    type: Number,
    required: true,
  },
  productDetail: String,
  image: {
    url: String,
    public_id: String,
  },

});

export default mongoose.model("product", productSchema); 