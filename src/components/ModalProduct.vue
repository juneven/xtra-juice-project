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
              <h2>Recommended For :</h2>
              <span v-for="(benefit, index) in details.benefits" :key="index"> <i class="bi bi-check"></i> {{ benefit }} </span>
            </div>

            <div class="nutrition-product">
              <h2>Nutritional Values :</h2>
              <span v-for="(nutrition, index) in details.compositionNutritions" :key="index"><i class="bi bi-plus-lg"></i> {{ nutrition }}</span>
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
  z-index: 9999;
}

.modal {
  background-color: #ff490f;
  position: absolute;
  border-radius: 40px;
  color: whitesmoke;
  width: 60%;
}

.header-modal .close-btn {
  position: absolute;
  top: 2%;
  right: 0;
  font-size: 2.5rem;
  padding: 0 0.5em;
  cursor: pointer;
  transition: 0.5s;
}

.header-modal .close-btn:hover {
  transform: translateY(-5px);
}

.header-modal img {
  width: 15%;
  margin-left: 2rem;
}

.content-modal {
  display: flex;
  justify-content: space-between;
  margin-inline: 2rem;
  margin-bottom: 2rem;
}

.content-modal .product-picture {
  text-align: center;
  background-color: whitesmoke;
  border-radius: 30px;
  height: 40%;
  padding: 1rem;
}

.content-modal .product-picture {
  width: 40%;
}

.content-modal .product-picture img {
  max-width: 100%;
}

.content-modal .detail-product-information {
  width: 55%;
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
  justify-content: space-between;
}

.informational-product .recommendation-product span {
  display: flex;
}

.informational-product .nutrition-product {
  display: flex;
  flex-direction: column;
}

.informational-product h2 {
  font-size: 1.3rem;
  margin-top: 0.5rem;
}

.informational-product span {
  font-size: 1rem;
}
</style>
