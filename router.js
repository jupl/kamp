/*
 * Set up application router middleware.
 */
import newRouter from 'koa-router';
import {production} from './config/environment';
const router = newRouter();
const types = {html, json};

router.use(negotiator);

export default router;

function* negotiator(next) {
  try {
    yield next;
    // TODO Better check for if view exists
    if(!this.view) {
      this.body = {};
      this.status = 404;
    }
  }
  catch({stack}) {
    this.body = production ? {} : {stack};
    this.status = 500;
  }
  const type = this.accepts(...Object.keys(types));
  const handler = types[type] || unsupported;
  yield handler.call(this);
}

function route(...args) {
  return router.url(...args);
}

function unsupported() {
  this.status = 406;
  this.body = '"Unsupported content type"';
  return Promise.resolve();
}

function* html() {
  const options = Object.assign({route}, this.body);
  let {status, view} = this;
  if([404, 500].includes(status)) {
    view = status.toString();
  }
  yield this.render(view, options);
}

function json() {
  switch(this.status) {
  case 404:
    this.body.error = 'URL does not exist';
    break;
  case 500:
    this.body.error = 'Internal server error';
    break;
  }
  return Promise.resolve();
}
