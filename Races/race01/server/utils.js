import { pool } from '../server/db.js';
import bcrypt from 'bcrypt';
import express from 'express';
// import shortid from 'shortid';

const setHash = (password) => {
  const salt = bcrypt.genSaltSync(Math.floor(Math.random() * (10 - 1 + 1)) + 1);
  const HASH = bcrypt.hashSync(password, salt);
  return HASH;
};

const isCorrectPass = (pass, hash) => bcrypt.compareSync(pass, hash);

export { setHash, isCorrectPass };
