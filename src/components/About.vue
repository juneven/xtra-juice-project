<template>
  <article id="about-us">
    <div class="about-header-content">
      <h3 class="header-title" data-aos="fade-right">ABOUT US</h3>
      <div class="underline" data-aos="zoom-in"></div>
    </div>

    <div class="about-content">
      <div class="left-content">
        <img src="../assets/about-img/picture-1.jpeg" alt="X-TRA Juice Picture 1" data-aos="fade-down" />
        <img src="../assets/about-img/picture-2.jpeg" alt="X-TRA Juice Picture 2" data-aos="fade-up" />
      </div>

      <div class="right-content">
        <p class="p1" data-aos="fade-left">
          Usaha jus ini didirikan oleh Pak Aga dan istrinya pada pertengahan tahun 2006 di kantin Universitas Internasional Batam (UIB). Berangkat dari kepedulian terhadap gaya hidup mahasiswa/i yang banyak mengonsumsi minuman instan,
          mereka ingin menawarkan alternatif yang lebih sehat melalui jus buah segar. Dengan menggunakan bahan-bahan alami tanpa pengawet, usaha ini hadir untuk mengajak generasi muda lebih peduli terhadap kesehatan sejak dini, dimulai dari
          pilihan minuman sehari-hari.
        </p>

        <p class="p2" data-aos="fade-right">
          Saat ini, kami menyediakan 16 pilihan jus buah segar yang bisa disesuaikan dengan selera dan kebutuhan. Selain jus, kami juga menambahkan beberapa menu makanan ringan seperti roti telur, hotdog, dan burger yang dibuat sendiri oleh
          istri Pak Aga. Semua menu disiapkan dengan cita rasa rumahan dan bahan yang terjaga kualitasnya. Usaha ini kini turut dibantu oleh anak mereka, menjadikannya usaha ini yang terus berkembang sambil menjaga komitmen terhadap
          kualitas, kesehatan, dan pelayanan yang ramah.
        </p>
      </div>
    </div>
  </article>
</template>

<style>
article#about-us {
  margin: 4rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

article#about-us .about-header-content h3.header-title {
  font-size: 2.5rem;
  letter-spacing: 5px;
  color: #0a090c;
}

article#about-us .about-header-content .underline {
  width: 12%;
  height: 10px;
  background-color: #ff490f;
  border-radius: 10px;
}

.about-content {
  display: flex;
  align-items: flex-start;
  padding: .5rem .75rem;
  gap: 1rem;
}

.left-content {
  width: 50%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 1.5rem;
}

.left-content img {
  width: 45%;
  border-radius: 10px;
}

.left-content img:nth-child(2) {
  margin-top: 5rem;
}

.right-content {
  width: 50%;
  text-align: justify;
}

.right-content p {
  font-size: 1.1rem;
  margin: 1em 0;
  color: #666;
  line-height: 1.85em;
}
</style>
