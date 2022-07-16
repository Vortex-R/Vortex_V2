import { Request, Response } from 'express'
import PlanificationService from '../service/planification'

export const createPlanification = async (req: Request, res: Response) => {
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