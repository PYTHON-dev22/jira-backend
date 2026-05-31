// User controller — handles user profile requests
const userService = require("../services/userService");

const getUsers = async (req, res, next) => {
  try {
    const users = await userService.getAll();
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

const getUserById = async (req, res, next) => {
  try {
    const user = await userService.getById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

const updateUser = async (req, res, next) => {
  try {
    const user = await userService.update(req.params.id, req.body);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

module.exports = { getUsers, getUserById, updateUser };
