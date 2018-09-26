const request = require('supertest');
const app = require('../index.js');
test('should pass integration tests', (done) => {
  request(app)
    .get('/readfile?file=index.js')
    .expect(200)
    .end((err) => {
      if (err) throw done(err);
      done();
    });
});
test('should pass integration tests', (done) => {
  request(app)
    .get('/readfile?file=index1.js')
    .expect(404,"No route registered for /readfile")
    .end((err) => {
      if (err) throw done(err);
      done();
    });
});
