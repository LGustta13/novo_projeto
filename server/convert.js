import fs from "fs"
import wav from "node-wav"
import ffmpeg from "fluent-ffmpeg"
import ffmpegStatic from "ffmpeg-static"

const filePath = "./tmp/audio.mp4"
const outputPath = filePath.replace(".mp4", ".wav")

export const convert = () =>
  new Promise((resolve, reject) => {
    console.log("Convertendo o vídeo...")

    ffmpeg.setFfmpegPath(ffmpegStatic)
    ffmpeg()
      .input(filePath)
      .audioFrequency(16000)
      .audioChannels(1)
      .format("wav")
      .on("end", () => {
        const file = fs.readFileSync(outputPath) // Lê o arquivo no diretório
        const fileDecoded = wav.decode(file) // Decodifica para wav
        const audioData = fileDecoded.channelData[0] // Acessa o canal de audioChannels(1)
        const floatArray = new Float32Array(audioData) // Transforma o wav em FloatArray, para a IA

        console.log("Vídeo convertido com sucesso")
        resolve(floatArray)
        fs.unlinkSync(outputPath)
      })
      .on("error", (error) => {
        console.log("Erro ao converter o vídeo ", error)
        reject(error)
      })
      .save(outputPath)
  })
