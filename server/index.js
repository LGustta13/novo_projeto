import cors from "cors"
import express from "express"
import { download } from "./download.js"
import { transcribe } from "./transcribe.js"
import { summarize } from "./summarize.js"

const port = 3333
const app = express()
app.use(cors())
app.use(express.json()) //Pois vai receber conteúdos no formato JSON, body params

/** ROTAS **/
app.get("/summary/:id", async (request, response) => {
  const { id } = request.params
  await download(id)
  const result = await transcribe()
  response.json({ result })
})

app.post("/summary", async (request, response) => {
  const { text } = request.body
  const result = await summarize()
  response.json({ result })
})

app.listen(port, () => console.log(`Server is running on port ${port}`))
