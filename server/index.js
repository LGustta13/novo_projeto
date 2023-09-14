import cors from "cors"
import express from "express"

import { convert } from "./convert.js"
import { download } from "./download.js"
import { transcribe } from "./transcribe.js"
import { summarize } from "./summarize.js"

const port = 3333
const app = express()
const corsOptions = {
  origin: [
    "https://lgustta13.github.io/shorts-summary/",
    "https://lgustta13.github.io/",
  ],
  credentials: true,
  optionSuccessStatus: 200,
}
app.use(cors(corsOptions))
app.use(express.json()) //Pois vai enviar conteúdos no formato JSON no body params

/** ROTAS **/
app.get("/summary/:id", async (request, response) => {
  try {
    const { id } = request.params

    await download(id)
    const audioConverted = await convert()
    const result = await transcribe(audioConverted)

    return response.json({ result })
  } catch (error) {
    console.log(error)
    return response.json({ error })
  }
})

app.post("/summary", async (request, response) => {
  try {
    const { text } = request.body
    const result = await summarize(text)

    return response.json({ result })
  } catch (error) {
    console.log(error)
    return response.json({ error })
  }
})

app.listen(port, () => console.log(`Server is running on port ${port}`))
