import express from 'express';
import {
  controllerLogin,
  controllerMain,
  controllerRegister,
  controllerNotFound,
  controllerField,
} from '../controllers/get-controller.js';
const router = express.Router();

router.get('/', controllerMain);
router.get('/login', controllerLogin);
router.get('/register', controllerRegister);
// router.get('/rooms', controllerRooms);
router.get('/fields', controllerField);
router.get('*', controllerNotFound);

export default router;
