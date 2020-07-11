const AuthService = {
    getUser(knex, email) {
      return knex.select('id').from('random_recipe_users').where('email', email).first();
    },
  };

  module.exports = AuthService;
