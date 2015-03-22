/*
 * Start up application.
 */
import app from './app';
import {port} from './config/environment';
const instance = app.listen(port);

console.log('Application started on port', port);

export default instance;
