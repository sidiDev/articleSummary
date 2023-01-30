import { Configuration, OpenAIApi } from "openai";

const apiKey = import.meta.env.VITE_OPENAI_API_KEY

const configuration = new Configuration({
  apiKey
});

// Note: This way is not secure, move this functionality to a server,
// and use the API to send a request to the server to get the response includes the summary
// Or you can use serverless functions to do that.
export default async function generateSummary(prompt: string) {
  const openai = new OpenAIApi(configuration);
  
  const res = await openai.createCompletion({
    model: "text-davinci-003",
    prompt,
    temperature: 0.7,
    max_tokens: 3065,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0
  });

  return res.data.choices[0].text
}