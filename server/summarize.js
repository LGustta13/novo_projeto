import { pipeline } from "@xenova/transformers"

export async function summarize(text) {
  // return "asdasdaw"

  try {
    console.log("Realizando o resumo...")

    const generator = await pipeline(
      "summarization",
      "Xenova/distilbart-cnn-12-6"
    )
    const output = await generator(text)

    console.log("Resumo concluído")
    return output[0].summary_text
  } catch (error) {
    throw new Error(error)
  }
}
