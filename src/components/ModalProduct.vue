<template>
  <div class="backdrop">
    <div class="modal" data-aos="fade-down">
      <div class="header-modal">
        <img src="../assets/header-img/logo.png" alt="X-TRA JUICE" />

        <div class="close-btn" @click="hideModal">
          <i class="bi bi-x-lg"></i>
        </div>
      </div>
      <div class="content-modal">
        <div class="product-picture">
          <img :src="details.img" :alt="details.nameEn" />
        </div>

        <div class="detail-product-information">
          <div class="header-detail-product-information">
            <h2>{{ sectionMenuName }}</h2>
            <h1>{{ details.nameEN }}</h1>
          </div>

          <div class="informational-product">
            <div class="recommendation-product">
              <h2>Recommended For:</h2>
              <ul v-for="(benefit, index) in details.benefits" :key="index">
                <li>{{ benefit }}</li>
              </ul>
            </div>

            <div class="nutrition-product">
              <h2>Nutritional Values:</h2>
              <p v-for="(nutrition, index) in details.compositionNutritions" :key="index">+ {{ nutrition }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["details", "sectionMenuName"],
  name: "ModalProduct",
  methods: {
    hideModal() {
      this.$emit("close");
    },
  },
};
</script>

<style>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.336);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background-color: #ff490f;
  position: absolute;
  border-radius: 40px;
  padding: 0 2rem 2rem;
  color: whitesmoke;
  width: 60%;
}

.header-modal .close-btn {
  position: absolute;
  top: 3%;
  right: 0;
  font-size: 2.5rem;
  padding: 0 .5em;
  cursor: pointer;
  transition: .5s;
}

.header-modal .close-btn:hover {
  transform: translateY(-5px);
}

.header-modal img {
  width: 15%;
}

.content-modal {
  display: flex;
  justify-content: space-between;
  /* gap: 1rem; */
}

.content-modal .product-picture {
  text-align: center;
  background-color: whitesmoke;
  border-radius: 30px; 
  height: 40%;
  padding: 1rem;
}

.content-modal .product-picture img {
  height: 45vmin;
}

.content-modal .detail-product-information {
  width: 50%;
  display: flex;
  flex-direction: column;
  margin: auto;
}

.detail-product-information h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.detail-product-information h1 {
  font-size: 3.5rem;
  margin-bottom: 1rem;
}

.detail-product-information .informational-product {
  display: flex;
  height: 50%;
  justify-content: space-between;
  gap: 1rem;
}

.informational-product .recommendation-product ul li  {
  font-size: 1rem;
}

.informational-product .nutrition-product {
  display: flex;
  flex-direction: column;
}

.informational-product h2 {
  font-size: 1.3rem;
  margin-top: 0.5rem;
}

.informational-product p {
  font-size: 1rem;
}

/* .detail-product-information .btn-back {
  background-color: darkorange;
  width: 40%;
  font-size: 1rem;
  padding: 0.9rem 1rem;
  margin: 2rem 0;
  border-radius: 50px;
  text-align: center;
  color: white;
  cursor: pointer;
} */
</style>
