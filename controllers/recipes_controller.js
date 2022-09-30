// DEPENDENCIES
const recipes = require('express').Router()
const { BackendKeyDataMessage } = require('pg-protocol/dist/messages')
const db = require('../models')
const { Recipes } = db 

// FIND ALL RECIPES
recipes.get('/', async (req, res) => {
    try {
        const foundRecipes = await Recipes.findAll(
        //     {
        //     where: {
        //         name: {[Op.like ]: `%${req.query.name ?? ""}%`}
        //     }
        // }
        )
        res.status(200).json(foundRecipes)
    } catch (error) {
        res.status(500).json(error)
    }
})

// FIND A SPECIFIC RECIPE
recipes.get('/:id', async (req, res) => {
    try {
        const foundRecipes = await Recipes.findOne({
            where: { recipeId: req.params.id }
        })
        res.status(200).json(foundRecipes)
    } catch (error) {
        res.status(500).json(error)
    }
})

// CREATE A RECIPE
recipes.post('/', async (req, res) => {
    try {
        const newRecipes = await Recipes.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new recipe',
            data: newRecipes
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// UPDATE A RECIPE
recipes.put('/:id', async (req, res) => {
    try {
        const updatedRecipes = await Recipes.update(req.body, {
            where: {
                recipeId: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedRecipes} recipe!`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

//DELETE A RECIPE
recipes.delete('/:id', async (req, res) => {
    try{
        const deletedRecipes = await Recipes.destroy({
            where: {
                recipeId: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedRecipes} recipe.`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})


// EXPORT
module.exports = recipes
