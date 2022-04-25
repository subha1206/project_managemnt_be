const prisma = require('../services/prisma');

const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

const httpGetAllUsers = catchAsync(async (req, res, next) => {
  const users = await prisma.user.findFirst({
    where: {
      id: 'dsds',
    },
  });
  res.status(200).json({
    status: 'success',
    data: users,
  });
});

module.exports = {
  httpGetAllUsers,
};
