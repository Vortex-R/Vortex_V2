import { createPlanification } from "../controllers/planification"
import express from 'express'

const router = express.Router()

router.post('/', createPlanification)


export { router as planificationRouter }
