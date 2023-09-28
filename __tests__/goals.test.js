const { default: mongoose } = require('mongoose');

const supertest = require('supertest');
const app = require('../app');
const testRequest = supertest(app);

const GoalModel = require('../models/goal');
const { connectToDB, disconnectToDB } = require('../databaseConnection');

// creating dummy goal with relative id to test
const testGoal = new GoalModel({
  title: '20m Breathe a Day',
  description:
    'set aside a few minutes a day to focus, center, and connect as you breathe at least 20m a day',
  days: '15',
});

let testId = new mongoose.Types.ObjectId().toString();

describe('Goals-related Endpoints', () => {
  beforeAll(async () => {
    await connectToDB();
    const testResponse = await testGoal.save();
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

  describe('get a list of all goals from the database', () => {
    it('should return a 200 status and the goals list', async () => {
      const { body, statusCode } = await testRequest.get('/meditactive/goals/');
      expect(statusCode).toBe(200);
      expect(body).toEqual([
        expect.objectContaining({
          title: expect.any(String),
          description: expect.any(String),
          days: testGoal.days,
        }),
      ]);
    });
  });

  describe('post a new goal', () => {
    describe('if there are missing params', () => {
      it('should return a 422 status and log what is missing', async () => {
        await testRequest.post('/meditactive/goals/').expect(422);
      });
    });
    describe('if every parameter is correctly entered', () => {
      it('should return a 200 status and POST a new goal', async () => {
        const postedgoal = {
          title: 'Sun Salutation',
          description: 'Some basic yoga relaxation exercises every morning',
          days: '30',
        };
        await testRequest
          .post('/meditactive/goals/')
          .send(postedgoal)
          .expect(200);
      });
    });
  });

  describe('get details of a specific goal', () => {
    describe('if the goal ID is wrong', () => {
      it('should return a 422 unprocessable entity status', async () => {
        await testRequest.get('/meditactive/goals/wrongID').expect(422);
      });
    });
    describe('if the goal ID is correct', () => {
      it('should return a 200 status and display the goal', async () => {
        const { body, statusCode } = await testRequest.get(
          `/meditactive/goals/${testId}`
        );
        expect(statusCode).toBe(200);
        expect(body._id).toEqual(encodeURI(testId));
      });
    });
  });

  describe('put an update to a goal', () => {
    it('should return 200 and display the updated goal', async () => {
      const testUpdate = {
        title: 'Yoga Sun Salutation',
        description: 'Some basic yoga relaxation exercises every morning',
        days: '40',
      };
      await testRequest
        .put(`/meditactive/goals/${testId}`)
        .send(testUpdate)
        .expect(200);
    });
  });

  describe('delete a goal from the database', () => {
    it('should return 200 and display the deleted goal', async () => {
      await testRequest.delete(`/meditactive/goals/${testId}`).expect(200);
    });
  });
});
