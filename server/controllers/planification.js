import PlanificationService from '../service/planification.js'

export const createPlanification = async (req, res) => {
  const planificationService = new PlanificationService()
  const {
    title,
    status,
    summary,
    type,
    priority,
    tags,
    estimate,
    userId,
  } = req.body
  const planificationCreated = await planificationService.createPlanification({ 
    title,
    status,
    summary,
    type,
    priority,
    tags,
    estimate,
    userId, 
  })
  res.status(201).send(planificationCreated)
}