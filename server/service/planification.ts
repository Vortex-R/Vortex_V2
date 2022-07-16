import planification from '../models/planification'

export default class PlanificationService {

  async createPlanification({
    name,
    startDate,
    duration,
    progress,
    userId,
  }: {
    name: String
    startDate: Date
    duration: string
    progress: string
    userId: string
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
