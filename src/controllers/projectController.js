// Project controller — handles project CRUD requests
const projectService = require("../services/projectService");

const createProject = async (req, res, next) => {
  try {
    const project = await projectService.create(req.body, req.user.id);
    res.status(201).json(project);
  } catch (error) {
    next(error);
  }
};

const getProjects = async (req, res, next) => {
  try {
    const projects = await projectService.getAll(req.user.id);
    res.status(200).json(projects);
  } catch (error) {
    next(error);
  }
};

const getProjectById = async (req, res, next) => {
  try {
    const project = await projectService.getById(req.params.id);
    res.status(200).json(project);
  } catch (error) {
    next(error);
  }
};

const updateProject = async (req, res, next) => {
  try {
    const project = await projectService.update(req.params.id, req.body);
    res.status(200).json(project);
  } catch (error) {
    next(error);
  }
};

const deleteProject = async (req, res, next) => {
  try {
    await projectService.remove(req.params.id);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

module.exports = { createProject, getProjects, getProjectById, updateProject, deleteProject };
