import { createPlanification } from "../controllers/planification.js"
import express from 'express'

const router = express.Router()

router.post('/', createPlanification)


export { router as planificationRouter }
