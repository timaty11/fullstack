import { __dirname } from '../helpers/create-path.js';

const controllerLogin = (req, res) => {
  res.sendFile(__dirname + '/login-form.html');
};

const controllerMain = (req, res) => {
  res.sendFile(__dirname + '/index.html');
};

const controllerRegister = (req, res) => {
  res.sendFile(__dirname + '/register-form.html');
};

const controllerField = (req, res) => {
  res.sendFile(__dirname + '/player-field.html');
};

const controllerNotFound = (req, res) => {
  res.sendFile(__dirname + '/404.html');
};

export {
  controllerLogin,
  controllerMain,
  controllerRegister,
  controllerNotFound,
  controllerField,
};
