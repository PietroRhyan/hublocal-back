import cors from 'cors'
import express, { Request, Response, NextFunction} from 'express'
import { AppDataSource } from 'infra'

import { AppError } from './errors/AppError'

const app = express()

AppDataSource.initialize().then(() => {
  app.use(express.json())

  app.use(cors())

  app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return res.status(err.statusCode).json({
        message: err.message
      })
    }

    return res.status(500).json({
      status: 'error',
      message: `Internal Server Error - ${err.message}`
    })
  })
})

export { app }