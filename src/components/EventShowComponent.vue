<script setup lang="ts">
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {faBasketShopping, faCircleCheck, faCircleXmark} from "@fortawesome/free-solid-svg-icons";


</script>

<template>
  <div class="container mb-20 pb-20">
    <div class="">
      <h1 class="fw">Perroquet bourré</h1>
    </div>

    <div class="container_infosEvent">
      <div class="">
        <img class="img_event_show" src="../assets/298995.jpg" alt="image event">
      </div>

      <div class="">
        <h2 class="fw title_name_ownerPlaceEvent">Frederic Philippe</h2>
        <p class="description_event">Dive into the vibrant atmosphere of the "Le Perroquet Bourré" bar in Lyon during a special evening of the Stand Up Festival. Laughter echoes through the room as spectators gather around dark wooden tables, eager to see local comedic talents. Headlining the event is Pierre Lacroix, famous for his incisive humor, captivating the audience with hilarious observations about Lyon life and whimsical anecdotes. The contagious energy of the evening reaches its peak as spectators laugh out loud, leaving with memorable memories of this lively night at the heart of Lyon's stand-up scene.</p>
      </div>

      <div class="container_infosEvent_date_price">
        <div class="">
          <p>04/03/24 | 19h00</p>
        </div>
        <div class="">
          <p>12.30 $</p>
        </div>
      </div>


      <div class="">
        <a :href="'/payment/'" class="btn btn_primary justify-center fw items-center	">Book<font-awesome-icon class="ms-3" :icon="faBasketShopping" /></a>
      </div>


      <div class="">
        <p class="text-align-start"><font-awesome-icon class="me-3" :icon="faCircleCheck" />4 seat available</p>
      </div>

      <div class="">
        <ul class="gap-5 flex flex-col">
          <li><a class="flex justify-between items-center" href=""><span class="fw">01</span><div class="flex flex-col text-align-start"><span>Pierre lacroix</span><span>13 min</span></div><div></div></a></li>
          <li><a class="flex justify-between items-center" href=""><span class="fw">02</span><div class="flex flex-col text-align-start"><span>Fred Didier</span><span>12 min</span></div><div></div></a></li>
          <li><a class="flex justify-between items-center" href=""><span class="fw">03</span><div class="flex flex-col text-align-start"><span>Jean Jacques</span><span>15 min</span></div><div></div></a></li>
        </ul>
      </div>

      <hr class="bg_line_dark">

      <a :href="'/event/show'" class="card">
        <div class="top">
          <div class="topLeft">
            <span class="name">Bistrot fringuant</span>
          </div>
          <div class="color">
            <div class="pill bg_pill_red">
            </div>
          </div>
        </div>
        <div class="content">
          <div class="left">
            <span class="price">16,40$</span>
            <p class="artist">
              <span class="title">Headlining</span>
              <span class="headName"><i>surprise guest</i></span>
              <span class="duration"><i>15:00min</i></span>
            </p>
          </div>
          <div class="right">
          <span class="available">
            <font-awesome-icon :icon="faCircleXmark" style="color:var(--vert);" />
            0 seat Available
          </span>
            <span class="total">
            <u>estimated time: 1H23</u>
          </span>
            <span class="distance">
            12km away from you
          </span>
          </div>
        </div>
      </a>

      <a :href="'/event/show'" class="card">
        <div class="top">
          <div class="topLeft">
            <span class="name">Fnac Bellecour</span>
          </div>
          <div class="color">
            <div class="pill bg_pill_green">

            </div>
          </div>
        </div>
        <div class="content">
          <div class="left">
            <span class="price">7,30$</span>
            <p class="artist">
              <span class="title">Headlining</span>
              <span class="headName"><i>Pauline Jolie</i></span>
              <span class="duration"><i>12:00min</i></span>
            </p>
          </div>
          <div class="right">
          <span class="available">
            <font-awesome-icon :icon="faCircleCheck" style="color:var(--vert);" />
            12 seat Available
          </span>
            <span class="total">
            <u>estimated time: 1H14</u>
          </span>
            <span class="distance">
            5km away from you
          </span>
          </div>
        </div>
      </a>

      <a :href="'/event/show'" class="card">
        <div class="top">
          <div class="topLeft">
            <span class="name">Le Jean Jean</span>
          </div>
          <div class="color">
            <div class="pill bg_pill_yellow">

            </div>
          </div>
        </div>
        <div class="content">
          <div class="left">
            <span class="price">9.99$</span>
            <p class="artist">
              <span class="title">Headlining</span>
              <span class="headName"><i>Pierre Bernard</i></span>
              <span class="duration"><i>14:00min</i></span>
            </p>
          </div>
          <div class="right">
          <span class="available">
            <font-awesome-icon :icon="faCircleCheck" style="color:var(--vert);" />
            1 seat Available
          </span>
            <span class="total">
            <u>estimated time: 1H43</u>
          </span>
            <span class="distance">
            3km away from you
          </span>
          </div>
        </div>
      </a>

    </div>



  </div>
</template>

<style scoped>

.container_infosEvent {
  gap: 1em;
  display: flex;
  flex-direction: column;
}

.img_event_show {
  width: 100%;
  height: 200px;
  margin: 1em 0;
  border-radius: 10px;
  background-color: var(--primary);
}

.title_name_ownerPlaceEvent {
  font-size: 28px;
  text-align: start;
  margin-bottom: 1em;
}

.description_event {
  width: 100%;
  text-align: justify;
}

.container_infosEvent_date_price {
  display: flex;
  align-items: center;
  margin-top: 2em;
  justify-content: space-between;
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
</style>