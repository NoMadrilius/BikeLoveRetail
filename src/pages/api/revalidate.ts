import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Only POST allowed' })


  const secret = (req.query.secret as string)
  if (secret !== "111111") return res.status(401).json({ error: 'Invalid secret' })


  const body = req.body
  if (!body || !Array.isArray(body.urls)) return res.status(400).json({ error: 'Request body must be JSON: { urls: string[] }' })


  const rawUrls: string[] = body.urls
  const urls = Array.from(new Set(rawUrls.map((u) => (typeof u === 'string' ? u.trim() : '')).filter(Boolean)))


  if (urls.length === 0) return res.status(400).json({ error: 'No valid urls provided' })


  try {
    for (const path of urls) {
      try {
        // Just mark for revalidation (Next.js will regenerate on next request)
        await (res as any).revalidate(path)
      } catch (err) {
        console.warn(`Failed to mark for revalidation: ${path}`, err)
      }
    }
    return res.status(200).json({ ok: true, message: `Marked ${urls.length} pages for revalidation`, urls })
  } catch (err: any) {
    return res.status(500).json({ error: err?.message || String(err) })
  }
}