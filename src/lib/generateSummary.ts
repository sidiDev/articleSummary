import { Configuration, OpenAIApi } from "openai";

const apiKey = import.meta.env.OPENAI_API_KEY

const configuration = new Configuration({
  apiKey
});

export default async function generateSummary(prompt: string) {
  const openai = new OpenAIApi(configuration);
  
  const res = await openai.createCompletion({
    model: "text-davinci-003",
    prompt,
    temperature: 0.7,
    max_tokens: 3065,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 1,
  });

  return res.data.choices[0].text
}