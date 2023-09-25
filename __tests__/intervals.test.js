const supertest = require('supertest');
const app = require('../app');

describe('interval', () => {
  describe('get product route', () => {
    describe('given the product does not exist', () => {
      it('should return a 422', async () => {
        const productId = 'fgrth';

        await supertest(app)
          .get(`/meditactive/intervals/${productId}`)
          .expect(422);
      });
    });
  });
});
