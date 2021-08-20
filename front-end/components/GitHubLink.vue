<template>
  <div class="slide__left d-flex align-center">
    <div class="text">
      <span class="mr-1 hidden"> Acesse </span>
    </div>
    <div class="icon__wrapper d-flex justify-center align-center">
      <a href="https://github.com/TTeuZ/Dashboard-Automatica" target="_blank">
        <v-icon>
          mdi-github
        </v-icon>
      </a>
    </div>
  </div>
</template>

<style lang="scss" scope>
.icon__wrapper {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: whitesmoke;
}
.text {
  width: auto;
  overflow: hidden;
}
.hidden {
  display: none;
}
.slide__left {
  position: absolute;
  bottom: 15px;
  right: 10px;
}
.slide__left:hover {
  .hidden {
    display: initial;
    animation: slide-left 0.5s;
  }
}
@keyframes slide-left {
  from {
    margin-left: 100%;
    width: 300%;
  }
  to {
    margin-left: 0%;
    width: 100%;
  }
}
</style>
