
<script>
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer } from "@vue-leaflet/vue-leaflet";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import axiosHttp from "@/auth/interceptor";
import { GlobalConstants } from "@/Common/global-constants";

export default {
  methods: {
    faCircleCheck() {
      return faCircleCheck;
    },
    async fetchElements() {
      try {
        const response = await axiosHttp.get(`${GlobalConstants.baseUrl}/event/index`);
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
    LMap,
    LTileLayer,
  },
  data() {
    return {
      zoom: 10.3,
      venues: [],
      noData: false,
    };
  },
  created() {
    this.fetchElements();
  }
};
</script>

<template>
  <div>
    <div class="map" style="height:55vh;">
      <l-map ref="map" v-model:zoom="zoom" :center="[45.75, 5.15]">
        <l-tile-layer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            layer-type="base"
            name="OpenStreetMap"
        ></l-tile-layer>
      </l-map>
    </div>
    <div class="eventList">
      <div v-if="noData" class="no-data-message">No data for this moment</div>
      <div v-else>
        <a v-for="event in venues" :key="event.id" :href="`/event/show/${event.id}`">
          <div class="card">
            <div class="top">
              <div class="topLeft">
                <span class="name">{{ event.Venue.name }}</span>
              </div>
              <div class="color">
                <div class="pill"></div>
              </div>
            </div>
            <div class="content">
              <div class="left">
                <span class="price">{{ event.price }}$</span>
                <p class="artist">
                  <span class="title">Headlining</span>
                  <span class="headName"><i>{{ event.Venue.name }}</i></span>
                  <span class="duration"><i>{{ event.duration }}</i></span>
                </p>
              </div>
              <div class="right">
                <span class="available">
                  <font-awesome-icon :icon="faCircleCheck()" style="color:var(--vert);" />
                  {{ event.Venue.seatCapacity }} seat Available
                </span>
                <span class="total">
                  <u>estimated time: {{ event.estimatedTime }}</u>
                </span>
                <span class="distance">
                  {{ event.distance }} away from you
                </span>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>



<style scoped>

.map{
  position: relative;
  z-index: 1;
}

.eventList{
  padding-top: 5vh;
  z-index: 10;
  position: fixed;
  bottom: 10vh;
  height: 40vh;
  width: 100%;
  background-color: #D1E3DD;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  overflow-y: scroll;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.eventList>div{
  width: 80%;
  margin: auto;
}
.eventList>div>a{
  width: 100%;
  margin: auto;
}

.card{
  display: flex;
  flex-direction: column;
  background-color: #575366;
  height: 20vh;
  width: 100%;
  border-radius: 25px;
  margin-bottom: 5vh;
}

.top{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.topLeft{
  background-color: var(--vert);
  border: 1px solid var(--black);
  border-top-left-radius: 25px;
  height: 5vh;
  width: 45vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

.pill{
  height: 4vh;
  width: 4vh;
  border-radius: 100%;
  background-color: var(--check_yellow);
  margin-right: 10px;
  margin-top: 5px;
}

.content{
  display: flex;
  flex-direction: row;
}

.artist{
  display: flex;
  flex-direction: column;
}

.price{
  font-size: 18px;
  color: white;
}

.title{
  font-size: 12px;
  color: white;
}

.headName+.duration{
  font-size: 13px;
}

.headName{
  color: #D4D4D4;
}

.duration{
  color: #A8A8A8;
}

.left{
  width: 40%;
  padding-left: 20px;
  padding-top: 10px;
  height: 15vh;
  flex-direction: column;
  display: flex;
  justify-content: space-around;
}

.right{
  width: 60%;
  padding-left: 20px;
  padding-top: 10px;
  height: 15vh;
  flex-direction: column;
  display: flex;
  justify-content: space-evenly;
}

.available{
  color: #D4D4D4;
}

.total{
  font-size: 12px;

  text-transform: uppercase;
  color: white;
}

.distance{
  font-size: 12px;
  color: white;
}

a{
  margin-left: 10%;
  width: 100%;
}

</style>