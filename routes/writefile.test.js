const request = require('supertest');
const app = require('../index.js');
test('should pass integration tests', (done) => {
  request(app)
    .post('/writefile')
    .attach('test', 'index.js')
    .expect(200,"copied!")
    .end((err) => {
      if (err) throw done(err);
      done();
    });
});
