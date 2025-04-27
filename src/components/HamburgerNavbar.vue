<template>
  <div class="menu-toggle" @click="toggleBtn">
    <input type="checkbox" />
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<script>
export default {
  name: "HamburgerNavbar",
  methods: {
    toggleBtn() {
      this.$emit('show')
    }
  },
};
</script>

<style>
.menu-toggle {
  height: 28px;
  display: none;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
}

.menu-toggle input {
  position: absolute;
  width: 50px;
  height: 40px;
  left: -5px;
  top: -5px;
  opacity: 0;
  cursor: pointer;
  z-index: 2;
}

.menu-toggle span {
  width: 35px;
  height: 5px;
  background-color: white;
  border-radius: 10px;
  transition: all .5s;
}

/* Animation */
.menu-toggle span:nth-child(2) {
    transform-origin: 0 0;
}

.menu-toggle input:checked ~ span:nth-child(2) {
    transform: rotate(45deg) translate(-1px, -1px);
}

.menu-toggle span:nth-child(2) {
    transform-origin: 0 0;
}

.menu-toggle span:nth-child(4) {
    transform-origin: 0 100%;
}

.menu-toggle input:checked ~ span:nth-child(4) {
    transform: rotate(-45deg) translate(-1px, 0);
}

.menu-toggle input:checked ~ span:nth-child(3) {
    transform: scale(0);
}
</style>
