const express = require("express")
const mongoose = require("mongoose")
const PORT = process.env.PORT || 8000;
const cors = require("cors")

const DB_URL = "mongodb+srv://health:health@cluster0.di5fw.mongodb.net/users";

const productController = require("./controllers/product.controller")
const wishlistController = require("./controllers/wishlist.controller")

let app = express();

app.use(cors())
app.use(express.json())

app.use("/products", productController)
app.use("/wishlist", wishlistController)


const connect = () => {
    return mongoose.connect(DB_URL)
}



    // app.post("/movies", async (req, res) => {
    //     const createMovie = await ProductModel.create(req.body)
    //     res.status(200).json(createMovie)
    // })

    // app.delete("/movies/:id", async (req, res) => {
    //     const delMovie = await ProductModel.findByIdAndRemove(req.params.id)
    //     res.status(200).json(delMovie)
    // })

    // app.patch("/movies/:id", async (req, res) => {
    //     const updatedInfo = await ProductModel.findByIdAndUpdate(
    //       req.params.id,
    //       req.body,
    //       { new: true }
    //     );
    //     res.status(200).json(updatedInfo);
    //   });



app.listen(PORT, async () => {
    try{
        await connect();
        console.log(`listening on port ${PORT}`)
    }
    catch(e){
        console.log(e.message)
    }
})