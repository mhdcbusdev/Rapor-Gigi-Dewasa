/* =====================================================================
   config.js — SATU-SATUNYA tempat mengubah pengaturan
   ---------------------------------------------------------------------
   Repo: Rapor Gigi DEWASA (MHDC Group)
   Dipakai bersama oleh index.html, input.html, dan cari.html.
   ===================================================================== */

window.MHDC_CONFIG = {

  /* 1) URL Web App Apps Script milik spreadsheet DEWASA
        Apps Script > Deploy > Manage deployments > salin "Web app URL" */
  API_URL: "https://script.google.com/macros/s/AKfycbzg9QFxJ-rkdrzf5sKDABlf-A_CBJn6m52I7PBLOQqxK_btvJfTT7Z-ZP0D75DKulz3ow/exec",

  /* 2) Alamat halaman rapor. Akhiri dengan '?id=' */
  RAPOR_BASE: "https://mhdcbusdev.github.io/Rapor-Gigi-Dewasa/?id=",

  /* 3) Gambar di halaman rapor (semua sudah ada di repo ini) */
  GAMBAR_JUDUL: "Judul Rapor Gigi Dewasa.png",
  GAMBAR_GIGI:  "Gigi Dewasa.png",
  LOGO_KIRI:    "Logo Medikids.png",
  LOGO_KANAN:   "Logo MHDC.png",
  BG_HALAMAN:   "BG Rapor glgi Dewasa.png",

  /* 4) Nomor WhatsApp CRO untuk tombol "Tanya MHDC". Kosongkan kalau tidak dipakai */
  WA_CRO: "",

  /* 4b) TEMPLATE PESAN WHATSAPP (dikirim MANUAL oleh CRO dari cari.html)
         Otomatis pilih bahasa: kolom "Bahasa" = EN -> PESAN_WA_EN, selain itu PESAN_WA.
         Placeholder: {nama} {event} {tgl} {dokter} {link} {promo}
         (Tanpa emoji — aman di semua browser. Teks boleh diedit bebas.)

         Promo dewasa ganti tiap bulan. Kalau bulan ini TIDAK ada promo:
         kosongkan PROMO_URL ("") DAN hapus 2 baris promo di template. */

  PROMO_URL:    "https://mhdc.co.id/wp-content/uploads/Promo-Rapor-Gigi-Dewasa-Agustus.pdf",
  PROMO_URL_EN: "",

  /* Pesan Bahasa Indonesia */
  PESAN_WA:
`Halo, {nama}

Terima kasih sudah mengunjungi booth MHDC di {event} pada {tgl}.

Berikut hasil pemeriksaan kesehatan gigi Anda. Silakan dibuka melalui link berikut :

{link}

Klaim *PROMO SPESIAL PERAWATAN GIGI*, klik link ini :
{promo}

Jika ada yang ingin ditanyakan atau butuh bantuan lebih lanjut, silakan balas pesan ini ya. Kami siap membantu!

Salam sehat dan senyum menawan,
Tim MHDC Group`,

  /* Pesan Bahasa Inggris */
  PESAN_WA_EN:
`Hello, {nama}

Thank you for visiting the MHDC booth at {event} on {tgl}.

Here are the results of your dental check-up. You can open them through the link below :

{link}

Claim your *SPECIAL DENTAL CARE PROMO*, tap the link below :
{promo}

If you have any questions or need further assistance, feel free to reply to this message. We are happy to help!

Wishing you health and a confident smile,
MHDC Group Team`,

  /* 5) Link artikel edukasi di mhdc.co.id */
  ARTIKEL: {
    tambal:  "https://mhdc.co.id/artikel-dan-promo/tambal-gigi-prosedur-jenis-dan-mana-yang-cocok-untuk-kamu/",
    akar:    "https://mhdc.co.id/artikel-dan-promo/penting-ini-tanda-cabut-gigi-harus-segera-dilakukan/",
    ompong:  "https://mhdc.co.id/artikel-dan-promo/pentingnya-pasang-gigi-palsu-untuk-gigi-yang-hilang/",
    bungsu:  "https://mhdc.co.id/artikel-dan-promo/gigi-bungsu-tumbuh-miring-dan-bikin-sakit-harus-apa/",
    karang:  "https://mhdc.co.id/artikel-dan-promo/scaling-gigi-adalah/",
    susunan: "https://mhdc.co.id/artikel-dan-promo/gigi-berantakan-apa-solusinya/"
  }
};
