import { ok } from '../utils/apiResponse.js';
import { userService } from '../services/user.service.js';
import { goalService } from '../services/goal.service.js';

export const userController = {
  async me(req, res) {
    const data = await userService.getMe(req.user.id);
    return ok(res, data, 'Profile fetched');
  },

  async updateMe(req, res) {
    const data = await userService.updateMe(req.user.id, req.body);
    return ok(res, data, 'Profile updated');
  },

  async getGoals(req, res) {
    const data = await goalService.getGoals(req.user.id);
    return ok(res, data, 'Goals fetched');
  },

  async createGoal(req, res) {
    const data = await goalService.createGoal(req.user.id, req.body);
    return ok(res, data, 'Goal created', 201);
  }
};