const request = require('supertest');
const app = require('../index.js');

test('should pass tests when both are numbers', (done) => {
  request(app)
    .get('/product/1/2')
    .expect(200, '2')
    .end((err) => {
      if (err) throw done(err);
      done();
    });
});
test('should pass tests when either of them is string ', (done) => {
  request(app)
    .get('/product/1/a')
    .expect(200, 'NaN')
    .end((err) => {
      if (err) throw done(err);
      done();
    });
});
