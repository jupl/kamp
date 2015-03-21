/*
 * Define options for the view templating system in the application.
 */
import swig from 'swig';
import {development} from './environment';

export default 'swig';
export const cache = !development;

// Define filters here
// ex: swig.setFilter('...', function() { ... });
