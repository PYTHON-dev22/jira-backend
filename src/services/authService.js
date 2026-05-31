// Auth service — business logic for register and login
// This is where you hash passwords, generate JWT tokens, etc.

const register = async (data) => {
  // 1. Check if user already exists
  // 2. Hash the password
  // 3. Save user to DB
  // 4. Return the new user (without password)
};

const login = async (data) => {
  // 1. Find user by email
  // 2. Compare password with hashed password
  // 3. Generate and return a JWT token
};

module.exports = { register, login };
