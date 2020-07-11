const UsersService = {
    getAllUsers(knex) {
      return knex.select('*').from('random_recipe_users');
    },
    lookForUser(knex, email) {
      return knex.select('*').from('random_recipe_users').where({ email }).first();
    },
    insertUser(knex, newUser) {
      return knex
        .insert(newUser)
        .into('random_recipe_users')
        .returning('*')
        .then((rows) => {
          return rows[0];
        });
    },
    getById(knex, id) {
      return knex
        .from('random_recipe_users')
        .select('*')
        .where('id', id)
        .first();
    },
    deleteUser(knex, id) {
      return knex('random_recipe_users')
        .where({ id })
        .delete();
    },
    updateUser(knex, id, newUserFields) {
      return knex('random_recipe_users')
        .where({ id })
        .update(newUserFields);
    },
};

  module.exports = UsersService;
