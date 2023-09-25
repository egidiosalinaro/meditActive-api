const supertest = require('supertest');
const app = require('../app');
const testRequest = supertest(app);

const IntervalModel = require('../models/interval');
const { connectToDB, disconnectToDB } = require('../databaseConnection');

// creating dummy interval with relative id to test
const testInterval = new IntervalModel({
  user: '631c8c9694ebae7ccb8258b9',
  starting: '2022-10-01',
  ending: '2022-10-10',
  relatedGoal: '6509d8f44159aaa41b0fc1f1',
});

let testId = null;

describe('Intervals-related Endpoints', () => {
  beforeAll(async () => {
    await connectToDB();
    const testResponse = await testInterval.save();
    testId = testResponse._id.toHexString();
  });
  afterAll(async () => {
    await disconnectToDB();
  });

  describe('get a list of all intervals from the database', () => {
    it('should return a 200 status and the intervals list', async () => {
      const { body, statusCode } = await testRequest.get(
        '/meditactive/intervals/'
      );
      expect(statusCode).toBe(200);
      expect(body).toEqual([
        expect.objectContaining({
          __v: 0,
          user: expect.any(String),
          starting: expect.any(String),
          ending: expect.any(String),
          relatedGoal: expect.any(String),
        }),
      ]);
    });
  });
});
