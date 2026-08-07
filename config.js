/* =====================================================================
   config.js — SATU-SATUNYA tempat mengubah pengaturan
   ---------------------------------------------------------------------
   Repo: Rapor Gigi DEWASA (MHDC Group)
   Dipakai bersama oleh index.html, input.html, dan cari.html.
   ===================================================================== */

window.MHDC_CONFIG = {

  /* 1) WAJIB DIISI — URL Web App Apps Script milik spreadsheet DEWASA
        Apps Script > Deploy > Manage deployments > salin "Web app URL" */
  API_URL: "",

  /* 2) Alamat halaman rapor. Sesuaikan kalau nama repo berbeda,
        dan harus sama dengan RAPOR_BASE di watzap.gs */
  RAPOR_BASE: "https://mhdcbusdev.github.io/Rapor-Gigi-Dewasa/?id=",

  /* 3) Gambar di halaman rapor (semua sudah ada di repo ini) */
  GAMBAR_JUDUL: "Judul Rapor Gigi Dewasa.png",
  GAMBAR_GIGI:  "Gigi Dewasa.png",
  LOGO_KIRI:    "Logo Medikids.png",
  LOGO_KANAN:   "Logo MHDC.png",
  BG_HALAMAN:   "BG Rapor glgi Dewasa.png",

  /* 4) Peta gigi berwarna. false = hanya gambar di atas yang tampil */
  PETA_WARNA: true,

  /* 5) Nomor WhatsApp CRO untuk tombol "Tanya MHDC". Kosongkan kalau tidak dipakai */
  WA_CRO: "",

  /* 6) Link artikel edukasi di mhdc.co.id */
  ARTIKEL: {
    tambal:
      "https://mhdc.co.id/artikel-dan-promo/tambal-gigi-prosedur-jenis-dan-mana-yang-cocok-untuk-kamu/",
    akar:
      "https://mhdc.co.id/artikel-dan-promo/penting-ini-tanda-cabut-gigi-harus-segera-dilakukan/",
    ompong:
      "https://mhdc.co.id/artikel-dan-promo/pentingnya-pasang-gigi-palsu-untuk-gigi-yang-hilang/",
    bungsu:
      "https://mhdc.co.id/artikel-dan-promo/gigi-bungsu-tumbuh-miring-dan-bikin-sakit-harus-apa/",
    karang:
      "https://mhdc.co.id/artikel-dan-promo/scaling-gigi-adalah/",
    susunan:
      "https://mhdc.co.id/artikel-dan-promo/gigi-berantakan-apa-solusinya/"
  }
};
