// Project service — business logic for project operations

const create = async (data, ownerId) => {
  // Create a new project in DB
};

const getAll = async (userId) => {
  // Fetch all projects the user belongs to
};

const getById = async (id) => {
  // Find project by ID in DB
};

const update = async (id, data) => {
  // Update project fields in DB
};

const remove = async (id) => {
  // Delete project from DB
};

module.exports = { create, getAll, getById, update, remove };
