const knex = require('knex');
const app = require('../src/app');
const { makeRecipesArray } = require('./recipes.fixtures');

describe('Recipes Endpoints', function () {
  let db;
  before('make knex instance', () => {
    db = knex({
      client: 'pg',
      connection: process.env.TEST_DATABASE_URL,
    });
    app.set('db', db);
  });
  after('disconnect from db', () => db.destroy());
  before('clean the table', () => db.raw('TRUNCATE random_recipe_users, random_recipes RESTART IDENTITY CASCADE'));
  afterEach('cleanup', () => db.raw('TRUNCATE random_recipe_users, random_recipes RESTART IDENTITY CASCADE'));
  describe(`GET /api/recipes`, () => {
    context(`Given no recipes`, () => {
      it(`responds with 400 and 'no recipes'`, () => {
        return supertest(app)
          .get('/api/recipes')
          .expect(400, "no recipes");
      });
    });

    context('Given there are recipes in the database', () => {
      const testRecipes = makeRecipesArray();

      beforeEach('insert recipes', () => {
        return db
          .into('random_recipes')
          .insert(testRecipes);
      });

      it('responds with 200 and all of the recipes', () => {
        return supertest(app)
          .get('/api/recipes')
          .expect(200, testRecipes);
      });
    });
 });

 describe(`GET /api/recipes/names`, () => {
    context(`Given no recipes`, () => {
      it(`responds with 400 and "no recipes`, () => {
        return supertest(app)
          .get(`/api/recipes/names`)
          .expect(404, { error: { message: "no recipes" } });
      });
    });

    context('Given there are recipes in the database', () => {
      const testRecipes = makeRecipesArray();
      const recipeNames = testRecipes.name;

      beforeEach('insert recipes', () => {
        return db
          .into('random_recipes')
          .insert(testRecipes);
      });

      it('responds with 200 and the names of all recipes', () => {
        const expectedNames = recipenames;
        return supertest(app)
          .get('/api/recipes/names')
          .expect(200, expectedNames);
      });
    });

  });

  describe(`GET /api/recipes/random/:recipe_id`, () => {
    context(`Given no recipes`, () => {
      it(`responds with 400 and "no recipes`, () => {
        return supertest(app)
          .get(`/api/recipes/names`)
          .expect(400, { error: { message: "no recipes" } });
      });
    });

    context('Given there are recipes in the database', () => {
      const testRecipes = makeRecipesArray();
      const recipeNames = testRecipes.name;

      beforeEach('insert recipes', () => {
        return db
          .into('random_recipes')
          .insert(testRecipes);
      });

      it('responds with 200 and 1 recipe', () => {
        const recipe_id = 2;
        const expectedRecipe = testRecipes[recipe_id - 1];
        return supertest(app)
          .get(`/api/recipes/random/${recipe_id}`)
          .expect(200, expectedRecipe);
      });
    });
  });
});
