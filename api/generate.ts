import type { VercelRequest, VercelResponse } from '@vercel/node';

import { Configuration, OpenAIApi } from "openai";

const apiKey = process.env.VITE_OPENAI_API_KEY

const configuration = new Configuration({
  apiKey
});

export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
) {

const { promptChat } = req.body.data


    const openai = new OpenAIApi(configuration);
  
  const chatRes = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: promptChat,
    temperature: 0.7,
    max_tokens: 3065,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0
  });

  res.json({summary: chatRes.data.choices[0].text})
}