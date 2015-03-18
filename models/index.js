/*
 * Set up DB connection and expose for declaring models.
 */
import newThinky from 'thinky';
import * as config from '../config/database';
const thinky = newThinky(config);

export default thinky;
export const model = (...args) => thinky.createModel(...args);
