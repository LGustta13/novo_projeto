import ytdl from "ytdl-core"
import fs from "fs"

export function download(videoId) {
  const videoURL = "https://www.youtube.com/shorts/" + videoId
  console.log("Download Iniciado: " + videoId)

  ytdl(videoURL, { quality: "lowestaudio", filter: "audioonly" })
    .on("info", (info) => {
      const seconds = info.formats[0].approxDurationMs / 1000

      if (seconds > 60) {
        throw new Error("Duração maior que 60 segundos.")
      }
    })
    .on("end", () => {
      console.log("Download Finalizado")
    })
    .on("error", (error) => {
      console.log("Não foi possível fazer o download: Erro ", error)
    })
    .pipe(fs.createWriteStream("./tmp/audio.mp4"))
}
