const request = require('supertest');
const app = require('./index.js');
test('should pass integration tests', (done) => {
  request(app)
    .get('/')
    .expect(200, 'hello world')
    .end((err) => {
      if (err) throw done(err);
      done();
    });
});
