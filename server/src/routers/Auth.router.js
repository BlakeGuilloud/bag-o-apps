import express             from 'express';
import * as authController from '../controllers/Auth.controller';
import passport            from '../middleware/passport';

const router = express.Router();

router.post('/login', passport.authenticate('local'), authController.login);
router.delete('/logout', authController.logout);
router.get('/currentUser', authController.getCurrentUser);

export default router;
