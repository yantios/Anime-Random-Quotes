# Anime Random Quotes — Made by Jelan

## Deploy ke Vercel
1. Upload seluruh isi folder ini ke GitHub.
2. Import repository di Vercel.
3. Framework Preset: Other.
4. Build Command: kosongkan.
5. Output Directory: `public`.
6. Tambahkan Environment Variable:
   - Key: `JEREXD_API_KEY`
   - Value: API key BARU dari penyedia API.
7. Deploy.

API key disimpan di server, bukan di browser.

## Lokal
Gunakan Node.js 18+ dan Vercel CLI:
```bash
npm install -g vercel
```
Buat `.env.local` berdasarkan `.env.example`, isi API key baru, lalu:
```bash
vercel dev
```
