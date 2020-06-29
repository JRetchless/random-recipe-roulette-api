const express=require('express')
const xss = require('xss')
const RecipesService=require('./recipes-service')

const recipesRouter= express.Router()
const jsonParser=express.json()

recipesRouter.use(function(req,res,next){ if(req.session.user) { next() } else { res.status(403).end() } })

const serializeRecipe = recipe => ({
    id: recipe.id,
    name: xss(recipe.name),
    source: xss(recipe.source),
    preptime: recipe.preptime,
    waittime: recipe.waittime,
    cooktime: recipe.cooktime,
    servings: recipe.servings,
    comments: xss(recipe.comments),
    calories: recipe.calories,
    fat: recipe.fat,
    satfat: recipe.satfat,
    carbs: recipe.carbs,
    fiber: recipe.fiber,
    sugar: recipe.sugar,
    protein: recipe.protein,
    instructions: xss(recipe.instructions),
    ingredients: xss(recipe.ingredients),
    tags: xss(recipe.tags)
})

recipesRouter
.route('/')
.get((req,res) => {
    RecipesService.getAllRecipes(
        req.app.get('db'),
        req.session.user.id
    )
.then(recipe => {
    res.json(recipe.map(serializeRecipe))
})
})
.post(jsonParser, (req,res,next) => {
    const { name, source, preptime, waittime, cooktime, servings, comments,
            calories, fat, satfat, carbs, fiber, sugar, protein, instructions,
            ingredients, tags } = req.body
    const newRecipe = { name, source, preptime, waittime, cooktime, servings, comments,
        calories, fat, satfat, carbs, fiber, sugar, protein, instructions,
        ingredients, tags }

    //how do I add in the user's name here, as an author?
    for (const [key, value] of Object.entries(newRecipe)) {
        if(value == null) {
            return res.status(400).json({
               error: { message: `Missing '${key}' in request body`} 
            })
        }
    }
    RecipesService.insertRecipe(
        req.app.get('db'),
        newRecipe
    )
    .then(recipe => {
        res
            .status(201)
            .json(serializeRecipe(recipe))
    })
    .catch(next)
})

recipesRouter
.route('/:recipe_id')
.get((req, res) => {
    RecipesService.getRecipe(
        req.app.get('db'),
        req.params.recipe_id
    )
    .then(recipe => {
        console.log(recipe)
        res.json(serializeRecipe(recipe))
    })
})

module.exports = recipesRouter