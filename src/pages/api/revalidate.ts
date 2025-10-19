import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.query.secret !== "1111") {
    return res.status(401).json({ message: 'Invalid token' })
  }

  const path = req.query.path as string
  if (!path) {
    return res.status(400).json({ message: 'Path is required' })
  }

  try {
    await res.revalidate(path)
    return res.json({ revalidated: true, path })
  } catch (err: any) {
    return res.status(500).json({ message: err.message })
  }
}