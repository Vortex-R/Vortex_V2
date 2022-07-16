import planification from '../models/planification.js'

export default class PlanificationService {

  async createPlanification({
    name,
    startDate,
    duration,
    progress,
    userId,
  }) {
    const newPlanification = {
      name,
      startDate,
      duration,
      progress,
      userId,
    }
    return planification.create(newPlanification)
  }
}
