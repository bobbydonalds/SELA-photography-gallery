# Sela · Template galeri foto

Buka `index.html` langsung di browser. Tiga halaman HTML, foto, font, dan aset runtime tersedia secara lokal.

| Halaman | Isi |
| --- | --- |
| `index.html` | Beranda portofolio dengan foto utama, tiga album pilihan, profil Team, dan Contact Us. |
| `galeri.html` | Daftar album dengan pratinjau hingga empat foto pertama per album. |
| `album.html?album=ruang-hijau` | Seluruh foto dalam album pilihan. Klik foto untuk menampilkan nama album, deskripsi, dan tanggal di modal. |

## Mengganti isi template

1. Ganti nama **Sela** dan teks portofolio di HTML. Di bagian `hero-photo` pada `index.html`, ubah sumber foto utama, teks alternatif, dan keterangannya.
2. Simpan foto di `assets/photos/`, lalu ubah `assets/data.js`. Beri setiap album `id` yang unik dan stabil. Pilihan `tone` adalah `yellow`, `blue`, `red`, dan `green`.
3. Isi setiap foto dengan `src`, `title`, `alt`, dan `description`. Cantumkan `takenDate`, `uploadDate`, atau keduanya dalam format `YYYY-MM-DD`. Tanggal pada koleksi demo hanya contoh.
4. Urutan foto di data menentukan pratinjau album. Album yang berisi empat foto atau lebih menampilkan tepat empat pratinjau. Tiga album teratas yang memiliki foto ditampilkan di portofolio.
5. Di bagian `team` pada `index.html`, ganti foto, nama, peran, dan profil fotografer contoh. Simpan foto profil di `assets/photos/team/` dan sesuaikan atribut `src`.
6. Di bagian `contact` pada `index.html`, ganti alamat email contoh di teks dan tautan `mailto:`. Ganti atribut `href` tombol Instagram, WhatsApp, dan Google Drive dengan tautan profil, tautan chat, dan tautan folder berbagi Anda. Tautan bawaan membuka halaman utama masing-masing layanan.

## Mengubah CSS

Edit `assets/source.css`. Gunakan Node.js dan npm untuk membangun ulang CSS Tailwind dan menyalin aset framework serta font.

```sh
npm ci
npm run build
```

Untuk mengunggah ke hosting statis, salin ketiga file HTML beserta folder `assets/`.

Foto contoh berasal dari [Unsplash](https://unsplash.com/). Daftar sumber setiap foto tersedia di [assets/photos/SUMBER.md](assets/photos/SUMBER.md).

Ikon Instagram, WhatsApp, dan Google Drive berasal dari [Simple Icons](https://github.com/simple-icons/simple-icons/tree/14.0.0/icons).

