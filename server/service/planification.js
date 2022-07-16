import planification from '../models/planification.js'

export default class PlanificationService {

  async createPlanification({
    title,
    status,
    summary,
    type,
    priority,
    tags,
    estimate,
    userId,
  }) {
    const newPlanification = {
      title,
      status,
      summary,
      type,
      priority,
      tags,
      estimate,
      userId,
    }
    return planification.create(newPlanification)
  }
}
