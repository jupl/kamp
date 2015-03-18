import 'should';
import co from 'co';
import request from 'supertest-as-promised';
import app from '..';

it('GET /', co.wrap(function*() {
  const {status, type} = yield request(app).get('/');
  status.should.equal(200);
  type.should.equal('text/html');
}));
