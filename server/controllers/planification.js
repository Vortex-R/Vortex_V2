import PlanificationService from '../service/planification.js'

export const createPlanification = async (req, res) => {
  const planificationService = new PlanificationService()
  const {
    name,
    startDate,
    duration,
    progress,
    userId,
  } = req.body
  const planificationCreated = await planificationService.createPlanification({ name, startDate, duration, progress, userId })
  res.status(201).send(planificationCreated)
}