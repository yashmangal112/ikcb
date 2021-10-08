import type { NextApiRequest, NextApiResponse } from 'next';

import mail, { ResponseError } from '@sendgrid/mail';

mail.setApiKey(process.env.SENDGRID_API_KEY!);

const count = (str: string): number => ((str || '').match(/\p{L}/gu) ?? []).length;

const handler = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const body = req.body as { name: string; email: string; message: string };

  if (
    count(body.name) < 1 ||
    count(body.email) < 3 ||
    count(body.message) < 75 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email.trim())
  ) {
    res.status(400).end();
    return;
  }

  const msg = {
    to: 'contact@ikcb.org',
    from: 'noreply@ikcb.org',
    subject: `Message from ${body.name.trim()} <${body.email.trim()}>`.substring(0, 75),
    text: body.message,
  };

  try {
    await mail.send(msg);
    res.status(200).end();
    return;
    //
  } catch (error: unknown) {
    //
    console.error(error);

    if (error instanceof ResponseError) {
      console.error(error.response.body);
      res.status(503).end();
    } else res.status(500).end();
  }
};

export default handler;
