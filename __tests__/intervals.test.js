const { default: mongoose } = require('mongoose');

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

let testId = new mongoose.Types.ObjectId().toString();

describe('Intervals-related Endpoints', () => {
  beforeAll(async () => {
    await connectToDB();
    const testResponse = await testInterval.save();
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

  describe('get a list of intervals filtered by query', () => {
    describe('given the research returned no result', () => {
      it('should return a 422 unprocessable entity status', async () => {
        const dummyQuery = '631c8c9oDUMMYo7ccb8258b9';
        await testRequest
          .get(`/meditactive/intervals/filter?user=${dummyQuery}`)
          .expect(422);
      });
    });
    describe('given the filtered intervals exists', () => {
      it('should return a 200 status and the filtered intervals', async () => {
        const { body, statusCode } = await testRequest.get(
          `/meditactive/intervals/filter?${
            `user=${testInterval.user}` ||
            `start=${testInterval.starting}` ||
            `end=${testInterval.ending}` ||
            `goal=${testInterval.relatedGoal}`
          }`
        );
        expect(statusCode).toBe(200);
        expect(body[0].user).toEqual(encodeURI(testInterval.user));
        expect(JSON.stringify(body[0].starting)).toEqual(
          JSON.stringify(testInterval.starting)
        );
        expect(JSON.stringify(body[0].ending)).toEqual(
          JSON.stringify(testInterval.ending)
        );
        expect(body[0].relatedGoal).toBe(encodeURI(testInterval.relatedGoal));
      });
    });
  });

  describe('post a new interval', () => {
    describe('if there are missing params', () => {
      it('should return a 422 status and log what is missing', async () => {
        await testRequest.post('/meditactive/intervals/').expect(422);
      });
    });
    describe('if every parameter is correctly entered', () => {
      it('should return a 200 status and POST a new interval', async () => {
        const postedInterval = {
          user: '6509d98d4159aaa41b0fc1f5',
          starting: '2023-10-01',
          ending: '2023-10-10',
          relatedGoal: '6508672e40718890fa24ceab',
        };
        await testRequest
          .post('/meditactive/intervals/')
          .send(postedInterval)
          .expect(200);
      });
    });
  });

  describe('get details of a specific interval', () => {
    describe('if the interval ID is wrong', () => {
      it('should return a 422 unprocessable entity status', async () => {
        await testRequest.get('/meditactive/intervals/wrongID').expect(422);
      });
    });
    describe('if the interval ID is correct', () => {
      it('should return a 200 status and display the interval', async () => {
        const { body, statusCode } = await testRequest.get(
          `/meditactive/intervals/${testId}`
        );
        expect(statusCode).toBe(200);
        expect(body._id).toEqual(encodeURI(testId));
      });
    });
  });

  describe('put an update to an interval', () => {
    it('should return 200 and display the updated interval', async () => {
      const testUpdate = {
        user: '6509d98d4159aaa41b0fc1f5',
        starting: '2023-11-21',
        ending: '2023-11-29',
        relatedGoal: '6508672e40718890fa24ceab',
      };
      await testRequest
        .put(`/meditactive/intervals/${testId}`)
        .send(testUpdate)
        .expect(200);
    });
  });

  describe('delete an interval from the database', () => {
    it('should return 200 and display the deleted interval', async () => {
      await testRequest.delete(`/meditactive/intervals/${testId}`).expect(200);
    });
  });
});
