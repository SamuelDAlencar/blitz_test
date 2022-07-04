const userServices = require('../services/user.services');

module.exports = {
  signUp: async (req, res) => {
    const { username, email, password } = req.body;
  
    const token = await userServices.signUp(username, email, password);
  
    return res.status(201).send(token);
  },

  logIn: async (req, res) => {
    const { email, password } = req.body;

    const token = await userServices.logIn(email, password);

    return res.status(200).json(token);
  },

  getByEmail: async (req, res) => {
    const { email } = req.body;

    const user = await userServices.getByEmail(email);

    return res.status(200).json(user);
  }
};