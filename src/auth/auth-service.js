const AuthService = {
    getUser(knex, email, p_word) {
      return knex.select('id').from('random_recipe_users').where('email', email).
      first()
    },
    getNames(knex) {
        return knex.select('name').from('random_recipes')
    },
  }
 
  module.exports = AuthService
  