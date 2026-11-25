// Ganti data demo ini dengan album dan foto Anda. Gunakan format YYYY-MM-DD untuk tanggal.
const galleryAlbums = [
  {
    "id": "ruang-hijau",
    "title": "Ruang Hijau",
    "tone": "green",
    "description": "Danau, hutan, dan jalur sunyi di antara pegunungan.",
    "photos": [
      {
        "src": "assets/photos/danau.jpg",
        "title": "Rumah di tepi danau",
        "alt": "Rumah kayu di tepi danau dengan pantulan gunung",
        "description": "Sebuah rumah kayu berdiri di tepi danau yang memantulkan lereng gunung dan awan pagi.",
        "takenDate": "2025-05-10",
        "uploadDate": "2025-05-20"
      },
      {
        "src": "assets/photos/hutan.jpg",
        "title": "Di antara pepohonan",
        "alt": "Pepohonan hijau mengapit aliran air yang tenang",
        "description": "Rimbunnya pepohonan membuat aliran air di tengah hutan terasa semakin tenang.",
        "takenDate": "2025-05-11",
        "uploadDate": "2025-05-20"
      },
      {
        "src": "assets/photos/pegunungan.jpg",
        "title": "Jajaran puncak",
        "alt": "Lembah hijau dan pegunungan di bawah awan putih",
        "description": "Awan bergerak di atas puncak, sementara hutan menutupi lereng di bawahnya.",
        "takenDate": "2025-05-12",
        "uploadDate": "2025-05-20"
      },
      {
        "src": "assets/photos/lembah.jpg",
        "title": "Air berwarna zamrud",
        "alt": "Perahu kecil di tengah danau berwarna zamrud",
        "description": "Sebuah perahu melintas di danau zamrud yang dikelilingi dinding pegunungan.",
        "takenDate": "2025-05-13",
        "uploadDate": "2025-05-20"
      },
      {
        "src": "assets/photos/padang.jpg",
        "title": "Jalan di antara tebing",
        "alt": "Jalan lurus menuju tebing berwarna kemerahan",
        "description": "Jalan kosong membelah lanskap kering dan menghilang di antara tebing.",
        "takenDate": "2025-05-14",
        "uploadDate": "2025-05-20"
      }
    ]
  },
  {
    "id": "kota-bercerita",
    "title": "Kota Bercerita",
    "tone": "blue",
    "description": "Cahaya jalan, sudut bangunan, dan suasana kota yang terus bergerak.",
    "photos": [
      {
        "src": "assets/photos/kota.jpg",
        "title": "Setelah gelap",
        "alt": "Jalan kota malam hari dengan pencahayaan biru dan ungu",
        "description": "Cahaya biru dan ungu menyusuri fasad toko di jalan yang lengang.",
        "takenDate": "2025-06-10",
        "uploadDate": "2025-06-20"
      },
      {
        "src": "assets/photos/gedung.jpg",
        "title": "Menatap ke atas",
        "alt": "Gedung bertingkat dilihat dari bawah",
        "description": "Garis bangunan mengarahkan pandangan ke sepotong langit kelabu.",
        "takenDate": "2025-06-11",
        "uploadDate": "2025-06-20"
      },
      {
        "src": "assets/photos/jalan.jpg",
        "title": "Jalan selepas hujan",
        "alt": "Lampu mobil memantul di jalan di antara gedung tinggi",
        "description": "Lampu kendaraan terpantul di aspal basah di antara barisan gedung.",
        "takenDate": "2025-06-12",
        "uploadDate": "2025-06-20"
      },
      {
        "src": "assets/photos/senja.jpg",
        "title": "Sudut persimpangan",
        "alt": "Bangunan bata merah di persimpangan jalan kota",
        "description": "Fasad bata merah menonjol di antara gedung dan marka jalan di persimpangan.",
        "takenDate": "2025-06-13",
        "uploadDate": "2025-06-20"
      },
      {
        "src": "assets/photos/metro.jpg",
        "title": "Sebelum pertunjukan",
        "alt": "Tirai panggung merah tertutup",
        "description": "Lipatan tirai merah memenuhi panggung yang masih tertutup.",
        "takenDate": "2025-06-14",
        "uploadDate": "2025-06-20"
      }
    ]
  },
  {
    "id": "musim-mekar",
    "title": "Musim Mekar",
    "tone": "red",
    "description": "Kelopak, ranting, dan warna yang berubah bersama musim.",
    "photos": [
      {
        "src": "assets/photos/tulip.jpg",
        "title": "Tulip merah muda",
        "alt": "Sekuntum tulip di depan latar merah muda",
        "description": "Satu tulip berdiri tegak dengan warna yang hampir menyatu dengan latarnya.",
        "takenDate": "2025-08-10",
        "uploadDate": "2025-08-20"
      },
      {
        "src": "assets/photos/bunga.jpg",
        "title": "Ranting berbunga",
        "alt": "Bunga merah muda pada ranting dengan latar langit biru",
        "description": "Bunga merah muda memenuhi ranting yang membentang di bawah langit biru.",
        "takenDate": "2025-08-11",
        "uploadDate": "2025-08-20"
      },
      {
        "src": "assets/photos/kelopak.jpg",
        "title": "Kuning di bawah langit",
        "alt": "Bunga kuning dan jingga dengan latar langit biru",
        "description": "Kelopak kuning dan jingga terlihat dari dekat, dengan langit biru cerah di belakangnya.",
        "takenDate": "2025-08-12",
        "uploadDate": "2025-08-20"
      },
      {
        "src": "assets/photos/vas.jpg",
        "title": "Setangkai bunga",
        "alt": "Setangkai bunga merah muda dengan latar kelabu",
        "description": "Batang yang melengkung menopang satu bunga di tengah ruang kosong.",
        "takenDate": "2025-08-13",
        "uploadDate": "2025-08-20"
      },
      {
        "src": "assets/photos/mekar.jpg",
        "title": "Warna dalam bayang",
        "alt": "Rangkaian bunga aneka warna di depan latar gelap",
        "description": "Bunga merah, jingga, dan ungu muncul dari latar yang gelap.",
        "takenDate": "2025-08-14",
        "uploadDate": "2025-08-20"
      }
    ]
  },
  {
    "id": "tepi-laut",
    "title": "Tepi Laut",
    "tone": "yellow",
    "description": "Pasir, gelombang, dan perubahan cahaya dari pagi hingga senja.",
    "photos": [
      {
        "src": "assets/photos/ombak.jpg",
        "title": "Cahaya pagi",
        "alt": "Ombak kecil menyapu pasir saat matahari terbit",
        "description": "Cahaya matahari yang rendah menyentuh pasir dan buih ombak.",
        "takenDate": "2025-10-10",
        "uploadDate": "2025-10-20"
      },
      {
        "src": "assets/photos/laut.jpg",
        "title": "Buih yang mendekat",
        "alt": "Buih ombak di laut dengan langit berwarna lembut",
        "description": "Gelombang pecah di depan kamera, menyisakan garis buih putih di permukaan laut.",
        "takenDate": "2025-10-11",
        "uploadDate": "2025-10-20"
      },
      {
        "src": "assets/photos/teluk.jpg",
        "title": "Garis cakrawala",
        "alt": "Permukaan laut biru yang tenang di bawah langit cerah",
        "description": "Riak kecil mengisi ruang di bawah cakrawala yang hampir menyatu dengan langit.",
        "takenDate": "2025-10-12",
        "uploadDate": "2025-10-20"
      },
      {
        "src": "assets/photos/pesisir.jpg",
        "title": "Sebelum matahari turun",
        "alt": "Langit keemasan di atas pantai saat senja",
        "description": "Warna keemasan di langit memantul tipis pada air yang menyapu pantai.",
        "takenDate": "2025-10-13",
        "uploadDate": "2025-10-20"
      },
      {
        "src": "assets/photos/pantai.jpg",
        "title": "Teduh di pasir putih",
        "alt": "Pohon palem, payung pantai, dan air laut biru",
        "description": "Bayangan pohon palem jatuh di pasir putih, menghadap air yang jernih.",
        "takenDate": "2025-10-14",
        "uploadDate": "2025-10-20"
      }
    ]
  }
];

