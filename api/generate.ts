import generateSummary from '@/lib/generateSummary';
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(
  req: VercelRequest,
  res: VercelResponse,
) {

const { promptChat } = req.body.data
  generateSummary(promptChat).then(
    (summary) => {
      res.json({summary})
    }
  );
}