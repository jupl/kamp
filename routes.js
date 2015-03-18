/*
 * Define routes for the application.
 */
import * as home from './controllers/home';
import router from './router';

router.get('/', home.index);

export default router;
