<script lang="ts">
import { defineComponent } from 'vue';
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import axiosHttp from '@/auth/interceptor';
import { GlobalConstants } from "@/Common/global-constants";

export default defineComponent({
  methods: {
    faPenToSquare() {
      return faPenToSquare;
    },
    faTrash() {
      return faTrash;
    },
    async fetchElements() {
      try {
        const response = await axiosHttp.get(`${GlobalConstants.baseUrl}/venue/index`);
        console.log(response.data);

        if (response.data.content.length === 0) {
          this.venues = [];
          this.noData = true;
        } else {
          this.venues = response.data.content;
          this.noData = false;
        }
      } catch (error) {
        console.error("Erreur lors de la requête GET :", error);
      }
    }
  },
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      zoom: 10.3,
      venues: [],
      noData: false
    };
  },
  created() {
    this.fetchElements();
  }
});
</script>

<template>
  <div class="container">
    <div class="">
      <h1>Venue</h1>
      <a href="/profile">return</a>
    </div>

    <div class="mt-20">
      <h2 class="fw text-start">List :</h2>

      <div class="container_carteVenue">
        <template v-if="noData">
          <p style="color: var(--black)">No data for this moment</p>
        </template>
        <template v-else>
          <div v-for="(venue, index) in venues" :key="index" class="carte_venueIndex">
            <div>
              <h3 class="fw"><a :href="'/venue/' + venue.id">{{ venue.name }}</a></h3>
            </div>

            <button id="dropdownMenuIconButton" data-dropdown-toggle="dropdownDots" class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600" type="button">
              <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 4 15">
                <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/>
              </svg>
            </button>

            <div id="dropdownDots" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
              <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconButton">
                <li>
                  <a href="#" class="dropdownLink block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit<font-awesome-icon :icon="faPenToSquare()"/></a>
                </li>
              </ul>
              <div class="py-2">
                <a href="#" class="dropdownLink block px-4 py-2 text-sm text-gray-700 hover:bg-red-200 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Remove <font-awesome-icon :icon="faTrash()"/></a>
              </div>
            </div>
          </div>
        </template>
      </div>
      <div class="mt-20">
        <a class="btn btn_create_venue" href="/venue/create">create venue</a>
      </div>

    </div>
  </div>
</template>

<style scoped>
.container_carteVenue {
  gap: 1em;
  display: flex;
  color: var(--white);
  flex-direction: column;
  justify-content: center;
}

.carte_venueIndex {
  width: 100%;
  height: 40px;
  margin-top: 1em;
  padding: 1em 0 1em 2em;
  text-align: start;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  border-radius: 10px;
  background-color: var(--primary);
}

.btn_create_venue {
  width: 100%;
  display: flex;
  border-radius: 10px;
  background-color: var(--secondary);
  justify-content: start;
}

.dropdownLink{
  display: flex;
  justify-content: space-around;
  flex-direction: row;
}

#dropdownMenuIconButton{
  margin-right: 1vh;
}
</style>