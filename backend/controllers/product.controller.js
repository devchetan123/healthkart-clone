const express = require("express");
const router = express.Router();
const ProductModel = require("../models/products.model")

router.get("/", async (req, res) => {
    let products = await ProductModel.find({})
    res.status(200).json(products)
})


router.get("/flashsale", async (req, res) => {
    let products = await ProductModel.find({"section" : "flashsale"})
    res.status(200).json(products)
})

router.get("/trendingnow", async (req, res) => {
    let products = await ProductModel.find({"section" : "trendingnow"})
    res.status(200).json(products)
})

router.get("/trendingwheypro", async (req, res) => {
    let products = await ProductModel.find({"section" : "trendingwheypro"})
    res.status(200).json(products)
})

router.get("/trendingmassgainer", async (req, res) => {
    let products = await ProductModel.find({"section" : "trendingmassgainer"})
    res.status(200).json(products)
})

router.get("/trendingpremiumsuppements", async (req, res) => {
    let products = await ProductModel.find({"section" : "trendingpremiumsuppements"})
    res.status(200).json(products)
})

router.get("/justlaunched", async (req, res) => {
    let products = await ProductModel.find({"section" : "justlaunched"})
    res.status(200).json(products)
})


router.get("/whatarelooking", async (req, res) => {
    let products = await ProductModel.find({"section" : "whatarelooking"})
    res.status(200).json(products)
})

router.get("/popularweightloss", async (req, res) => {
    let products = await ProductModel.find({"section" : "popularweightloss"})
    res.status(200).json(products)
})

router.get("/popularsportsnut", async (req, res) => {
    let products = await ProductModel.find({"section" : "popularsportsnut"})
    res.status(200).json(products)
})

router.get("/popularhealthfoodanddrink", async (req, res) => {
    let products = await ProductModel.find({"section" : "popularhealthfoodanddrink"})
    res.status(200).json(products)
})

router.get("/popularinfitness", async (req, res) => {
    let products = await ProductModel.find({"section" : "popularinfitness"})
    res.status(200).json(products)
})

router.get("/whey", async (req, res) => {
    let products = await ProductModel.find({"section" : "whey"})
    res.status(200).json(products)
})

router.get("/:id", async (req, res) => {
    let movies = await ProductModel.findById(req.params.id)
    res.status(200).json(movies)
})


module.exports = router