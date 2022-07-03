// const { expect, assert } = require('chai');
// const sinon = require('sinon');
// const taskServices = require('../database/services/task.services');
// const { Task, User } = require('../database/models');
// const jwt = require('jsonwebtoken');

// // describe('taskService - Calls the addTask function', () => {
// //   describe('When all fields are valid', () => {
// //     const jwtReturn = {
// //       data: {
// //         email: 'email@email.com', password: 'password123'
// //       }
// //     };

// //     const userReturn = {
// //       dataValues: { id: 1 } 
// //     };

// //     const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoic2FybC4yMDAxQGhvdG1haWwuY29tIiwicGFzc3dvcmQiOiJhYWFhYWFhYSJ9LCJpYXQiOjE2NTY3OTQ5Mzh9.-xKrxAo7AJCyu41nTb8OqyKw5sPQ8DvTpvDQtPspoFA';

// //     beforeEach(() => {
// //       sinon.stub(jwt, 'decode').resolves(jwtReturn);
// //       sinon.stub(User, 'findOne').resolves(userReturn);
// //       sinon.stub(Task, 'create').resolves({});
// //     });

// //     afterEach(() => {
// //       jwt.decode.restore();
// //       User.findOne.restore();
// //       Task.create.restore();
// //     });

// //     it('It should call the model and the "create" method', async () => {
// //       const taskAdded = await taskServices.addTask('content', token);
// //       console.log(jwt.decode(token));

// //       expect(taskAdded).to.be.an('object');
// //     });
// //   });
// // });

// describe('taskService - Calls the editTask function', () => {
//   describe('When all fields are valid', () => {

//     beforeEach(() => {
//       sinon.stub(Task, 'update').resolves({});
//     });

//     afterEach(() => {
//       Task.update.restore();
//     });

//     it('It should call the model with the "update" method', async () => {
//       const a = await taskServices.updateTask(1, 'status', 'pending');

//       expect(a.calledOnce()).to.equal(true);
//     });
//   });
// });

