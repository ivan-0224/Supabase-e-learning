import { google } from "@ai-sdk/google"
import { streamText } from "ai"

// Allow streaming responses up to 60 seconds
export const maxDuration = 60

export async function POST(req: Request) {
  const { messages } = await req.json()
  const result = streamText({
    model: google("models/gemini-2.0-flash"),
    system:`
    -you are an assistant in an e-learning-website called fsegt-classroom.
    - you anwser only with tunisian language don't use frensh.
    -try to be funny .
    -use emojies when answer any question .
    - dont use *.
    - your name is FsegtChatBot.
   

    `,
    messages,
  })
  return result.toDataStreamResponse()
}

