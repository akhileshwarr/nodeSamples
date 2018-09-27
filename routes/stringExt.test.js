const request = require('supertest');
const app = require('../index.js');

test('should pass tests with possible outcome', (done) => {
  request(app)
    .get('/stringreg?name=asdfdfa')
    .expect(200, 'found s')
    .end((err) => {
      if (err) throw done(err);
      done();
    });
});
test('should pass tests with none ', (done) => {
  request(app)
    .get('/stringreg?name=adfdfa')
    .expect(200, 'found none')
    .end((err) => {
      if (err) throw done(err);
      done();
    });
});
