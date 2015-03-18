/*
 * Define options for the view templating system in the application.
 */
import {development} from './environment';

export default 'swig';
export const cache = !development;
