export default async function handler(req, res) {
  if (req.method !== "GET") return res.status(405).json({status:false,message:"Method not allowed"});
  const apiKey = process.env.JEREXD_API_KEY;
  if (!apiKey) return res.status(500).json({status:false,message:"Tambahkan JEREXD_API_KEY di Environment Variables Vercel."});
  try {
    const upstream = await fetch(`https://api.jerexd.my.id/api/random/animequotes?apikey=${encodeURIComponent(apiKey)}`, {headers:{Accept:"application/json"}});
    const data = await upstream.json().catch(() => null);
    if (!upstream.ok || !data || data.status !== true || !data.result) {
      return res.status(upstream.ok ? 502 : upstream.status).json({status:false,message:data?.message || "API anime quotes sedang bermasalah."});
    }
    return res.status(200).json(data);
  } catch {
    return res.status(502).json({status:false,message:"Tidak bisa terhubung ke layanan quotes. Coba lagi nanti."});
  }
}