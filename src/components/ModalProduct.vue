<template>
  <div class="modal" data-aos="fade-down">
    <div class="header-modal">
      <img src="../assets/header-img/logo.png" alt="X-TRA JUICE" />
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

        <div class="btn-back" @click="hideModal">Back</div>
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
.modal {
  background-color: #ff490f;
  position: absolute;
  top: 0;
  width: 60vw;
  height: 75vh;
  border-radius: 50px;
  padding: 0 2rem 2rem;
  color: whitesmoke;
}

.header-modal img {
  width: 15%;
}

.content-modal {
  display: flex;
  justify-content: space-between;
}

.content-modal .product-picture {
  background-color: whitesmoke;
  border-radius: 50%;
  height: 50%;
  padding: 1rem;
}

.content-modal .product-picture img {
  height: 45vh;
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

.detail-product-information .btn-back {
  background-color: darkorange;
  width: 40%;
  font-size: 1rem;
  padding: 0.9rem 1rem;
  margin: 2rem 0;
  border-radius: 50px;
  text-align: center;
  color: white;
  cursor: pointer;
}
</style>
