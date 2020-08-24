const knex = require('knex');
const app = require('../src/app');
const { makeUsersArray } = require('./users.fixtures');

describe('Auth Endpoints', function() {
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

  describe(`POST /api/login`, () => {
        this.timeout(15000);
        const testUsers = makeUsersArray();
        beforeEach('insert users', () => {
        return db
            .into('random_recipe_users')
            .insert(testUsers);
        });

        it(`logs the user in, sets req.session.user to the user, and returns status 200`, () => {
            const newUser = {
                email: "test@test.test",
                p_word: "test",
            };
            return supertest(app)
            .post('/api/login')
            .send(newUser)
            .expect(201)
            .expect((res) => {
            expect(res.body).to.have.property('id');
            });
        });

        const requiredFields = ['email', 'p_word'];

        requiredFields.forEach((field) => {
        const newUser = {
            email: 'test@test.test',
            p_word: 'test',
        };

        it(`responds with 400 and an error message when the '${field}' is missing`, () => {
            delete newUser[field];
            return supertest(app)
            .post('/api/login')
            .send(newUser)
            .expect(400, {
                error: { message: `Missing '${field}' in request body` },
            });
        });
        });
    });
});
