const express = require('express');
const router = express.Router();
const Sushi = require('../models/sushiModel')
router.get("/getallsushis", async (req, res) => {

    try {
        const sushis = await Sushi.find({})
        res.send(sushis)
    } catch (error) {
        return res.status(400).json({ message: error });

    }
});

router.post('/addsushi', async (req, res) => {
    const sushi = req.body.sushi

    try {

        const newsushi = new Sushi({
            name: sushi.name,
            image: sushi.image,
            varients: ['small', 'medium', 'large'],
            description: sushi.description,
            category: sushi.category,
            prices: [sushi.prices]

        })
        await newsushi.save()
        res.send('New Sushi added successfully!!')
    } catch (error) {
        return res.status(400).json({ message: error });

    }



})

router.post("/getsushibyid", async (req, res) => {
    const sushiid = req.body.sushiid

    try {
        const sushi = await Sushi.findOne({ _id: sushiid })
        res.send(sushi)
    } catch (error) {
        return res.status(400).json({ message: error });
    }
})

router.post("/editsushi", async (req, res) => {
    const editedsushi = req.body.editedsushi

    try {
        const sushi = await Sushi.findOne({ _id: editedsushi._id })
        sushi.name = editedsushi.name
        sushi.description = editedsushi.description
        sushi.category = editedsushi.category
        sushi.image = editedsushi.image
        sushi.prices = [editedsushi.prices]

        await sushi.save()
        res.send("Sushi Details Edited successfully!!")

    } catch (error) {
        return res.status(400).json({ message: error });
    }
})


router.post("/deletesushi", async (req, res) => {

    const sushiid = req.body.sushiid

    try {
        await Sushi.findOneAndDelete({ _id: sushiid })
        res.send("Sushi Deleted Successfully")
    } catch (error) {
        return res.status(400).json({ message: error });
    }
})

module.exports = router;