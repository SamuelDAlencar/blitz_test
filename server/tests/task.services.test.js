const chai = require('chai');
const { afterEach, beforeEach } = require('mocha');
const sinon = require('sinon');
const chaiHttp = require('chai-http');
const taskServices = require('../src/database/services/task.services');
const { User, Task } = require('../src/database/models');
const jwt = require('jsonwebtoken');

chai.use(chaiHttp);

const { expect } = chai;

describe('taskServices - Calls the addTask function', () => {
  describe('If the task addition successfully occurs:', () => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoic2FybC4yMDAxQGhvdG1haWwuY29tIiwicGFzc3dvcmQiOiIxMjM0NTY3OCJ9LCJpYXQiOjE2NTcwMDAwNDR9.uB8ds1x8S2Fk3bdhgJvp0hx9yFBTytkXvlElgKkwesQ';

    beforeEach(() => {
      sinon.stub(jwt, 'decode')
        .resolves({ data: { email: 'email@email.com', password: 'password' } });
      sinon.stub(User, 'findOne').resolves({ dataValues: { id: 1 } });
      sinon.stub(Task, 'create').resolves({ dataValues: { id: 1, status: 'pending' } });
    });

    afterEach(() => {
      jwt.decode.restore();
      User.findOne.restore();
      Task.create.restore();
    });

    it('It should return the correct object', async () => {
      const data = await taskServices.addTask('study', token);

      expect(data).to.be.an('object');
    });
  });
});

