const express = require('express')
const router = express.Router()
const Soda = require('../models/Soda')

router.get('/', async (req, res) => {
    try {
        const sodas = await Soda.find()
        res.json(sodas)
    } catch (err) {
        res.status(500).json({ message: err.message})
    }
})

// Getting One
router.get('/:id', getSoda, (req, res) => {
    res.json(res.soda)
})
// Creating One
router.post('/', async (req, res) => {
    console.log(req.params)
    const soda = new Soda({
        name: req.body.name,
        description: req.body.description,
        cost: req.body.cost,
        maxQuantity: req.body.maxQuantity
    })
    try{
        const newSoda = await soda.save()
        res.status(201).json(newSoda)
    } catch (err) {
        res.status(400).json({message: err.message})
    }
})

// Updating One
router.patch('/:id', getSoda, async (req, res) => {
    if (req.body.name != null){
        res.soda.name = req.body.name
    }
    if (req.body.description != null){
        res.soda.description = req.body.description
    }
    if (req.body.cost != null){
        req.soda.cost = req.body.cost
    }
    if (req.body.maxQuantity != null){
        req.soda.maxQuantity = req.body.maxQuantity
    }
    try {
        const updatedSoda = await res.soda.save()
        res.json(updatedSoda)
    } catch (err) {
        res.status(400).json({message: err.message})
    }
})

// Deleting One
router.delete('/:id', getSoda, async (req, res) => {
    try {
        await res.soda.remove()
        res.json({message: 'Deleted Soda'})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

async function getSoda(req, res, next) {
    let soda
    try{
        soda = await Soda.findById(req.params.id)
        if (soda == null){
            return res.status(404).json({message: 'Soda not found'})
        }
    } catch (err) {
        return res.status(500).json({message: err.message})
    }
    res.soda = soda // this code here is the res.soda above 
    next()
}


module.exports = router;