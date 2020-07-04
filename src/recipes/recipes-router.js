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

const serializeNames = data => ({
    name:xss(data.name)
})

recipesRouter.use(function(req,res,next){ if(req.session.user) { next() } else { res.status(403).end() } })


recipesRouter
.route('/')
.get((req,res) => {
    RecipesService.getAllRecipes(
        req.app.get('db'),
        req.session.user.id
    )
.then(recipe => {
    if (recipe === null){
        res.status(400).json({
            error: {message: "no recipes"}
        });
    }
    res.json(recipe.map(serializeRecipe));
});
});

// FOR FUTURE VERSION!!!

// .post(jsonParser, (req,res,next) => {
//     const { name, source, preptime, waittime, cooktime, servings, comments,
//             calories, fat, satfat, carbs, fiber, sugar, protein, instructions,
//             ingredients, tags } = req.body
//     const newRecipe = { name, source, preptime, waittime, cooktime, servings, comments,
//         calories, fat, satfat, carbs, fiber, sugar, protein, instructions,
//         ingredients, tags }

//     //how do I add in the user's name here, as an author?
//     for (const [key, value] of Object.entries(newRecipe)) {
//         if(value == null) {
//             return res.status(400).json({
//                error: { message: `Missing '${key}' in request body`} 
//             })
//         }
//     }
//     RecipesService.insertRecipe(
//         req.app.get('db'),
//         newRecipe
//     )
//     .then(recipe => {
//         res
//             .status(201)
//             .json(serializeRecipe(recipe))
//     })
//     .catch(next)
// })

recipesRouter
.route('/random/:recipe_id')
.get((req, res) => {
    RecipesService.getRecipe(
        req.app.get('db'),
        req.params.recipe_id
    )
    .then(recipe => {
        if (recipe === null){
            res.status(400).json({
                error: {message: "no recipes"},
            });
        }
        res.json(serializeRecipe(recipe))
    })
})

recipesRouter
.route('/names')
.get((req,res) => {
    RecipesService.getNames(
        req.app.get('db'),
        req.session.user.id
    )
    .then(names => {
        if (names === null){
            res.status(400).json({
                error: {message: "no recipes"},
            });
        }
        res.json(names.map(serializeNames))
    })
})


module.exports = recipesRouter