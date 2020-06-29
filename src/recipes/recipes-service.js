const RecipesService = {
    getAllRecipes(knex) {
        return knex.select('*').from('random_recipes')
    },
    getRecipe( knex, recipe_id) {
        return knex.select('*').from('random_recipes').where('id', recipe_id).first()
    },
    insertRecipe( knex, newRecipe ) {
        return knex
        .insert(newRecipe)
        .into('random_recipes')
        .returning('*')
        .then(rows => {
            return rows[0]
        })
    }
}

module.exports = RecipesService