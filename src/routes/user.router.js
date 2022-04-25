const express = require('express');
const { httpGetAllUsers } = require('../controllers/user.controller');

const userRouter = express.Router();

userRouter.route('/').get(httpGetAllUsers);

// companyRouter
//   .route('/:id')
//   .get(httpGetCompanyDetails)
//   .put(httpUpdateCompanyDetails);

module.exports = userRouter;
