import OpenAI from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';

// Create an OpenAI API client
const openai = new OpenAI({
  apiKey:
    process.env.OPENAI_API_KEY ||
    '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',
});

// IMPORTANT! Set the runtime to edge
export const runtime = 'edge';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function POST(req: Request, res: Response) {
  // Extract the `prompt` from the body of the request
  const { messages } = await req.json();
  console.log('messages:', messages);

  // Ask OpenAI for a streaming chat completion given the prompt
  const response = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      {
        role: 'system',
        content:
          'You are an AI-driven advisor specialized in evaluating startup ideas. Your task is to analyze and predict the success rate of a' +
          'startup based on the information provided by the user. The user will enter details about their startup idea, the target audience' +
          '(including demographics, interests, etc.), and the location (city, region, or country) where they plan to launch. Use this' +
          'information to generate a detailed analysis that includes:' +
          '1. Market Fit: Assess how well the startup idea aligns with the market demand in the specified location in the scale from 1% to 100%' +
          '2. Audience Compatibility: Evaluate the compatibility of the target audience with the startup’s product or service.' +
          '3. Competitive Landscape: Identify key competitors in the area and analyze the level of market saturation.' +
          '4. Success Prediction: Provide a success score that estimates the likelihood of the startup`s success in the given market.' +
          '5. Actionable Recommendations: Offer strategic suggestions to improve the startup’s chances of success, such as adjustments to the business' +
          'model, target market, or location.' +
          'Respond with a comprehensive analysis that is clear, data-driven, and easy for the user to understand, highlighting key insights and recommendations.',
      },
      ...messages,
    ],
    stream: true,
  });

  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response);
  // Respond with the stream
  return new StreamingTextResponse(stream);
}
