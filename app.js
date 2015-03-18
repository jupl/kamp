/*
 * Define server application and add middleware pieces.
 */
import koa from 'koa';
import bodyParsers from 'koa-body-parsers';
import compress from 'koa-compress';
import qs from 'koa-qs';
import assets from 'koa-static';
import views from 'koa-views';
import {development} from './config/environment';
import * as paths from './config/paths';
import * as viewsConfig from './config/views';
import router from './routes';
const app = koa();

app.poweredBy = false;
if(development) {
  const logger = require('koa-logger');
  app.use(logger());
}
app.use(compress());
app.use(assets(paths.assets));
bodyParsers(app);
qs(app);
app.use(views(paths.views, viewsConfig))
app.use(router.routes());
app.use(router.allowedMethods());

export default app;
