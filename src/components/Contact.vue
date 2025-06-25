<template>
  <footer :class="{ 'contact-page': $route.path === '/contact-us' }">
    <div class="top-footer">
      <div class="top-footer-header">
        <img src="../assets/header-img/logo.png" alt="X-TRA JUICE" class="logo" />

        <h2 class="title">Find Us</h2>
      </div>

      <div class="top-footer-content">
        <div class="location">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.056687477547!2d104.00046797472417!3d1.1195430988697368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d98be09646b351%3A0x36a826082690c786!2sUniversitas%20Internasional%20Batam!5e0!3m2!1sid!2sid!4v1750393537388!5m2!1sid!2sid"
            width="900"
            height="400"
            style="border: 1px solid white; padding: 0.5rem; background-color: white; border-radius: 10px"
            allowfullscreen="false"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div class="whatsapp">
          <h3 class="title">Contact us :</h3>
          <i class="bi bi-whatsapp"></i>
          <span>+62 813-7222-1974</span>
        </div>
      </div>
    </div>

    <div class="bottom-footer" v-if="$route.path === '/'">
      <p class="copyright">&copy;X-TRA JUICE | ALL RIGHTS RESERVED</p>
    </div>
  </footer>
</template>

<style>
body.contact-page-bg footer.contact-page {
  color: #ff490f;
  background-color: #feefd8;
}

body.contact-page-bg h2.title {
  font-size: 2.5rem;
}

body.contact-page-bg .top-footer .top-footer-content {
  flex-direction: column;
  gap: 1.5rem;
}

body.contact-page-bg footer.contact-page .top-footer .top-footer-content .whatsapp {
  text-align: center;
}

footer.contact-page {
  margin-top: 8rem;
}
</style>
