// Issue service — business logic for issue operations

const create = async (data, reporterId) => {
  // Create a new issue in DB
};

const getAll = async (filters) => {
  // Fetch issues with optional filters (projectId, status, assignee, etc.)
};

const getById = async (id) => {
  // Find issue by ID in DB
};

const update = async (id, data) => {
  // Update issue fields in DB (status, priority, assignee, etc.)
};

const remove = async (id) => {
  // Delete issue from DB
};

module.exports = { create, getAll, getById, update, remove };
