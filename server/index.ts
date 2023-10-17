import 'dotenv/config'

import express from 'express'
import cors from 'cors'
import dalleRoutes from './routes/dalle.route'

const app = express()

app.use(cors())
app.use(express.json({ limit: '50mb' }))

app.use('/api/v1/dalle', dalleRoutes)

app.get('/', (_, res) => {
  res.status(200).json({ message: 'Hello from DALL.E' })
})

app.listen(8080, () => {
  console.log('--> Server is running on port http://localhost:8080')
})
