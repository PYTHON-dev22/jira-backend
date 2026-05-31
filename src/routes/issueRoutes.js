// Issue routes — create, read, update, delete issues within a project
const express = require("express");
const router = express.Router();
const {
  createIssue,
  getIssues,
  getIssueById,
  updateIssue,
  deleteIssue,
} = require("../controllers/issueController");
const { protect } = require("../middleware/authMiddleware");

router.post("/", protect, createIssue);
router.get("/", protect, getIssues);
router.get("/:id", protect, getIssueById);
router.put("/:id", protect, updateIssue);
router.delete("/:id", protect, deleteIssue);

module.exports = router;
