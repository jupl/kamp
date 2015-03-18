/*
 * Define options related to the application environment.
 */
const environment = process.env.NODE_ENV || 'development';

export default environment;
export const development = environment === 'development';
export const production = environment === 'production';
export const staging = environment === 'staging';
export const port = parseInt(process.env.PORT, 10) || 3000;
