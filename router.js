/*
 * Set up application router middleware.
 */
import newRouter from 'koa-router';
const router = newRouter();
const types = {html, json: noop};

router.use(negotiator);

export default router;

function* html() {
  if(this.view) {
    const options = Object.assign({route}, this.body);
    yield this.render(this.view, options);
  }
}

function* negotiator(next) {
  yield next;
  if(this.body) {
    const type = this.accepts(...Object.keys(types));
    const handler = types[type] || unsupported;
    yield handler.call(this);
  }
}

function noop() {}

function route(...args) {
  return router.url(...args);
}

function unsupported() {
  this.throw(406);
}
