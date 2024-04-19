
<script lang="ts">
import { defineComponent } from 'vue';
import router from '@/router';
import { GlobalConstants } from "@/Common/global-constants";
import axiosHttp from "@/auth/interceptor";

export default defineComponent({
  data() {
    return {
      venueData: {
        name: '',
        SIRET: 0,
        email: '',
        address: '',
        seatCapacity: 0
      } as {
        name: string;
        SIRET: number;
        email: string;
        address: string;
        seatCapacity: number;
      }
    };
  },
  methods: {
    async createVenue() {
      try {
        const response = await axiosHttp.post(`${GlobalConstants.baseUrl}/venue/create`, this.venueData);
        this.resetForm();
        router.push('/venue');
      } catch (error) {
        console.error("Erreur lors de la requête :", error);
      }
    },
    resetForm() {
      this.venueData = {
        name: '',
        SIRET: 0,
        email: '',
        address: '',
        seatCapacity: 0
      };
    }
  }
});
</script>

<template>
  <div class="container">
    <div class="">
      <h1 class="">Register a venue</h1>
      <a href="/venue">return</a>
    </div>
    <div class="mt-10">
      <form class="form_create_venue" @submit.prevent="createVenue">
        <div class="div_create_venue">
          <div class="">
            <label for="placeName">Place’s name</label>
            <input type="text" id="placeName" v-model="venueData.name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="JeanJean Place" required />
          </div>
          <div class="">
            <label for="siret">SIRET number</label>
            <input type="number" pattern="[0-9]*" inputmode="numeric" id="siret" v-model="venueData.SIRET" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1234 5678 9012" required />
          </div>
          <div class="">
            <label for="email">Email</label>
            <input type="email" id="email" v-model="venueData.email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="example@mail.com" required />
          </div>
          <div class="">
            <label for="address">Address</label>
            <input type="text" id="address" v-model="venueData.address" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="5 rue des pommes" required />
          </div>
          <div class="">
            <label for="seatCapacity">Seat Capacity</label>
            <input type="number" id="seatCapacity" v-model.number="venueData.seatCapacity" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="15" required />
          </div>
        </div>
        <button type="submit" class="btn btn_primary mt-5 text-align-center">Create a place</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.form_create_venue {
  gap: 1em;
  display: flex;
  flex-direction: column;
  text-align: center;
}
.div_create_venue {
  gap: 1em;
  display: flex;
  flex-direction: column;
  text-align: start;
}
</style>