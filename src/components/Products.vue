<template>
  <article id="products">
    <div class="header-products">
      <h2 class="title">Products</h2>

      <div class="right-section-menu">
        <div class="categories">
          <a class="beverages active" ref="beveragesBtn" @click="addClassActive">Juices</a>
          <a class="foods" ref="foodsBtn" @click="addClassActive">Foods</a>
        </div>
        <div class="buttons">
          <a class="left-arrow" @click="previousPage">
            <i class="bi bi-arrow-left-square-fill"></i>
          </a>
          <a class="right-arrow" @click="nextPage" ref="next">
            <i class="bi bi-arrow-right-square-fill"></i>
          </a>
        </div>
      </div>
    </div>

    <div class="content-products" v-if="sectionMenuSelected === 'Juices'">
      <div class="card" data-aos="fade-down" v-for="(juice, index) in filteredJuicesMenu" :key="index">
        <div class="card-img">
          <img :src="juice.img" :alt="juice.nameEN" ref="imgElement" />
        </div>

        <div class="card-title">
          <h2>{{ juice.nameEN }}</h2>
          <span class="sub-heading">{{ juice.nameIND }}</span>
        </div>

        <div class="card-content">
          <span class="price">Rp {{ juice.price }}</span>
        </div>

        <a class="btn-details" @click="seeDetails(juice)">View Details</a>
      </div>
    </div>
    <div class="content-products" v-else-if="sectionMenuSelected === 'Foods'">
      <div class="card" data-aos="fade-down" v-for="(food, index) in foods" :key="index">
        <div class="card-img">
          <img :src="food.img" :alt="food.nameEN" ref="imgElement" />
        </div>

        <div class="card-title">
          <h2>{{ food.nameEN }}</h2>
          <span class="sub-heading">{{ food.nameIND }}</span>
        </div>

        <div class="card-content">
          <span class="price">Rp {{ food.price }}</span>
        </div>

        <a class="btn-details" @click="seeDetails(food)">View Details</a>
      </div>
    </div>

    <ModalProduct v-if="showModal" :details="details" :sectionMenuName="sectionMenuSelected" @close="seeDetails " />
  </article>
</template>

<script>
import AppleJuice from "../assets/products-img/juices/apple.png";
import AvocadoJuice from "../assets/products-img/juices/avocado.png";
import CarrotJuice from "../assets/products-img/juices/carrot.png";
import CucumberJuice from "../assets/products-img/juices/cucumber.png";
import LemonJuice from "../assets/products-img/juices/lemon.png";
import CornJuice from "../assets/products-img/juices/corn.png";
import GrapesJuice from "../assets/products-img/juices/grapes.png";
import GuavaJuice from "../assets/products-img/juices/guava.png";
import ManggoJuice from "../assets/products-img/juices/manggo.png";
import MelonJuice from "../assets/products-img/juices/melon.png";
import OrangeJuice from "../assets/products-img/juices/orange.png";
import PapayaJuice from "../assets/products-img/juices/papaya.png";
import StrawberryJuice from "../assets/products-img/juices/strawberry.png";
import SoursopJuice from "../assets/products-img/juices/soursop.png";
import TomatoJuice from "../assets/products-img/juices/tomato.png";
import WatermelonJuice from "../assets/products-img/juices/watermelon.png";

import Burger from "../assets/products-img/foods/burger.png";
import Hotdog from "../assets/products-img/foods/hotdog.png";

import ModalProduct from "./ModalProduct.vue";

export default {
  name: "Products",
  components: {
    ModalProduct,
  },
  data() {
    return {
      classActive: "active",
      // Membatasi setiap halaman hanya 8 menu (Dihitung dengan Index)
      lastIndex: 7,
      showModal: false,
      juices: [
        {
          nameEN: "Apple",
          nameIND: "Apel",
          price: "13.000",
          img: AppleJuice,
          compositionNutritions: ['Kaya akan serat', 'Vitamin C', 'Antioksidan'],
          benefits: ['Detoks Ringan', 'Menjaga Berat Badan', 'Kulit Kusam'],
        },
        {
          nameEN: "Avocado",
          nameIND: "Alpukat",
          price: "13.000",
          img: AvocadoJuice,
          compositionNutritions: ['Lemak Sehat', 'Vitamin E', 'Kalium', 'Serat Tinggi'],
          benefits: ['Bulking', 'Menjaga Kelembapan Kulit', 'Energi Tahan Lama'],
        },
        {
          nameEN: "Carrot",
          nameIND: "Wortel",
          price: "13.000",
          img: CarrotJuice,
          compositionNutritions: ['Beta Karoten', 'Vitamin A', 'Antioksidan'],
          benefits: ['Kesehatan Mata', 'Kulit Kering', 'Daya Tahan Tubuh'],
        },
        {
          nameEN: "Cucumber",
          nameIND: "Timun",
          price: "13.000",
          img: CucumberJuice,
          compositionNutritions: ['Kandungan ', 'Vitamin C', 'Antioksidan'],
          benefits: ['Hidrasi Kulit', 'Menurunkan Tekanan Darah', 'Detoksifikasi'],
        },
        {
          nameEN: "Lemon",
          nameIND: "Lemon",
          price: "13.000",
          img: LemonJuice,
          compositionNutritions: ['Vitamin C Tinggi', 'Antioksidan', 'Asam Sitrat'],
          benefits: ['Diet', 'Metabolisme Sehat', 'Kulit Cerah'],
        },
        {
          nameEN: "Corn",
          nameIND: "Jagung",
          price: "13.000",
          img: CornJuice,
          compositionNutritions: ['Karbohidrat Kompleks', 'Vitamin B1', 'Serat'],
          benefits: ['Energi Tambahan', 'Camilan Sehat', 'Anak-anak'],
        },
        {
          nameEN: "Grapes",
          nameIND: "Anggur",
          price: "13.000",
          img: GrapesJuice,
          compositionNutritions: ['Antioksidan Tinggi (resveratrol)', 'Vitamin C', 'polifenol'],
          benefits: ['Anti-aging', 'Kesehatan Jantung', 'Kulit Kusam'],
        },
        {
          nameEN: "Guava",
          nameIND: "Jambu",
          price: "13.000",
          img: GuavaJuice,
          compositionNutritions: ['Vitamin C Tinggi', 'Serat', 'Folat'],
          benefits: ['Meningkatkan daya tahan tubuh', 'Sistem Pencernaan', 'Ibu Hamil'],
        },
        {
          nameEN: "Mango",
          nameIND: "Mangga",
          price: "13.000",
          img: ManggoJuice,
          compositionNutritions: ['Vitamin A & C', 'Beta-karoten', 'Gula Alami'],
          benefits: ['Energi Cepat', 'Kulit Bercahaya', 'Bulking Ringan'],
        },
        {
          nameEN: "Melon",
          nameIND: "Melon",
          price: "13.000",
          img: MelonJuice,
          compositionNutritions: ['Kandungan Air Tinggi', 'Vitamin C', 'Kalium'],
          benefits: ['Hidrasi Tubuh', 'Kulit Sensitif', 'Pencernaan Ringan'],
        },
        {
          nameEN: "Orange",
          nameIND: "Jeruk",
          price: "13.000",
          img: OrangeJuice,
          compositionNutritions: ['Vitamin C', 'Antioksidan', 'Serat Larut'],
          benefits: ['Meningkatkan daya tahan tubuh', 'Kulit Kering'],
        },
        {
          nameEN: "Papaya",
          nameIND: "Pepaya",
          price: "13.000",
          img: PapayaJuice,
          compositionNutritions: ['Enzim Papain', 'Vitamin A & C', 'Serat'],
          benefits: ['Pencernaan Sehat', 'Kulit Kasar', 'Antiinflamasi'],
        },
        {
          nameEN: "Strawberry",
          nameIND: "Stroberi",
          price: "13.000",
          img: StrawberryJuice,
          compositionNutritions: ['Vitamin C', 'Asam Ellagic', 'Mangan'],
          benefits: ['Mencerahkan Kulit', 'Anti-aging', 'Program Diet'],
        },
        {
          nameEN: "Soursop",
          nameIND: "Sirsak",
          price: "13.000",
          img: SoursopJuice,
          compositionNutritions: ['Vitamin B1 & C', 'Serat', 'Senyawa AntiKanker'],
          benefits: ['Imunitas Tubuh', 'Mengurangi Peradangan', 'Kesehatan Pencernaan'],
        },
        {
          nameEN: "Tomato",
          nameIND: "Tomat",
          price: "13.000",
          img: TomatoJuice,
          compositionNutritions: ['Likopen', 'Vitamin C & A', 'Kalium'],
          benefits: ['Kulit Berminyak', 'Antioksidan Tinggi', 'Jantung Sehat'],
        },
        {
          nameEN: "Watermelon",
          nameIND: "Semangka",
          price: "13.000",
          img: WatermelonJuice,
          compositionNutritions: ['Kandungan Air Tinggi', 'Likopen', 'Vitamin A & C'],
          benefits: ['Hidrasi Maksimal', 'Aktifitas Fisik', 'Kulit Segar'],
        },
      ],
      foods: [
        {
          nameEN: "Burger",
          nameIND: "Burger",
          price: "15.000",
          img: Burger,
          compositionNutritions: ['Protein Tinggi', 'Lemak', 'Zat Besi'],
          benefits: ['Diet Tinggi Protein', 'Makanan Cepat dan Mengenyangkan']
        },
        {
          nameEN: "Hotdog",
          nameIND: "Hotdog",
          price: "12.000",
          img: Hotdog,
          compositionNutritions: ['Daging Olahan', 'Protein', 'Natrium'],
          benefits: ['Camilan Praktis dan Cepat Saji', 'Penambah Energi untuk Aktivitas Harian']
        },
      ],
      filteredJuicesMenu: [],
      sectionMenuSelected: "Juices",
      details: null,
    };
  },
  methods: {
    addClassActive(e) {
      const foodsBtn = this.$refs.foodsBtn;
      const beveragesBtn = this.$refs.beveragesBtn;
      const elTargeted = e.target;

      if (elTargeted === beveragesBtn) {
        foodsBtn.classList.remove(this.classActive);
        beveragesBtn.classList.add(this.classActive);
      } else {
        beveragesBtn.classList.remove(this.classActive);
        foodsBtn.classList.add(this.classActive);
      }

      this.sectionMenuSelected = elTargeted.textContent;
    },
    previousPage() {
      this.lastIndex = 7;

      const startMenu = this.juices.filter((juice, index) => {
        if (index <= this.lastIndex) {
          return juice;
        }
      });

      this.filteredJuicesMenu = startMenu;

      const nextBtn = this.$refs.next;

      nextBtn.removeAttribute("disabled");
    },
    nextPage() {
      const restMenus = this.juices.filter((juice, index) => {
        if (index > this.lastIndex) {
          this.lastIndex = index;
          return juice;
        }
      });

      if (this.lastIndex === this.juices.length - 1) {
        const nextBtn = this.$refs.next;

        nextBtn.setAttribute("disabled", true);
      }

      this.filteredJuicesMenu = restMenus;
    },
    seeDetails(category) {
      this.details = category;

      this.showModal = !this.showModal;
    }
  },
  mounted() {
    this.juices.filter((juice, index) => {
      if (index <= this.lastIndex) {
        this.filteredJuicesMenu.push(juice);
      }
    });
  },
};
</script>

<style>
article#products {
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
}

article#products .header-products {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 3px solid whitesmoke;
  margin: 3rem 2.5rem 0;
}

.header-products .right-section-menu {
  margin-right: 1.5rem;
  width: 30%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.right-section-menu .categories {
  padding: 0.5em;
}

.categories .active {
  background-color: #ff490f;
  color: white;
  border-radius: 100px;
}

.categories a {
  text-decoration: none;
  color: black;
  padding: 0.5em 1.5em;
  cursor: pointer;
}

.right-section-menu .buttons {
  padding: 0.5em;
  font-size: 2rem;
}

.buttons a.right-arrow[disabled="true"] i {
  color: #666;
}

.buttons a {
  text-decoration: none;
  color: black;
  padding: 0.5em;
  cursor: pointer;
}

.content-products {
  align-self: center;
  width: 87vw;
  margin: 1rem;
  display: flex;
  flex-wrap: wrap;
}

.card {
  padding: 0.5em;
  background-color: whitesmoke;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
}

.card div {
  margin: 0.5rem 0;
}

.card-img img {
  width: 12vmax;
  border-radius: 10px;
  margin: 0 3.5rem;
}

.card-title h2 {
  font-size: 1.5rem;
  font-weight: normal;
  text-align: center;
}

.card-title span.sub-heading {
  display: inline-block;
  width: 100%;
  font-size: 1rem;
  color: whitesmoke;
  text-shadow: 1px 1px 1px black, 0 0 1px black;
  text-align: center;
  margin: 0.5em 0;
}

.card-content span.price {
  display: inline-block;
  font-size: 1.3rem;
  font-weight: bold;
  text-align: center;
  width: 100%;
}

.card .btn-details {
  font-size: 1rem;
  font-weight: bold;
  background-color: darkorange;
  color: white;
  padding: 0.5em 1em;
  border-radius: 8px;
  display: inline-block;
  margin: 0.5rem 0;
  text-align: center;
  cursor: pointer;
}
</style>
