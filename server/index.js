import cors from "cors"
import express from "express"
import { download } from "./download.js"

const app = express()
app.use(cors())
app.use(express.json())

/** ROTAS **/
app.get("/summary/:id", (request, response) => {
  const { id } = request.params

  download(id)
  response.send("ID do vídeo: " + id)
})

app.listen(3333, () => console.log("Server is running on port 3333"))
