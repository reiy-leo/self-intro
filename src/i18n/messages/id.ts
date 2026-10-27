import type { Messages } from "./zh";

const messages: Messages = {
  "nav": {
    "home": "Beranda",
    "projects": "Proyek",
    "about": "Tentang",
    "invites": "Referal"
  },
  "language": "Bahasa",
  "home": {
    "greeting": "Halo, saya Rei.",
    "intro": "Siang hari saya berputar di antara alat kesehatan dan sekuensing gen: mengurus registrasi, mengawasi kualitas, mengejar proyek, menulis kode, dan memburu mutasi di data sekuensing. Selepas kerja, saya meracik alat-alat kecil yang praktis untuk diri sendiri."
  },
  "projects": {
    "title": "Proyek",
    "lead": "Hal-hal yang sedang saya buat dan saya pakai setiap hari.",
    "site": "Situs",
    "source": "Kode",
    "names": {
      "ydiyr": "Datamu, Tanggung Jawabmu",
      "mimatory": "Mimatory",
      "reicky": "reicky",
      "mindough": "Mindough",
      "sideDock": "Side Dock",
      "melodyKeeeys": "Melody Keeeys",
      "vectorWallpapers": "Vector Wallpapers"
    },
    "summaries": {
      "navill": "Ekstensi browser yang mengimpor bookmark Anda sekali, lalu menyusunnya jadi tab baru berisi ruang kerja dan laci. Sinkron lewat Google Drive milik Anda sendiri.",
      "mimatory": "Pengelola kata sandi terenkripsi untuk Mac yang mengisi kata sandi di browser dan, jika Anda mau, sinkron lewat Google Drive atau WebDAV milik Anda sendiri.",
      "reicky": "Catatan tempel desktop lintas platform, seringan Stickies di macOS. Catatan hanya diarsipkan, tidak pernah dihapus.",
      "ydiyr": "Manifesto satu halaman tentang mengapa data harus tetap di tangan pemiliknya, beserta aplikasi yang dibuat dengan cara itu.",
      "mindough": "Pengelola tugas lintas perangkat yang sedang dibuat: rangkai tugas agar yang berikutnya baru muncul setelah yang sebelumnya selesai, plus peta kebiasaan, jurnal, dan pustaka.",
      "sideDock": "Alat bilah menu Mac yang memberi setiap desktop bilah Dock sendiri, tanpa mengubah Dock sistem. Tanpa izin sistem, dan tidak meninggalkan jejak saat ditutup.",
      "melodyKeeeys": "Suara keyboard dari bilah menu: bunyi tombol hasil rekaman asli saat mengetik, 22 paket suara, untuk macOS, Windows, dan Linux.",
      "vectorWallpapers": "Pembuat wallpaper desktop SVG: pilih pola, warnai tiap elemen sendiri-sendiri, lalu ekspor. Tersedia 27 pola."
    }
  },
  "about": {
    "title": "Tentang",
    "paragraphs": [
      "Saya Rei. Sehari-hari saya bekerja dengan data genom dan regulasi medis, dan di waktu luang saya membuat alat-alat kecil untuk diri sendiri."
    ],
    "hats": "Saya punya beberapa peran. Sebagai [[Penerjemah regulasi]], saya menjelaskan regulasi alat kesehatan dengan bahasa yang dipahami insinyur dan mendampingi produk langkah demi langkah sampai terdaftar. Sebagai [[Si teliti soal kualitas]], saya menulis SOP, menyusun daftar periksa, dan mengawal setiap perbaikan, jadi saat audit datang kami sudah siap. Sebagai [[Gembala proyek]], saya memecah kebutuhan dan menyusun jadwal supaya tim R&D, klinis, dan bioinformatika bergerak ke arah yang sama. Saya juga [[Orang produk yang menggambar dulu]]: tidak ada kode sebelum prototipe dan basis data dipikirkan matang. Saat waktunya membangun, saya jadi [[Serba bisa full-stack]] yang menulis `C#`, `Python`, `Docker`, dan basis data, mengisi apa pun yang kurang di proyek. Dan di depan data sekuensing, saya berubah jadi [[Detektif data sekuensing]]: menemukan mutasi di data DNA-seq dan sekalian membuat pipeline analisis lebih cepat. Di luar jam kerja, saya [[Perajin alat kecil]]: membuat ekstensi browser dan aplikasi desktop, serta beberapa situs kecil di `Cloudflare`. Dua hal paling penting bagi saya: alat yang nyaman dipakai, dan data yang tetap di tangan pemiliknya. Karena itu aplikasi saya tanpa akun dan tidak mengumpulkan data penggunaan; kalau mau sinkron, lewat Google Drive atau WebDAV milik Anda sendiri.",
    "roles": [
      {
        "name": "Penerjemah regulasi"
      },
      {
        "name": "Si teliti soal kualitas"
      },
      {
        "name": "Gembala proyek"
      },
      {
        "name": "Orang produk yang menggambar dulu"
      },
      {
        "name": "Serba bisa full-stack"
      },
      {
        "name": "Detektif data sekuensing"
      }
    ],
    "contact": "Hubungi saya di hi@rei8t.dev"
  },
  "invites": {
    "title": "Referal",
    "lead": "Layanan yang saya pakai dan saya suka. Kalau Anda mendaftar lewat tautan ini, biasanya kita berdua dapat hadiah kecil.",
    "empty": "Belum ada tautan referal.",
    "clicks": "{n} klik",
    "add": "Tambah",
    "edit": "Edit",
    "delete": "Hapus",
    "confirmDelete": "Hapus referal ini?",
    "save": "Simpan",
    "cancel": "Batal",
    "fieldTitle": "Nama",
    "fieldUrl": "Tautan referal",
    "fieldIntro": "Deskripsi (opsional)",
    "login": "Masuk admin",
    "logout": "Keluar",
    "signedIn": "Masuk sebagai {email}",
    "loginFailed": "Gagal masuk. Silakan coba lagi.",
    "loginForbidden": "Akun Google ini tidak punya akses admin.",
    "loginUnconfigured": "Login belum disiapkan.",
    "loadFailed": "Gagal memuat. Silakan muat ulang.",
    "saveFailed": "Gagal menyimpan: "
  },
  "footer": {
    "license": "Kode sumber berlisensi MIT"
  },
  "notFound": {
    "title": "Halaman tidak ditemukan",
    "back": "Kembali ke beranda"
  }
};

export default messages;
