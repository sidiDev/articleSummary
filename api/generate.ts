import type { VercelRequest, VercelResponse } from '@vercel/node';

import { Configuration, OpenAIApi } from "openai";

const apiKey = import.meta.env.VITE_OPENAI_API_KEY



const configuration = new Configuration({
  apiKey
});

export default function handler(
  req: VercelRequest,
  res: VercelResponse,
) {

  // const { promptChat } = req.body.data

  // const openai = new OpenAIApi(configuration);
  // openai.createCompletion({
  //   model: "text-davinci-003",
  //   prompt: promptChat,
  //   temperature: 0.7,
  //   max_tokens: 3065,
  //   top_p: 1,
  //   frequency_penalty: 0,
  //   presence_penalty: 0
  // }).then(chatRes => {
    res.status(200).json({summary: "Hello it's works"})
  // })

}