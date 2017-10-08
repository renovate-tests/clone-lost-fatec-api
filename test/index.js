process.env.NODE_ENV = 'test';
const request = require('supertest');
const app = require('../app');
global.supertest = request(app);

console.log("--= Iniciando Testes =--")