import { describe } from 'mocha';
import supertest from 'supertest';
import { expect } from 'chai';

const request = supertest('https://jsonplaceholder.typicode.com/');

describe('Users', async () => {
  describe('GET', async () => {
    it('Getting Users form JSONPlaceholder', async () => {
      const res = await request.get('users');

      expect(res.body).to.be.an('array');
    });

    it('Getting User form Users', async () => {
      const res = await request.get('users/1');

      expect(res.body).to.not.equal(null);
      expect(res.body.id).to.be.equal(1);
      expect(res.body.address).to.be.an('object');
    });
  });
});
