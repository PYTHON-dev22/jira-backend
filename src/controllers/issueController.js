// Issue controller — handles issue CRUD requests
const issueService = require("../services/issueService");

const createIssue = async (req, res, next) => {
  try {
    const issue = await issueService.create(req.body, req.user.id);
    res.status(201).json(issue);
  } catch (error) {
    next(error);
  }
};

const getIssues = async (req, res, next) => {
  try {
    const issues = await issueService.getAll(req.query);
    res.status(200).json(issues);
  } catch (error) {
    next(error);
  }
};

const getIssueById = async (req, res, next) => {
  try {
    const issue = await issueService.getById(req.params.id);
    res.status(200).json(issue);
  } catch (error) {
    next(error);
  }
};

const updateIssue = async (req, res, next) => {
  try {
    const issue = await issueService.update(req.params.id, req.body);
    res.status(200).json(issue);
  } catch (error) {
    next(error);
  }
};

const deleteIssue = async (req, res, next) => {
  try {
    await issueService.remove(req.params.id);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

module.exports = { createIssue, getIssues, getIssueById, updateIssue, deleteIssue };
