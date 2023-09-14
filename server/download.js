import ytdl from "ytdl-core"
import fs from "fs"

// TENTAR CRIAR COMO FUNÇÃO A PROMISE
export const download = (videoId) =>
  new Promise((resolve, reject) => {
    //TALVEZ COMPENSA RECEBER DIRETO O ENDEREÇO DO YOUTUBE AQUI, NÃO SEPARAR DO ID
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
        resolve()
      })
      .on("error", (error) => {
        console.log("Não foi possível fazer o download: Erro ", error)
        reject(error)
      })
      .pipe(fs.createWriteStream("./tmp/audio.mp4"))
  })
