<script lang="ts">
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

export default {
  methods: {
    faCircleRight() {
      return faCircleRight
    },
    faCircleCheck() {
      return faCircleCheck
    }
  },
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      zoom: 10.3,
    };
  },
};


import {faCircleCheck, faCircleRight} from "@fortawesome/free-solid-svg-icons";



</script>

<template>
  <div>

    <div class="container-content_infoProfile">
      <img class="PP" src="" alt="Artist">
      <span class="name">Jeremy Ferrrrary</span>
      <span class="role">Artist <font-awesome-icon :icon="faCircleRight()" /></span>
      <a :href="'/donation'" type="submit" class="submit-button text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Donate</a>

    </div>
    <div class="donationList">
      <div class="card">
        <div class="card-left">
          <div class="pic">

          </div>
        </div>
        <div class="card-right">
          <span class="donationName">
            Lara
          </span>
          <span class="donationAmount">
            Amount: 4.99$
          </span>
        </div>
      </div>
      <div class="card">
        <div class="card-left">
          <div class="pic">

          </div>
        </div>
        <div class="card-right">
          <span class="donationName">
            Will
          </span>
          <span class="donationAmount">
            Amount: 23.99$
          </span>
        </div>
      </div>
      <div class="card">
        <div class="card-left">
          <div class="pic">

          </div>
        </div>
        <div class="card-right">
          <span class="donationName">
            Jeremy
          </span>
          <span class="donationAmount">
            Amount: 499$
          </span>
        </div>
      </div>
    </div>



  </div>
</template>

<style scoped>

body{
  overflow: hidden;
}

.container-content_infoProfile {
  margin: 5.5em ;
  gap: 1em;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.PP {
  display: flex;
  justify-content: center;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: var(--primary);
}

.name{
  font-size: 20px;
  color: #252525;
}

.donationList{
  padding-top: 5vh;
  z-index: 10;
  position: fixed;
  bottom: 10vh;
  left: 0;
  height: 40vh;
  width: 100%;
  background-color: var(--primary);
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  overflow-y: scroll;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.card{
  display: flex;
  flex-direction: row;
  width: 90%;
  height: 10vh;
  border-radius: 35px;
  background-color: var(--secondary);
  margin-bottom: 5%;

}
.submit-button, .submit-button:hover{
  background: #6E7DAB;
}
.card-left{
  height: 100%;
  width: 25vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-right{
  display: flex;
  flex-direction: column;
  width: 50vw;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
}

.pic{
  width: 4em;
  height: 4em;
  border-radius: 100%;
  background-color: #252525;
}



</style>