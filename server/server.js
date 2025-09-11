const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config(); 

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_DB; 


app.use(express.json());
app.use(cors());


mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Connection Error:", err));

// Cart Schema
const cartSchema = new mongoose.Schema({
  productId: String,
  name: String,
  price: Number,
  color: String,
  size: String,
  quantity: Number,
  image: String
});

const Cart = mongoose.model("Cart", cartSchema);


app.post("/cart", async (req, res) => {
  try {
    const { productId, name, price, color, size, quantity, image } = req.body;

    
    let cartItem = await Cart.findOne({ productId, color, size });

    if (cartItem) {
      cartItem.quantity += quantity;
      await cartItem.save();
    } else {
      cartItem = new Cart({ productId, name, price, color, size, quantity, image });
      await cartItem.save();
    }

    res.status(201).json({ message: "Item added to cart", cartItem });
  } catch (err) {
    res.status(500).json({ error: "Failed to add item to cart" });
  }
});


app.delete("/cart/:id", async (req, res) => {
    try {
      const { id } = req.params;
      console.log("Received delete request for ID:", id); // ✅ Debugging log
  
      const deletedItem = await Cart.findByIdAndDelete(id);
      if (!deletedItem) {
        return res.status(404).json({ error: "Item not found" });
      }
  
      res.status(200).json({ message: "Item removed from cart" });
    } catch (err) {
      res.status(500).json({ error: "Failed to remove item from cart" });
    }
  });
  


app.get("/cart", async (req, res) => {
  try {
    const cartItems = await Cart.find();
    res.status(200).json(cartItems);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch cart items" });
  }
});


app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
