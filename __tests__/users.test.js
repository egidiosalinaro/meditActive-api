const { default: mongoose } = require('mongoose');

const supertest = require('supertest');
const app = require('../app');
const testRequest = supertest(app);

const UserModel = require('../models/user');
const { connectToDB, disconnectToDB } = require('../databaseConnection');

// creating dummy user with relative id to test
const testUser = new UserModel({
  name: 'John',
  surname: 'Doe',
  email: 'john.doe@dummymail.com',
});

let testId = new mongoose.Types.ObjectId().toString();

describe('Users-related Endpoints', () => {
  beforeAll(async () => {
    await connectToDB();
    const testResponse = await testUser.save();
    testId = testResponse._id;
  });
  afterAll(async () => {
    await disconnectToDB();
  });

  describe('endpoint URL not typed correctly', () => {
    it('should return a 404 status', async () => {
      await testRequest.get('/meditactive/wrongURL/').expect(404);
      await testRequest.post('/meditactive/wrongURL/').expect(404);
      await testRequest.put('/meditactive/wrongURL/').expect(404);
      await testRequest.delete('/meditactive/wrongURL/').expect(404);
    });
  });

  describe('get a list of all users from the database', () => {
    it('should return a 200 status and the users list', async () => {
      const { body, statusCode } = await testRequest.get('/meditactive/users/');
      expect(statusCode).toBe(200);
      expect(body).toEqual([
        expect.objectContaining({
          name: expect.any(String),
          surname: expect.any(String),
          email: expect.any(String),
        }),
      ]);
    });
  });

  describe('post a new user', () => {
    describe('if there are missing params', () => {
      it('should return a 422 status and log what is missing', async () => {
        await testRequest.post('/meditactive/users/').expect(422);
      });
    });
    describe('if every parameter is correctly entered', () => {
      it('should return a 200 status and POST a new user', async () => {
        const postedUser = {
          name: 'Jamie',
          surname: 'Smith',
          email: 'jamie.smith@dummymail.com',
        };
        await testRequest
          .post('/meditactive/users/')
          .send(postedUser)
          .expect(200);
      });
    });
  });

  describe('get details of a specific user', () => {
    describe('if the user ID is wrong', () => {
      it('should return a 422 unprocessable entity status', async () => {
        await testRequest.get('/meditactive/users/wrongID').expect(422);
      });
    });
    describe('if the user ID is correct', () => {
      it('should return a 200 status and display the user', async () => {
        const { body, statusCode } = await testRequest.get(
          `/meditactive/users/${testId}`
        );
        expect(statusCode).toBe(200);
        expect(body._id).toEqual(encodeURI(testId));
      });
    });
  });

  describe('put an update to an user', () => {
    it('should return 200 and display the updated user', async () => {
      const testUpdate = {
        name: 'Johnny',
        surname: 'Doey',
        email: 'john.doe@updatedmail.com',
      };
      await testRequest
        .put(`/meditactive/users/${testId}`)
        .send(testUpdate)
        .expect(200);
    });
  });

  describe('delete a user from the database', () => {
    it('should return 200 and display the deleted user', async () => {
      await testRequest.delete(`/meditactive/users/${testId}`).expect(200);
    });
  });
});
